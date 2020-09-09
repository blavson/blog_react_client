
const initState = {
  loggedin : false,
  _id : '',
}

export default  (state =initState, action) => {
console.log(action)
  if (action.type === 'UPDATE_USER_STATUS') {
    return {
     loggedin : action.payload.logged,
     _id : action.payload._id
   }
  }
  return state
}