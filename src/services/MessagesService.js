import moment from 'moment';

import * as actions from '../store/actions';

class MessagesService {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  send(userName, text) {
    const dateTime = moment().format('DD/MM/YYYY HH:mm');
    this.dispatch(actions.send(userName, dateTime, text));
  }
}

export default MessagesService;
