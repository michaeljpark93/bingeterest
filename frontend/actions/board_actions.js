import * as BoardAPIUtil from '../util/board_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

export const receiveBoards = (boards) => ({
    type: RECEIVE_BOARDS,
    boards
});

export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board
});

export const removeBoard = id => ({
  type: REMOVE_BOARD,
  id
});

export const fetchBoards = userId => dispatch => (
  BoardAPIUtil.fetchBoards(userId).then(boards => (
    dispatch(receiveBoards(boards))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchBoard = id => dispatch => (
  BoardAPIUtil.fetchBoard(id).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateBoard = board => dispatch => (
  BoardAPIUtil.updateBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBoard = id => dispatch => (
  BoardAPIUtil.deleteBoard(id).then(board => (
    dispatch(removeBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
