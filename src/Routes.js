import Home from './containers/Home';
import Translation from './containers/Translation';
import App from './App';
import NotFound from './containers/NotFound';

export default [{
  path: '/',
  component: App,
  key: 'app',
  loadData: App.loadData,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    }, {
      path: '/translation',
      component: Translation,
      exact: true,
      loadData: Translation.loadData,
      key: 'translation',
    }, {
      component: NotFound,
    }
  ]
}]




