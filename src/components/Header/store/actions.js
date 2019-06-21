import * as constants from './constants';

const changeLogin = (login) => ({
  type: constants.CHANGE_LOGIN,
  login
});

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE')
            .then(res => {
              dispatch(changeLogin(res.data.data.login))
            });
  }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json?secret=PP87ANTIPIRATE')
            .then(res => {
              dispatch(changeLogin(res.data.data.login))
            });
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json?secret=PP87ANTIPIRATE')
            .then(res => {
              dispatch(changeLogin(res.data.data.login))
            });
  }
}