import { Route, Redirect } from 'react-router-dom';
import { useAuthHook } from '../../context/auth';

export function AdminRoleRoutes ({ location, ...rest }) {
    let { user } = useAuthHook();

    return (
        <>
            {
                user.isAuthenticated && (user.role === 'admin' || user.role === 'super_admin')
                    ? (<Route {...rest} />) : (
                    <Redirect
                        to={{
                            pathname: '/dashboard',
                            state: {
                                from: location,
                                message: 'Forbidden action',
                                status: 403
                            }
                        }}
                    />
                )
            }
        </>
    );
}