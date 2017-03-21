import * as types from './ActionTypes';

export const selectTrain = train => ({
  type: types.SELECT_TRAIN,
  train,
});
