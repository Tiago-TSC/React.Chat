import * as actionTypes from './actionTypes';

export const add = userName => {
  return dispatch =>
    dispatch({
      event: actionTypes.ADD_USER,
      emit: true,
      payload: {
        userName,
      },
    });
};

export const remove = userName => {
  return dispatch =>
    dispatch({
      event: actionTypes.REMOVE_USER,
      emit: true,
      payload: {
        userName,
      },
    });
};

export const update = onlineUsers => {
  return {
    type: actionTypes.UPDATE_USER_LIST,
    onlineUsers,
  };
};
