import { CHANGE_HOME_LIST } from './contants';

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json')
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list));
      })
  }
}