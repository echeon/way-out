import { combineReducers } from 'redux';
import * as types from '../actions/ActionTypes';

const RootReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.SELECT_TRAIN:
      return Object.assign({}, state, {selectedTrain: action.train})

    default:
      return state;
  }
}

// const RootReducer = combineReducers({
//   mainReducer
// })

export default RootReducer
