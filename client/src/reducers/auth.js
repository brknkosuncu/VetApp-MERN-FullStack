import { AUTH, FORGOT, LOGOUT, SINGLE_USER } from "../constants/actionTypes";

const authReducer = (state = { authData: null, users: [] }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case FORGOT:
      return { ...state, authData: action?.data };

    case SINGLE_USER:
      return { ...state.users, user: action.data };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
