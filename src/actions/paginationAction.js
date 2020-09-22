export default (page, offset, count) => {
  console.log("pagination");
  return ({
    type : 'UPDATE_PAGINATION',
    payload : {
                page,
                offset,
                count
    }
  })
}