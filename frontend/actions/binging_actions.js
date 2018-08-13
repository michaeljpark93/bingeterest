import * as BingingAPIUtil from '../util/binging_api_util';
import { receiveBinge } from './binge_actions';
import { receiveBoard } from './board_actions';

export const createBinging = binging => dispatch => (
  BingingAPIUtil.createBinging(binging).then(binge => (
    dispatch(receiveBinge(binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBingingBoard = binging => dispatch => (
  BingingAPIUtil.deleteBinging(binging).then(entities => (
    dispatch(receiveBinge(entities.binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBingingSameBoard = binging => dispatch => (
  BingingAPIUtil.deleteBinging(binging).then(entities => (
    dispatch(receiveBinge(entities.binge)),
    dispatch(receiveBoard(entities.board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBingingOtherBoard = binging => dispatch => (
  BingingAPIUtil.deleteBinging(binging).then(entities => (
    dispatch(receiveBinge(entities.binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
