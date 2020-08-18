import actions from './actionTypes';

let user = JSON.parse(localStorage.getItem('users'));
const initialState = user ? { loggedIn: true, user: user[0] } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case actions.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case actions.LOGIN_FAILURE:
      return {};
    case actions.LOGOUT:
      return {};
    default:
      return state;
  }
};