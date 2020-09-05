const initState = {
  loggedin : true,
  token : '',
}

export default  (state =initState, action) => {
  if (action == 'USER_LOGGED_IN') {
    return {
       ...state,
     loggedin : true
   }
  }
  if (action == 'USER_LOGGED_OUT') {
    return {
      ...state,
      loggedin : false
    }
  }
  return state
}