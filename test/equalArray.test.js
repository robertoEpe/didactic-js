const equalArray = require('../array/equalArray');

test('Comparing two equal arrays expected to be true', () => {
  let arr1 = [1,2,3];
  let arr2 = [1,2,3];
  expect(equalArray(arr1, arr2)).toBe(true);
});
test('Comparing two arrays with different length expected to be false', () => {
  let arr1 = [1,2,3];
  let arr2 = [4,5];
  expect(equalArray(arr1, arr2)).toBe(false);
});
test('Comparing two different arrays with equal length expected to be false', () => {
  let arr1 = [1,2,3];
  let arr2 = [4,5,4];
  expect(equalArray(arr1, arr2)).toBe(false);
});
