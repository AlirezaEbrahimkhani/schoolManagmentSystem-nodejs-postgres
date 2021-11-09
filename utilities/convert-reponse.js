function convertJson(dataArray, flatKey) {
  let result = [];
  dataArray.forEach((element) => {
    result.push(element[flatKey]);
  });
  return result;
}

module.exports = convertJson;
