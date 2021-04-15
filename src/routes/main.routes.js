import HomePage from '../pages/Index';
import Notfound404 from '../pages/404';
import DashboardPages from '../pages/Dashboard';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProjectsPage from '../pages/Project';
import ServicesPage from '../pages/Service';
import ContactPage from '../pages/Contact';

// private routes
import { AuthRequireRoute } from './private/Auth.routes';



export const mainRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        private: {mode: false, require: null}
    },
    {
        path: '/login',
        exact: false,
        component: LoginPage,
        private: {mode: false, require: null}
    },
    {
        path: '/register',
        exact: false,
        component: RegisterPage,
        private: {mode: false, require: null}
    },
    {
        path: '/services',
        exact: false,
        component: ServicesPage,
        private: {mode: false, require: null}
    },
    {
        path: '/projects',
        exact: false,
        component: ProjectsPage,
        private: {mode: false, require: null}
    },
    {
        path: '/contact',
        exact: false,
        component: ContactPage,
        private: {mode: false, require: null}
    },
    {
        path: '/dashboard',
        exact: false,
        component: DashboardPages,
        private: {mode: true, require: AuthRequireRoute}
    },
    {
        path: '/*',
        exact: false,
        component: Notfound404,
        private: {mode: false, require: null}
    }
];