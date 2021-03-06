import * as BingeAPIUtil from '../util/binge_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_BINGES = 'RECEIVE_BINGES';
export const RECEIVE_BINGE = 'RECEIVE_BINGE';
export const REMOVE_BINGE = 'REMOVE_BINGE';

export const receiveBinges = binges => ({
  type: RECEIVE_BINGES,
  binges,
});

export const receiveBinge = binge => ({
  type: RECEIVE_BINGE,
  binge,
});

export const removeBinge = binge => ({
  type: REMOVE_BINGE,
  binge,
});

export const fetchBinges = () => dispatch => (
  BingeAPIUtil.fetchBinges().then(binges => (
    dispatch(receiveBinges(binges))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchUserBinges = userId => dispatch => (
  BingeAPIUtil.fetchBinges(userId).then(binges => (
    dispatch(receiveBinges(binges))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchBinge = id => dispatch => (
  BingeAPIUtil.fetchBinge(id).then(binge => (
    dispatch(receiveBinge(binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createBinge = bingeData => dispatch => (
  BingeAPIUtil.createBinge(bingeData).then(binge => (
    dispatch(receiveBinge(binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateBinge = bingeData => dispatch => (
  BingeAPIUtil.updateBinge(bingeData).then(binge => (
    dispatch(receiveBinge(binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBinge = bingeData => dispatch => (
  BingeAPIUtil.deleteBinge(bingeData).then(binge => (
    dispatch(removeBinge(binge))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
