import React from 'react';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export const render = (store, routes, req) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </StaticRouter>
      </Provider>
    );
    // window.context是数据的注水
    return (`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>
  `);
}