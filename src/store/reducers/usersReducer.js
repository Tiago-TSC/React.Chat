import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helpers/objectHelper';

const initialState = {
  connectedUser: null,
  onlineUsers: [],
};

const setConnected = (state, action) => {
  const connectedUser = action.user;
  return updateObject(state, { connectedUser });
};

const update = (state, action) => {
  const onlineUsers = action.onlineUsers;
  return updateObject(state, { onlineUsers });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONNECTED_USER:
      return setConnected(state, action);
    case actionTypes.UPDATE_USER_LIST:
      return update(state, action);
    default:
      return state;
  }
};

export default reducer;
