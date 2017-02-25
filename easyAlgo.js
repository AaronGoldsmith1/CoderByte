// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

//using built-in functions
function FirstReverse(str) {
  var reversed = str.split('').reverse().join('')
  console.log(reversed)
}

FirstReverse("Hello")

//using recursion
function reverseString(str){
  if (str.length <= 1){ ////condition to end the recursion
    return str; //call stack 'unwinds' once the return statement in the conditional is hit
} else {
    return  reverseString(str.substr(1)) + str.charAt(0)
  }
}

console.log(reverseString("What's up?"))
// reverseString('hello') = reverseString('ello') + h
// reverseString('ello') = reverseString('llo') + e
// reverseString('llo') = reverseString('lo') + l
// reverseString('lo') = reverseString('o') + l
// reverseString('o') = 'o'


// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.


function firstFactorial(num) {
  var newArray = [];
  for (var i = 1; i <= num; i++){
    newArray.push(i);
  }
  return newArray.reduce(function(a,b){
    return a * b;
  }, 1);
};

console.log(firstFactorial(4))
