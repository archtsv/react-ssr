import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { getTranslationList } from './store/actions';
import styles from './styles.css';
import withStyle from '../../withStyle';

class Translation extends Component {

  getList() {
    const { list } = this.props;

    return list.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    return this.props.login ?
      (
        <Fragment>
          <Helmet>
            <title>这是ssr翻译页面 - 丰富多彩</title>
            <meta name="description" content="丰富多彩的翻译页面" />
          </Helmet>
          <div className={styles.test}>
            {this.getList()}
          </div>
        </Fragment>
      ) : <Redirect to='/' />;
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList();
    }
  }
  
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
});

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation, styles));

ExportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList());
}

export default ExportTranslation;