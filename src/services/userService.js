import * as actions from '../store/actions';

class UserService {
  constructor(dispatch){
    this.dispatch = dispatch
  }

  add(value) {
    this.dispatch(actions.addUser(value))
  }

  remove(value) {
    this.dispatch(actions.removeUser(value))
  }
};

export default UserService;