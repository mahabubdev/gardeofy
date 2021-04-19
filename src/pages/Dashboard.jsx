import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardIndex from './dashboard';
import OrderPage from './dashboard/orders';
import ReviewPage from './dashboard/review';
import DashboardLayout from '../layouts/Dashboard';


const DashboardPages = ({ match }) => {

    console.log(match);

    return (
        <Router>
            <DashboardLayout>
                <Switch>
                    <Route exact path={`${match.url}`} component={DashboardIndex} />
                    <Route path={`${match.url}/orders`} component={OrderPage} />
                    <Route path={`${match.url}/review`} component={ReviewPage} />
                    <Route path={`${match.url}/*`} component={DashboardIndex} />
                </Switch>
            </DashboardLayout>
        </Router>
    )
}

export default DashboardPages;