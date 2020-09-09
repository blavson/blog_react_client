export default (st, _id) => {
  console.log("AuthAction");
  return ({
    type : 'UPDATE_USER_STATUS',
    payload : {
                logged : st,
                _id : _id
    }
  })
}