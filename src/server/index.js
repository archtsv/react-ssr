import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import { getStore } from '../store';
import routes from '../Routes';
const app = express();
const port = 3000;


// express服务器请求一个静态文件，就会去public文件目录中去找
app.use(express.static('public'));
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url;
  }
}));

app.get('*', (req, res) => {
  const store = getStore(req);
  // 根据路由的路径往store里面添加数据
  const matchedRoutes = matchRoutes(routes, req.path);

  // 让matchRoutes里所有的组件对应的loadData方法执行一次
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      })
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = {
      css: []
    };
    const html = render(store, routes, req, context);

    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    } else if (context.NOT_FOUND) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
    
  });
})

app.listen(port)