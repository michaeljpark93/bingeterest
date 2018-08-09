import * as BingeAPIUtil from '../util/binge_api_util';

export const RECEIVE_BINGES = 'RECEIVE_BINGES';
export const RECEIVE_BINGE = 'RECEIVE_BINGE';
export const REMOVE_BINGE = 'REMOVE_BINGE';

export const fetchBinges = () => dispatch => (
  BingeAPIUtil.fetchBinges().then(binges => (
    dispatch({type: RECEIVE_BINGES, binges: binges})
  ))
);

export const fetchBinge = id => dispatch => (
  BingeAPIUtil.fetchBinge(id).then(binge => (
    dispatch({type: RECEIVE_BINGE, binge: binge})
  ))
);

export const createBinge = binge => dispatch => (
  BingeAPIUtil.createBinge(binge).then(binge => (
    dispatch({type: RECEIVE_BINGE, binge: binge})
  ))
);

export const updateBinge = binge => dispatch => (
  BingeAPIUtil.updateBinge(binge).then(binge => (
    dispatch({type: RECEIVE_BINGE, binge: binge})
  ))
);

export const deleteBinge = id => dispatch => (
  BingeAPIUtil.deleteBinge(id).then(id => (
    dispatch({type: REMOVE_BINGE, bingeId: id})
  ))
);
