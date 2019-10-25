import * as actions from '../store/actions';

class UsersService {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  add(userName) {
    this.dispatch(actions.add(userName));
  }

  remove(userName) {
    this.dispatch(actions.remove(userName));
  }
}

export default UsersService;
