export const userReducer = (
  state = {
    isAuthenticated: false,
    isAuthenticating: false,
    currentUser: {},
  },
  action
) => {
  switch (action.type) {
    case "AUTHENTICATING_USER":
      return { ...state, currentUser: action.payload };
    case "AUTHENTICATED USER":
      return { ...state}
    case "LOGOUT_USER":
      return { ...state, currentUser: {} };

    default:
      return state;
  }
};
