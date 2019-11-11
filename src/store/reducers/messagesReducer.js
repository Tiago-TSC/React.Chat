import moment from 'moment';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helpers/objectHelper';

const initialState = {
  messages: [],
};

const receive = (state, action) => {
  const messages = [...state.messages];
  const { userName, dateTime, text } = action.message;
  const id = `${userName}${moment().valueOf()}`;

  messages.push({ id, userName, dateTime, text });

  return updateObject(state, { messages });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_MESSAGE:
      return receive(state, action);
    default:
      return state;
  }
};

export default reducer;
