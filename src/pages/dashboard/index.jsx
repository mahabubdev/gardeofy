import { DashboardPageWrapper, RoleIndicator, UserInfo } from './styled';
import { useState, useCallback, memo } from 'react';
import { API_SERVER } from '../../config';
import swal from 'sweetalert';
import Chip from '@material-ui/core/Chip';
import { useAuthHook } from '../../context/auth';
import defaultUserImg from '../../images/user.png';

const DashboardIndex = memo(() => {
    // get user from useAuthHook
    const { user } = useAuthHook();

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
                    setData(response);
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
        }
    }, [loaded]);

    fetchData(); // initial called



    return (
        <DashboardPageWrapper>
            <h1>Dashboard</h1>
            {
                data ? (
                    <>
                        <UserInfo>
                            {
                                data && user.photo === 'user.png' ? (
                                    <img src={defaultUserImg} alt='user_img' />
                                ) : (
                                    <img src={data.photo} alt='user_img' />
                                )
                            }
                            <p>Name: {data.name}</p>
                            <RoleIndicator>
                                <span>Role: </span>
                                {
                                    user.role === 'admin' || user.role === 'super_admin' ?
                                    (
                                        user.role === 'super_admin' ? (<Chip label={user.role} color="primary" size="small" />)
                                            : (<Chip label={user.role} color="secondary" size="small" />)
                                    ) : (
                                        <Chip label={user.role} size="small" />
                                    )
                                }
                            </RoleIndicator>
                            {
                                user.role === 'customer' && <p>Total Orders: {data.orders?.length}</p>
                            }
                        </UserInfo>
                    </>
                ) : (
                    <p>Empty</p>
                )
            }
        </DashboardPageWrapper>
    )
});

export default DashboardIndex;