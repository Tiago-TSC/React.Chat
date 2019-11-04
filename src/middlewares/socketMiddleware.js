import io from 'socket.io-client';

import * as actions from '../store/actions';
import * as actionTypes from '../store/actions/actionTypes';

export const socket = io('http://127.0.0.1:7777');

const socketMiddleware = () => {
  return ({ dispatch }) => next => action => {
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
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => dispatch({ type: handle, result, ...rest });
    }

    socket.on(actionTypes.UPDATE_USER_LIST, onlineUsers => {
      dispatch(actions.update(onlineUsers));
    });

    return socket.on(event, handleEvent);
  };
};

export default socketMiddleware;
