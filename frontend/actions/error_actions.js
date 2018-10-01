export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});
