//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//Examples
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]


function minMax(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    let min = arr[0];
    let max = arr[0];
  
    arr.forEach(function (num) {
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    });
  
    return [min, max];
  }
  
  const numbers = [8, 2, 3, 5, 9, 9];
  const result = minMax(numbers);
  console.log(result);
  