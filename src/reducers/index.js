import {combineReducers} from 'redux'
import miningHistoryReducer from './miningHistoryReducer'
import walletDetails from './walletDetails'
import workersReducer from './workersReducer'

export default combineReducers({
    walletDetails,
    miningHistoryReducer,
    workersReducer
})