// function to shallow compare arrays works with strings and similars
// (Array, Array) -> Bool
function equalArray(arr1, arr2){
  if (arr1 === arr2) return true;

  if (arr1.length !== arr2.length) return false;

  for(let i = 0, len = arr1.length; i < len; ++i){
    if(arr1[i] !== arr2[i]) return false;
  }

  return true
}

module.exports = equalArray;