import * as actionTypes from './actionTypes';

export const send = (userName, dateTime, text) => {
  return {
    type: actionTypes.SEND_MESSAGE,
    userName,
    dateTime,
    text,
  };
};
