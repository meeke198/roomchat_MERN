//keep track of all of our users.
import { ABC } from "../actions/abc";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ABC:
      
    default:
      return state;
  }
};

export default usersReducer;
