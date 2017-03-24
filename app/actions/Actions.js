import * as types from './ActionTypes';

export const selectTrain = train => ({
  type: types.SELECT_TRAIN,
  train,
});

export const selectDirection = direction => ({
  type: types.SELECT_DIRECTION,
  direction,
});

export const selectStation = station => ({
  type: types.SELECT_STATION,
  station,
});
