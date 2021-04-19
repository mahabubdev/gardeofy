import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { emailPasswordRegister, googleLogin } from '../../helpers/oauth';
import { FaGoogle } from 'react-icons/fa';
import { FormArea } from './styled';
import classNames from 'classnames';
import { useAuthHook } from '../../context/auth';
import { API_SERVER } from '../../config';
import swal from 'sweetalert';

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
        .then(async (res) => {
            if (res.error) {
                // errors
                setOtherErr(res.error.message)
            }
            else {
                console.log(res);
                // no error
                let postObj = {
                    name: res.user.displayName || data.name,
                    email: res.user.email,
                    photo: res.user.photoURL === null ? 'user.png' : res.user.photoURL,
                };
                console.log(postObj);

                await fetch( API_SERVER + '/api/auth/register', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(postObj),
                })
                .then(response => response.json())
                .then(result => {
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
            swal({
                title: err.message,
                text: JSON.stringify(err),
                icon: 'error'
            });
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
        .then(async (res) => {
            if (res.error) {
                // errors
                setOtherErr(res.error.message)
            }
            else {
                // no error
                console.log(res);
                let postObj = {
                    name: res.displayName,
                    email: res.email,
                    photo: res.photoURL === null ? 'user.png' : res.photoURL,
                };
                console.log(postObj);


                await fetch(API_SERVER + '/api/auth/register', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(postObj),
                })
                .then(response => response.json())
                .then(result => {
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
            swal({
                title: err.message,
                text: JSON.stringify(err),
                icon: 'error'
            });
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