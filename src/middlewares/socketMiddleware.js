import io from 'socket.io-client';

import * as actions from '../store/actions';
import * as actionTypes from '../store/actions/actionTypes';

export const socket = io('http://127.0.0.1:7777');

const socketMiddleware = store => {
  socket.on(actionTypes.UPDATE_USER_LIST, onlineUsers => {
    store.dispatch(actions.update(onlineUsers));
  });

  socket.on(actionTypes.RECEIVE_MESSAGE, message => {
    store.dispatch(actions.receive(message));
  });

  return next => action => {
    if (typeof action === 'function') {
      return next(action);
    }

    const { event, leave, handle, emit, payload, ...rest } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
    }

    if (emit) {
      socket.emit(event, payload);
      return;
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => store.dispatch({ type: handle, result, ...rest });
    }

    return socket.on(event, handleEvent);
  };
};

export default socketMiddleware;
