import express from 'express';
import { render } from '../utils';
const app = express();
const port = 3000;


// express服务器请求一个静态文件，就会去public文件目录中去找
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(render(req));
})

app.listen(port)