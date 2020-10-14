export const noteReducer = (
  state = {
    userNotes: [],
    loading: false,
    errors: []
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
    
    case "ERROR_FOUND" :
      return {
        ...state,
        errors: action.errors
      }

    default: 
      return state;
  }
}