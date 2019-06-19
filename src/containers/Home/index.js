import React from 'react';
import Header from '../../components/Header';

// 同构： 一套 react 代码，再服务器端执行一次，在客户端再执行一次，解决事件没有绑定到DOM元素上的问题
const Home = () => {
  return (
    <div>
      <Header />
      <h2>this is a title</h2>
      <button onClick={() => alert('click')}>click</button>
    </div>
  )
}

export default Home;
