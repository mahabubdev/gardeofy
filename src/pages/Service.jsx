import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/Default';
import ServiceIndex from './services';
import SingleServicePage from './services/SingleService';

const ServicesPage = ({ match }) => {
    return (
        <DefaultLayout>
            <Router>
                <Switch>
                    <Route key={match.path} exact path={`${match.url}`} component={ServiceIndex} />
                    <Route key={match.path} path={`${match.url}/:serviceId`} component={SingleServicePage} />
                </Switch>
            </Router>
        </DefaultLayout>
    )
}

export default ServicesPage;