import * as BingingAPIUtil from '../util/binging_api_util';
import { receiveBinge } from './binge_actions';
import { receiveBoard } from './board_actions';

export const RECEIVE_BINGING = "RECEIVE_BINGING";
export const REMOVE_BINGING = "REMOVE_BINGING";

export const createBinging = binging => dispatch => (
  BingingAPIUtil.createBinging(binging).then(binge => (
    dispatch(receiveBinge(binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBingingFromBoard = binging => dispatch => (
  BingingAPIUtil.deleteBinging(binging).then(entities => (
    dispatch(receiveBinge(entities.binge)),
    dispatch(receiveBoard(entities.board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
