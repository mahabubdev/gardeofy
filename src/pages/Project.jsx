import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/Default';
import ProjectIndex from './projects';
import ProjectSinglePage from './projects/SingleProject';

const ProjectsPage = ({ match }) => {
    return (
        <DefaultLayout>
            <Router>
                <Switch>
                    <Route key={match.path} exact path={`${match.url}`} component={ProjectIndex} />
                    <Route key={match.path} path={`${match.url}/:projectSlug`} component={ProjectSinglePage} />
                </Switch>
            </Router>
        </DefaultLayout>
    )
}

export default ProjectsPage;