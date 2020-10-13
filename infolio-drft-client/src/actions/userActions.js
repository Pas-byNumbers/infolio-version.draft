const authRequest = () => {
  return {
    type: "AUTHENTICATION_REQUEST",
  };
};

const authSuccess = (userObj) => {
  return {
    type: "USER_AUTH_SUCCESS",
    payload: userObj,
  };
};

const authFailure = (message) => {
  return {
    type: "USER_AUTH_FAILURE",
    errors: message
  };
};

export const authenticateUser = (userInfo) => {
  return async (dispatch) => {
    dispatch(authRequest());
    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    });
    const credentials = await resp.json();
    if (credentials.message) {
      dispatch(authFailure(credentials.message));
      localStorage.clear();
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(getUserProfile())
    }
  };
};

export const getUserProfile = () => {
  return async (dispatch) => {
    const token = localStorage.token;
    if (token) {
      const resp = await fetch("/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const credentials = await resp.json();
      if (credentials.message) {
        dispatch(authFailure(credentials.message));
        localStorage.clear();
      } else {
        // let userJSON = JSON.parse(credentials.user);
        dispatch(authSuccess(credentials.user))
      }
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.clear();
    return dispatch({ type: "LOGOUT_USER" });
  };
};

export const userCreate = (userInfo) => {
  return async (dispatch) => {
    const resp = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    });
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(getUserProfile());
    }
  };
};

