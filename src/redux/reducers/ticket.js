const initialState = {
    isReady: false,
    tickets: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_TICKET":
        return {
          ...state,
          tickets: action.payload,
          isReady: true,
        };
      default:
        return state;
    }
  };