
const initState = {
  page : 1,
  offset : 0,
  count : 0
}

export default  (state =initState, action) => {
console.log(action)
  if (action.type === 'UPDATE_PAGINATION') {
    return {
     page : action.payload.page,
     offset : action.payload.offset,
     count : action.payload.count
   }
  }
  return state
}