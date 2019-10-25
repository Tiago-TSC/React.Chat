import * as actions from '../store/actions';

class MessagesService {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  send(userName, text) {
    const dateTime = new Date().toString();
    this.dispatch(actions.send(userName, dateTime, text));
  }
}

export default MessagesService;
