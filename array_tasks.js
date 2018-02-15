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
      return number ** 2;
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

	findIndexesOf: function (arr, itemToFind) {
    let indexArray = [];
    arr.forEach(function(number, index){
      if(number === itemToFind){
        indexArray.push(index);
      }
    })
    return indexArray;

	},

  sumOfAllEvenNumbersSquared: function (arr) {
    const evenNumbers = []
    arr.forEach(function(evens){
      if (evens % 2 === 0){
        evenNumbers.push(evens)
      }
    })
    let sumOfEvens = this.square(evenNumbers);
    return this.sum(sumOfEvens);
  },


	// ----------- EXTENSION ------------

  findDuplicates: function (arr) {
    let clonedNumbers = [];
    arr.forEach(function(number, index) {
        if(arr.indexOf(number, index + 1) > -1) {
          if(clonedNumbers.indexOf(number) === -1) {
              clonedNumbers.push(number)
          }
        }
    });
    return clonedNumbers;
  }

}

module.exports = arrayTasks
