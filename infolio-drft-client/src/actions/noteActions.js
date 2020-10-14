const loadNotes = () => {
  return {
    type: "LOADING_NOTES"
  }
}

const receiveNotes = notesObj => {
  return {
    type: "RECEIVED_NOTES",
    payload: notesObj
  }
}

export const fetchUserNotes = () => {
  return async dispatch => {
    dispatch(loadNotes());
    const resp = await fetch('/api/v1/notes', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }})
   promise = await resp.json()
   dispatch(receiveNotes(promise.notes))
}

// TODO fix fetchUserNotes 