import { socket } from '../../src';
import * as actions from '../store/actions';
import * as actionTypes from '../store/actions/actionTypes';

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
