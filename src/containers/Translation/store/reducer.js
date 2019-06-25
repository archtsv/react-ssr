import { CHANGE_LSIT } from './contants';

const defaultState = {
  translationList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LSIT:
      return {
        ...state,
        translationList: action.list
      };
    default:
      return state;
  }
}