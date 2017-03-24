import * as types from '../actions/ActionTypes';

const RootReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.SELECT_TRAIN:
      return Object.assign({}, state, {selectedTrain: action.train});

    case types.SELECT_DIRECTION:
      return Object.assign({}, state, {selectedDirection: action.direction});

    case types.SELECT_STATION:
      return Object.assign({}, state, {selectStation: action.station});

    default:
      return state;
  }
}

// const RootReducer = combineReducers({
//   mainReducer
// })

export default RootReducer;
