import moment from 'moment';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helpers/objectHelper';

const initialState = {
  onlineUsers: [],
};

const update = (state, action) => {
  const onlineUsers = action.onlineUsers;
  return updateObject(state, { onlineUsers });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_LIST:
      return update(state, action);
    default:
      return state;
  }
};

export default reducer;
