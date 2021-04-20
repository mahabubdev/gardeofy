import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import DashboardIndex from './dashboard';
import OrderPage from './dashboard/orders';
import ReviewPage from './dashboard/review';
import DashboardLayout from '../layouts/Dashboard';
import ServicesPage from './dashboard/service';


const DashboardPages = ({ match }) => {

    // console.log(match);
    const history = useHistory();

    return (
        <Router>
            <DashboardLayout>
                <Switch>
                    <Route exact path={`${match.url}`} component={DashboardIndex} />
                    <Route path={`${match.url}/orders`} component={OrderPage} />
                    <Route path={`${match.url}/review`} component={ReviewPage} />
                    <Route path={`${match.url}/services`} component={ServicesPage} />
                    <Route path={`${match.url}/*`} render={(props) => (
                        <>
                            <h1>Sorry! Page not found.</h1>
                            <p>Your request url : <span style={{color: 'red'}}>{props.match.url}</span></p>
                        </>
                    )} />
                    <Route exact path='/' render={
                        () => history.replace('/')
                    } />
                </Switch>
            </DashboardLayout>
        </Router>
    )
}

export default DashboardPages;