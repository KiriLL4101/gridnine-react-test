import { combineReducers } from "redux";

import filters from "./filters"
import ticket from './ticket'

export default combineReducers({
    ticket,
    filters
});