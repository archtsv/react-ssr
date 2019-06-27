import * as constants from './constants';

const defaultState = {
  login: true,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    default:
      return state;
  }
}