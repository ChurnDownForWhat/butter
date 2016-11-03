//This file will combine all reducers into one big object
import {combineReducers} from "redux" 
import sampleReducer from "./sampleReducer"

const allReducers = combineReducers({
	sample:sampleReducer
})


export default allReducers;
