//keep track of all of our users.
import { SET_USER_INFO } from "../actions/user_actions.js";
const initialState = {
  email: "",
  token: "",
  adfa
}
const usersReducer = ( state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_USER_INFO:
      return {...state, email: action.userInfo.email, token: action.userInfo.token}
    default:
      return state;
  }
};

export default usersReducer;
