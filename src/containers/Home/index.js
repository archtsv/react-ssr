import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/actions';

// 同构： 一套 react 代码，再服务器端执行一次，在客户端再执行一次，解决事件没有绑定到DOM元素上的问题

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.getList() }
        <button onClick={() => alert('click')}>click</button>
      </div>
    )
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }
  getList() {
    const {list} = this.props;
    return list.map(item => {
      return <div key={item.title}>{item.title}</div>
    })
  }
}

Home.loadData = (store) => {
  // 这个函数负责服务端渲染之前，把路由需要的数据提前加载好
  return store.dispatch(getHomeList());
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
