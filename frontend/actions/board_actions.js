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

export const removeBoard = board => ({
  type: REMOVE_BOARD,
  board
});

export const requestBoards = userId => dispatch => (
  BoardAPIUtil.fetchBoards(userId).then(boards => (
    dispatch(receiveBoards(boards))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const requestBoard = id => dispatch => (
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

export const deleteBoard = board => dispatch => (
  BoardAPIUtil.deleteBoard(board).then(board => (
    dispatch(removeBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
