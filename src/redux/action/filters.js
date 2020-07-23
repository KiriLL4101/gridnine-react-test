export const setSortBy = (sort) => ({
  type: "SET_SORT_BY",
  payload: sort,
});
export const setWithoutBy = (filter) => ({
  type: "SET_WITHOUT_BY",
  payload: filter,
});
export const setTransferBy = (filter) => ({
  type: "SET_TRANSFER_BY",
  payload: filter,
});
export const setPeriodFrom = (period) => ({
  type: "SET_PERIOD_FROM",
  payload: period,
});
export const setPeriodBefor = (period) => ({
  type: "SET_PERIOD_BEFOR",
  payload: period,
});
