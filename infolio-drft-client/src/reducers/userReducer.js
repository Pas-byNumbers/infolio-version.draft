export const userReducer = (
  state = {
    isAuthenticated: false,
    requestingAuth: false,
    currentUser: {},
    errors: []
  },
  action
) => {
  switch (action.type) {
    case "AUTHENTICATION_REQUEST":
      return {
        ...state,
        requestingAuth: true,
      };

    case "USER_AUTH_SUCCESS":
      return {
        ...state,
        requestingAuth: false,
        isAuthenticated: true,
        currentUser: action.payload.data,
      };

    case "USER_AUTH_FAILURE":
      return {
        ...state,
        requestingAuth: false,
        isAuthenticated: false,
        currentUser: {},
        errors: action.errors || []
      };

    case "LOGOUT_USER":
      return { ...state,
        isAuthenticated: false, 
        currentUser: {} 
      };

    default:
      return state;
  }
};
