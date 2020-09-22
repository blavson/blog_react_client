import {combineReducers } from 'redux'
import authReducer from './authReducer'
import pagingReducer from './pagingReducer'

const  rootReducer =combineReducers({
  auth :  authReducer,
  pagination : pagingReducer
})
export default rootReducer