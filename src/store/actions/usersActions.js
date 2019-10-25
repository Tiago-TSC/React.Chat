import * as actionTypes from './actionTypes';

export const add = userName => {
  return {
    type: actionTypes.ADD_USER,
    userName,
  };
};

export const remove = userName => {
  return {
    type: actionTypes.REMOVE_USER,
    userName,
  };
};
