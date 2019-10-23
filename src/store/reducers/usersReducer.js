import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../services/objectsService';

const initialState = {
  onlineUsers: [],
};

const addUser = (state, action) => {
  const onlineUsers = [...state.onlineUsers];
  onlineUsers.push(action.userName);

  return updateObject(state, { onlineUsers });
};

const removeUser = (state, action) => {
  const onlineUsers = state.onlineUsers.filter(
    user => user.toLowerCase() !== action.userName.toLowerCase(),
  );

  return updateObject(state, { onlineUsers });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return addUser(state, action);
    case actionTypes.REMOVE_USER:
      return removeUser(state, action);
    default:
      return state;
  }
};

export default reducer;
