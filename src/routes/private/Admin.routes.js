import { Route, Redirect } from 'react-router-dom';

export function AdminRoleRoutes ({ location, ...rest }) {
    let user = {isAuthenticated: false, role: 'customer'};

    return (
        <>
            {
                user.isAuthenticated && (user.role === 'admin' || user.role === 'super-admin')
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