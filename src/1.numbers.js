//add: Should be able to add numbers
function add(num1, num2) {
  return num1 + num2;
}

//subtract: Should be able to subtract numbers
function subtract(num1, num2) {
  return num1 - num2;
}

//multiply: Should be able to multiply with precision
function multiply(num1, num2) {
  return num1 * num2;
}

//parseInt: should use parseInt correctly to convert strings to integer numbers
function customParseInt(str) {
  return parseInt(str, 10); 
}

//addAndReturn2DecimalPlaces: should return a number value, rounded to 2 decimal places
// Example: 1.23453 + 5.37873 should return 6.61 and the return type should be a number
function addAndReturn2DecimalPlaces(num1, num2) {
  const sum = num1 + num2;
  const roundedSum = Number(sum.toFixed(2));
  return roundedSum;
}

module.exports = {
  add,
  subtract,
  multiply,
  customParseInt,
  parseInt: customParseInt,
  addAndReturn2DecimalPlaces,
};
