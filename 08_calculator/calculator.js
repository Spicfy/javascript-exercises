const add = function(n1, n2) {
    return n1 + n2;
	
};

const subtract = function(n1, n2) {
    return n1 - n2;
};

const sum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
    let prod = 1;
    for(let i = 0; i < arr.length; i++){
      prod *= arr[i];
    }
    return prod;
};

const power = function(base, exp) {
    return Math.pow(base, exp);

};

const factorial = function(n) {
    if(n == 0 || n == 1){
      return 1;
    }
    else{
      return n * factorial(n-1);
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
