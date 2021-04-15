import { Route, Redirect } from 'react-router-dom';

export function AuthRequireRoute ({ location, ...rest }) {
    let status = false;

    return (
        <>
            {
                status ? (<Route {...rest} />) : (
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