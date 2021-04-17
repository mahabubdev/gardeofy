import { Route, Redirect } from 'react-router-dom';
import { useAuthHook } from '../../context/auth';

export function AuthRequireRoute ({ location, ...rest }) {
    let { user } = useAuthHook();

    return (
        <>
            {
                user.isAuthenticated ? (<Route {...rest} />) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location,
                                message: 'Please login first',
                                status: 401
                            }
                        }}
                    />
                )
            }
        </>
    );
}