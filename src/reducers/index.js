import {combineReducers} from 'redux'
import walletDetails from './walletDetails'
import miningHistoryReducer from './miningHistoryReducer'
export default combineReducers({
    walletDetails,
    miningHistoryReducer
})