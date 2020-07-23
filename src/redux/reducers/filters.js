const initialState = {
  sortBy: "all",
  without: false,
  transfer: false,
  pricePeriodFrom: 0,
  pricePeriodBefor: Infinity,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_TRANSFER_BY":
      return {
        ...state,
        transfer: action.payload,
      };
    case "SET_WITHOUT_BY":
      return {
        ...state,
        without: action.payload,
      };
    case "SET_PERIOD_FROM":
      return {
        ...state,
        pricePeriodFrom: !action.payload ? 0 : action.payload,
      };
    case "SET_PERIOD_BEFOR":
      return {
        ...state,
        pricePeriodBefor: !action.payload ? Infinity : action.payload,
      };
    default:
      return state;
  }
};
