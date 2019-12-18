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

export const remove = id => {
  return dispatch => {
    dispatch({
      event: actionTypes.REMOVE_USER,
      emit: true,
      payload: {
        id,
      },
    });
    dispatch({
      type: actionTypes.CONNECTED_USER,
      user: null,
    });
  };
};

export const setConnected = user => {
  return {
    type: actionTypes.CONNECTED_USER,
    user,
  };
};

export const update = onlineUsers => {
  return {
    type: actionTypes.UPDATE_USER_LIST,
    onlineUsers,
  };
};
