module.exports.getDuplicates = function(arr) {
  if(Array.isArray(arr)){
    if(arr.some(isNaN)){
      throw new Error("Invalid Array");
    } else {
  var filterArr = [];
  arr.sort().forEach(function(element, index){
    if (index !== arr.lastIndexOf(element) && filterArr.indexOf(element) == -1){
      filterArr.push(element);
    }
  });
  return filterArr;
  }
} else {
  throw new Error("Type Error");
}
};
