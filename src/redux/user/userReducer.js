import { SET_CURRENT_USER } from '../types';

const initialState = { currentUser: null };

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
}

export default userReducer;
