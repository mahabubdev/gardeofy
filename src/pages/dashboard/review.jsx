import { useState, useCallback, memo } from 'react';
import { DashboardPageWrapper, ReviewView, ReviewForm, TopBar } from "./styled";
import { useAuthHook } from '../../context/auth';
import { API_SERVER } from '../../config';
import swal from 'sweetalert';
import defaultUserImg from '../../images/user.png';
import { useForm } from 'react-hook-form';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';





const ReviewPage = () => {
    // get user from useAuthHook
    const { user } = useAuthHook();

    // hook-form
    let { handleSubmit, register, formState: { errors }, reset } = useForm({ mode: 'all' });

    // state
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    // fetch data
    const fetchData = useCallback(async () => {
        if (! loaded) {
            const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
            await fetch(`${API_SERVER}/api/auth/user`, {headers})
            .then(res => res.json())
            .then(response => {
                // check errors
                if (response.errCode) {
                    // have error
                    swal({
                        title: response.message,
                        icon: 'error'
                    })
                    console.error(response);
                } else {
                    setData(response.review[0]);
                    setLoaded(true);
                }
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: 'Something went wrong!',
                    text: err.message,
                    icon: 'error'
                });
            })

            console.log("fetched_feedback==>", data);
        }
    }, [loaded]);

    fetchData(); // initial called


    // form handles
    const handleFormSubmit = async (inp) => {
        // console.log(inp);
        // alert(JSON.stringify(inp));
        const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken}`
        }
        
        // create or update
        if (typeof(data) === 'object' && data.description) {
            // already have, so update
            await fetch(API_SERVER + '/api/review/update', {
                headers: headers,
                method: 'PUT',
                body: JSON.stringify({
                    description: inp.feedback,
                    uid: data.uid,
                })
            })
            .then(res => res.json())
            .then((res) => {
                if (res.errCode) {
                    // errors
                    swal({
                        title: res.message,
                        text: res.errCode,
                        icon: 'error'
                    })
                } else {
                    setLoaded(false); // useCallback will fired & get new
                    swal({
                        title: 'Your feedback has been updated',
                        icon: 'success'
                    })
                }
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: 'Something went wrong!',
                    text: err.message,
                })
            })
        } else {
            // deleted or never created, so create@post
            await fetch(API_SERVER + '/api/review/add', {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({
                    description: inp.feedback,
                })
            })
            .then(res => res.json())
            .then((res) => {
                if (res.errCode) {
                    // errors
                    swal({
                        title: res.message,
                        text: res.errCode,
                        icon: 'error'
                    })
                } else {
                    setLoaded(false); // useCallback will fired & get new
                    swal({
                        title: 'Your feedback has been created',
                        icon: 'success'
                    })
                }
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: 'Something went wrong!',
                    text: err.message,
                })
            })
        }
    }

    // delete your feedback
    const deleteFeedBack = (id) => {
        swal({
            title: 'Are you sure?',
            text: 'Really want to remove your feedback?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                // delete now
                const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${getToken}`
                }
                await fetch(API_SERVER + `/api/review/delete?uid=${id}`, {
                    method: 'DELETE',
                    headers: headers
                })
                .then(res => res.json())
                .then(res => {
                    if (res.errCode) {
                        // error
                        swal({
                            title: 'Something went wrong',
                            text: res.errCode,
                            icon: 'error',
                        })
                        console.log(res)
                    }
                    else {
                        // ok
                        setLoaded(false); // re-run GET fetch @useCallback
                        reset();
                        swal({
                            title: res.message,
                            icon: 'success',
                        })
                        
                    }
                })
            }
            else {
                swal('Aborted!');
            }
        })
    }


    return (
        <DashboardPageWrapper>
            <TopBar>
                <h1>Your Feedback</h1>
                {
                    loaded && data !== undefined ? (
                        <Button 
                            onClick={() => deleteFeedBack(data.uid)}
                            variant="contained" 
                            color="secondary">
                            <DeleteIcon /> Remove
                        </Button>
                    ) : (null)
                }
            </TopBar>

            <ReviewView>
                <div className="user_bio">
                    {
                        user.photo === 'user.png' ? (
                            <img src={defaultUserImg} alt="user_photo" />
                        ) : (
                            <img src={user.photo} alt="user_photo" />
                        )
                    }
                    <h5>{user.name}</h5>
                </div>
                <div className="review_text">
                    {data ? (
                        <p>{data.description}</p>
                    ) : (<p>You didn't give us your feedback? yet?</p>)}
                </div>
            </ReviewView>



            <ReviewForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
                <textarea name="feedback" 
                    defaultValue={data ? data.description : ''}
                    placeholder="Write or update your feedback"
                    {...register('feedback', {
                        required: {value: true, message: 'Please write your feedback'},
                        minLength: {value: 20, message: 'Feedback should be 20 characters long'},
                        maxLength: {value: 255, message: 'Feedback shouldb\'t be 255 characters long'}
                    })}
                ></textarea>
                <p style={{color: 'red'}}>
                    {errors.feedback && errors.feedback?.message}
                </p>
                <button type="submit">submit</button>
            </ReviewForm>
        </DashboardPageWrapper>
    )
}

export default ReviewPage;