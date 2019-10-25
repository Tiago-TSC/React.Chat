import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../services/objectsService';

const initialState = {
  messages: [],
};

const send = (state, action) => {
  const messages = [...state.messages];
  const { userName, dateTime, text } = action;
  messages.push({ userName, dateTime, text });

  return updateObject(state, { messages });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return send(state, action);
    default:
      return state;
  }
};

export default reducer;
