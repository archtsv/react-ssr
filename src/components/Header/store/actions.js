import * as constants from './constants';

const changeLogin = (value) => ({
  type: constants.CHANGE_LOGIN,
  value
});

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json')
            .then(res => {
              dispatch(changeLogin(res.data.data.login))
            });
  }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    console.log(axiosInstance);
    return axiosInstance.get('/api/login.json')
            .then(res => {
              // console.log(res)
              dispatch(changeLogin(true))
            });
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json')
            .then(res => {
              dispatch(changeLogin(false))
            });
  }
}