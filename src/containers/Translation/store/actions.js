import { CHANGE_LSIT } from './contants';

const changeList = (list) => ({
  type: CHANGE_LSIT,
  list
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
      .then(res => {
        if (res.data.success) {
          const list = res.data.data;
          dispatch(changeList(list));
        } else {
          const list = [];
          dispatch(changeList(list));
        }
      })
  }
}