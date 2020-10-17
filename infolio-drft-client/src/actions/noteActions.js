const loadNotes = () => {
  return {
    type: "LOADING_NOTES",
  };
};

const receiveNotes = (notesObj) => {
  return {
    type: "RECEIVED_NOTES",
    payload: notesObj,
  };
};

const handleError = (message) => {
  return {
    type: "ERROR_FOUND",
    errors: message,
  };
};


export const fetchUserNotes = () => {
  
  return async (dispatch) => {
    const token = localStorage.token;
    dispatch(loadNotes());
    const resp = await fetch("/api/v1/notes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const promise = await resp.json();

    if (promise.message) {
      dispatch(handleError(promise.message));
    } else {
      dispatch(receiveNotes(promise.notes));
    }
  };
};
// TODO [ fetchUserNotes don't work ]