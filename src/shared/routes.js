import Properties from './pages/Properties';
import Property from './pages/Property';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Properties
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
