import * as BingingAPIUtil from '../util/binging_api_util';
import { receiveBinge } from './binge_actions';
import { receiveBoard } from './board_actions';

export const RECEIVE_BINGINGS = "RECEIVE_BINGINGS";
export const REMOVE_BINGING = "REMOVE_BINGING";

export const receiveBingings = bingings => ({
  type: RECEIVE_BINGINGS,
  bingings
});

export const fetchBingings = () => dispatch => (
  BingingAPIUtil.fetchBingings().then(bingings => (
    dispatch(receiveBingings(bingings))
  ))
)

export const createBinging = binging => dispatch => (
  BingingAPIUtil.createBinging(binging).then(binge => (
    dispatch(receiveBinge(binge))
  ))
);

export const deleteBingingFromBoard = binging => dispatch => (
  BingingAPIUtil.deleteBinging(binging).then(entities => (
    dispatch(receiveBinge(entities.binge)),
    dispatch(receiveBoard(entities.board))
  ))
);
