import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mainRoutes } from './main.routes';

function AppRoutes () {
    return (
        <Router>
            <Switch>
                {
                    mainRoutes.map(rt => (
                        rt.private.mode === true ? (
                            <rt.private.require
                                key={rt.path}
                                exact={rt.exact}
                                path={rt.path}
                                component={rt.component}
                            />
                        ) : (
                            <Route
                                key={rt.path}
                                exact={rt.exact}
                                path={rt.path}
                                component={rt.component}
                            />
                        )
                    ))
                }
            </Switch>
        </Router>
    )
}

export default AppRoutes;