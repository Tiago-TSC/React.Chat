import * as actionTypes from './actionTypes';

export const send = (userName, dateTime, text) => {
  return dispatch =>
    dispatch({
      event: actionTypes.SEND_MESSAGE,
      emit: true,
      payload: {
        userName,
        dateTime,
        text,
      },
    });
};

export const receive = message => {
  return {
    type: actionTypes.RECEIVE_MESSAGE,
    message,
  };
};
