import authAction from '../actions/authAction'


const initState = {
  loggedin : false,
  _id : '',
}

export default  (state =initState, action) => {
console.log(action)
  if (action.type === 'UPDATE_USER_STATUS') {
    console.log(state)
    return {
      ...state,
     loggedin : action.payload.logged,
     _id : action.payload._id
   }
  }
  console.log(state);
  return state
}