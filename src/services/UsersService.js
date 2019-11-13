import * as actions from '../store/actions';

class UsersService {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  add(userName) {
    this.dispatch(actions.add(userName));
  }

  remove(id) {
    this.dispatch(actions.remove(id));
  }
}

export default UsersService;
