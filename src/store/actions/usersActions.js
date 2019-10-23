import * as actionTypes from './actionTypes';

export const addUser = userName => {
  return {
    type: actionTypes.ADD_USER,
    userName,
  };
};

export const removeUser = userName => {
  return {
    type: actionTypes.REMOVE_USER,
    userName,
  };
};
