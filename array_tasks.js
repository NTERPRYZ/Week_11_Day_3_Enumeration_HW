const arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd)
    return arr;
	},

	square: function (arr) {
    return arr.map(function(number){
      return number * number
    });
	},

	sum: function (arr) {
    return arr.reduce(function(currentNumber, nextNumber){
      return currentNumber + nextNumber
    });
	},

  removeAndClone: function (arr, valueToRemove) {
  		return arr.filter(function(i){
        return i !== valueToRemove
      });
  	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

  // findDuplicates: function (arr) {
  //   let clonedNumbers = [];
  //   arr.forEach(function(number) {
  //       if((arr.indexOf(number) !== arr.lastIndexOf(number) && !clonedNumbers.includes(number))){
  //         clonedNumbers.push(number);
  //     }
  //       return clonedNumbers;
  //   });
}

module.exports = arrayTasks
