import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { emailPasswordRegister, googleLogin } from '../../helpers/oauth';
import { FaGoogle } from 'react-icons/fa';
import { FormArea } from './styled';
import classNames from 'classnames';
import { useAuthHook } from '../../context/auth';

const RegisterFormArea = () => {
    // route handle
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || {from: '/'};

    // custom errors
    const [otherErr, setOtherErr] = useState('');

    // context :loginUser
    const { loginUser } = useAuthHook();

    // react-hook-form
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'all' });
    
    const onFormSubmiting = async (data) => {
        await emailPasswordRegister(data)
        .then(data => {
            if (data.error) {
                // errors
                setOtherErr(data.error.message)
            }
            else {
                // no error
                // context loginUser
                loginUser({
                    name: data.displayName || '',
                    email: data.email,
                    photo: data.photoURL
                });
                history.replace(from);
            }
        })
        .catch(err => {
            console.log(err);
            setOtherErr(err.message);
        })
    }


    // confirm password
    let pwd = useRef({});
    pwd.current = watch('password', '');




    // Google Login
    const loginWithGoogle = () => {
        googleLogin()
        .then(data => {
            // context login 
            loginUser({
                name: data.displayName,
                email: data.email,
                photo: data.photoURL,
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
            <h1>Sign Up</h1>

            <p>
                {otherErr.length >= 1 && (
                    <span className='form_err'>{ otherErr }</span>
                )}
            </p>

            <input type="text" name="name" 
                {...register('name', {
                    required: { value: true, message: 'Name is required'},
                    minLength: {
                        value: 6,
                        message: 'Minimum 5 characters is required'
                    },
                    maxLength: {
                        value: 32,
                        message: 'Maximum 32 characters can be allowed'
                    },
                    pattern: {
                        value: /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/g,
                        message: 'Please provide your valid Full Name'
                    }
                })}
                className={classNames({'form_err': errors.name})}
                placeholder="Full Name" />
                {errors.name && (
                    <span className='form_err'>{errors.name.message}</span>
                )}


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


            <input type="password" name="c_password" 
                {...register('c_password', {
                    required: {
                        value: true,
                        message: 'Confirm Password is required'
                    },
                    minLength: { value: 8, message: 'Minimum 8 character is required' },
                    maxLength: {
                        value: 32,
                        message: 'Maximum 32 character can be allowed'
                    },
                    validate: val => val === pwd.current || "Passwords are not matched"
                })}
                className={classNames({'form_err': errors.c_password})}
                placeholder="Confirm Password" />
                {errors.c_password && (
                    <span className='form_err'>{errors.c_password.message}</span>
                )}


            <button type="submit">register</button>

            <div className="oauth">
                <div className="oauth_item" onClick={loginWithGoogle}>
                    <span><FaGoogle /></span>
                    <span>continue with google</span>
                </div>
            </div>

            <p>Already have an account? <Link to='/login'>Sign In Now</Link></p>
        </FormArea>
    )
}

export default RegisterFormArea;