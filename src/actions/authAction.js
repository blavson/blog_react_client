export default (st, _id) => {
  return ({
    type : 'UPDATE_USER_STATUS',
    payload : {
                logged : st,
                _id : _id
    }
  })
}