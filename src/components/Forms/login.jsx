import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { emailPasswordLogin, googleLogin } from '../../helpers/oauth';
import { FaGoogle } from 'react-icons/fa';
import { FormArea } from './styled';
import { useForm } from 'react-hook-form';
import { useAuthHook } from '../../context/auth';
import classNames from 'classnames';

const LoginFormArea = () => {
    // route handle
    const history = useHistory();
    const location = useLocation();
    const { from, message } = location.state || {from: '/', message: 'Sign In'};

    // custom errors
    const [otherErr, setOtherErr] = useState('');

    // context :login
    const { loginUser } = useAuthHook();

    // react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    const onFormSubmiting = async (data) => {
        await emailPasswordLogin(data)
        .then(data => {
            if (data.error) {
                // errors
                if (data.error.code === '') {
                    setOtherErr('Wrong Password')
                } else {
                    setOtherErr(data.error.message)
                }
            }
            else {
                // no error
                // context login
                loginUser({
                    name: data.displayName,
                    email: data.email,
                    photo: data.photoURL
                })
                history.replace(from);
            }
        })
        .catch(err => {
            console.log(err);
            setOtherErr(err.message);
        })
    }

    // Google Login
    const loginWithGoogle = () => {
        googleLogin()
        .then(data => {
            // context login 
            loginUser({
                name: data.displayName,
                email: data.email,
                photo: data.photoURL
            })
            history.replace(from);
        })
        .catch(err => {
            console.log(err);
            setOtherErr(err.message);
        })
    }


    // return
    return (
        <FormArea autoComplete="off" onSubmit={handleSubmit(onFormSubmiting)}>
            <h1>{message}</h1>

            <input type="text" name="email" 
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Email Address is required'
                    },
                    minLength: { value: 8, message: 'Minimum 8 character is required' },
                    maxLength: {
                        value: 32,
                        message: 'Maximum 32 character can be allowed'
                    },
                    pattern: {
                        value: /^\S[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\S$/,
                        message: 'Please provide your valid Email Address'
                    }
                })}
                className={classNames({'form_err': errors.email})}
                placeholder="Email Address" />
                {errors.email && (
                    <span className='form_err'>{errors.email.message}</span>
                )}


            <input type="password" name="password" 
                {...register('password', {
                    required: {
                        value: true,
                        message: 'Password is required'
                    },
                    minLength: { value: 8, message: 'Minimum 8 character is required' },
                    maxLength: {
                        value: 32,
                        message: 'Maximum 32 character can be allowed'
                    },
                    pattern: {
                        value: /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/g,
                        message: 'Please make your Password more strong'
                    }
                })}
                className={classNames({'form_err': errors.password})}
                placeholder="Password" />
                {errors.password && (
                    <span className='form_err'>{errors.password.message}</span>
                )}
            <button type="submit">log in</button>

            <div className="oauth">
                <div className="oauth_item" onClick={loginWithGoogle}>
                    <span><FaGoogle /></span>
                    <span>continue with google</span>
                </div>
            </div>

            <p>Don't have any account? <Link to='/register'>Register Now</Link></p>
        </FormArea>
    )
}

export default LoginFormArea;