export const noteReducer = (
  state = {
    userNotes: [],
    loading: false
  }, action
) => {
  switch(action.type) {
    case "LOADING_NOTES" :
      return {
        ...state,
        loading: true
      }
      
    case "RECEIVED_NOTES" :
      return {
        ...state,
        userNotes: action.payload.data,
        loading: false
      }

    default: 
      return state;
  }
}