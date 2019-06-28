import React from 'react';
import { renderRoutes } from 'react-router-config';
import { actions } from './components/Header/store';
import Header from './components/Header/';

// renderRoutes 多级路由渲染
const App = (props) => {
  return (
    <div>
      <Header staticContext={props.staticContext}/>
      { renderRoutes(props.route.routes) }
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo());
}

export default App;