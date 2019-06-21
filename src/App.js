import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header/';

// renderRoutes 多级路由渲染
const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
}

export default App;