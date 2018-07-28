var populateApi = function(page, perPage) {
  var temp = [];
  var i;
  var number = ((page - 1) * perPage) + 555000000;
  for (i = 0; i < perPage; i++) {
    if (number <= 555000999) {
      let teltemp = {
        number: number,
        cost: (parseInt(number.toString().substr(-2)) + 100) / 100,
      };
      number++;
      temp.push(teltemp);
    }
  }
  let telephones = new Object;
  telephones.meta = {
    page: page,
    perPage: perPage,
    totalPages: Math.ceil(1000 / perPage)
  };
  telephones.data = temp;
  return telephones;
}
module.exports = populateApi;
