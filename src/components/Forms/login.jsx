import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { emailPasswordLogin, googleLogin } from '../../helpers/oauth';
import { FaGoogle } from 'react-icons/fa';
import { FormArea } from './styled';
import { useForm } from 'react-hook-form';
import { useAuthHook } from '../../context/auth';
import classNames from 'classnames';
import swal from 'sweetalert';
import { API_SERVER } from '../../config';

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
        .then(async (res) => {
            // console.log("loginReq", res);
            if (res.error) {
                // console.log("error_computing", res.error);
                // errors
                if (res.error.code === 'auth/user-not-found') {
                    setOtherErr('Sorry! User not found');
                }
                else if (res.error.code === 'auth/wrong-password') {
                    setOtherErr('Wrong Password!')
                } else {
                    setOtherErr(res.error.message)
                }
                // setOtherErr(res.error.message)
            }
            else {
                console.log(res);
                // no error
                let postObj = {
                    email: res.email
                };
                console.log(postObj);

                await fetch( API_SERVER + '/api/auth/login', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(postObj),
                })
                .then(response => response.json())
                .then(result => {
                    if (result.errCode) {
                        // error from api_server
                        swal({
                            title: result.message,
                            text: JSON.stringify(result),
                            icon: 'error'
                        });
                        setOtherErr(result.message);
                    }
                    else {
                        // ok
                        swal({
                            title: result.message,
                            text: JSON.stringify(result),
                            icon: 'success'
                        });
                        loginUser({
                            name: result.data.name,
                            email: result.data.email,
                            photo: result.data.photo,
                            role: result.data.role
                        });
                        localStorage.setItem('token', result.access_token);
                        history.replace(from);
                    }
                })
                .catch(err => {
                    swal({
                        title: err.message,
                        text: JSON.stringify(err),
                        icon: 'error'
                    });
                    console.log(err);
                    setOtherErr(err.message);
                })
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
        .then(async (res) => {
            if (res.error) {
                // errors
                setOtherErr(res.error.message)
            }
            else {
                // no error
                console.log(res);
                let postObj = {
                    email: res.email,
                };
                console.log(postObj);


                await fetch(API_SERVER + '/api/auth/login', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(postObj),
                })
                .then(response => response.json())
                .then(async (result) => {
                    console.log(result);
                    if (result.errCode) {
                        // error from api_server
                        swal({
                            title: result.message,
                            text: JSON.stringify(result),
                            icon: 'error'
                        });
                        setOtherErr(result.message);
                    }
                    else {
                        console.log('after_login', result);
                        swal({
                            title: result.message,
                            text: JSON.stringify(result),
                            icon: 'success'
                        });
                        await loginUser({
                            name: result.data.name,
                            email: result.data.email,
                            photo: result.data.photo,
                            role: result.data.role
                        });
                        localStorage.setItem('token', result.access_token);
                        history.replace(from);
                    }
                })
                .catch(err => {
                    swal({
                        title: err.message,
                        text: JSON.stringify(err),
                        icon: 'error'
                    });
                    console.log(err);
                    setOtherErr(err.message);
                })
            }
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
            <p>
                {otherErr.length >= 1 && (
                    <span className='form_err'>{ otherErr }</span>
                )}
            </p>

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