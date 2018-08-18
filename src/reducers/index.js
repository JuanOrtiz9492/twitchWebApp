import {combineReducers} from 'redux'
import miningHistoryReducer from './miningHistoryReducer'
import walletDetails from './walletDetails'
import workersReducer from './workersReducer'
import paginationReducer from './paginationReducer'

export default combineReducers({
    walletDetails,
    miningHistoryReducer,
    workersReducer,
    paginationReducer,
})