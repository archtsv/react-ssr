import * as constants from './constants';

const defaultState = {
  login: false,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
      return {
        ...state,
        login: action.login
      }
    default:
      return state;
  }
}