import React, { Component } from 'react';

// 此函数，返回一个高阶组件
export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      // 判断是否服务器端渲染
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss());
      }
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}