// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

//using built-in functions
function FirstReverse(str) {
  var reversed = str.split('').reverse().join('')
  console.log(reversed)
}

FirstReverse("Hello")

//decrementing for loop
function giveReverse(str){
  newString = ""
  for (var i = str.length-1; i >= 0; i--){
    newString += str[i]
  }
  console.log(newString)
  return newString
}

giveReverse("Slow Down!")


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


// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

//doesn't ignore punctuation
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  console.log(longestWord[0])
  return longestWord[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {
  return str.split('').map(function(x){
     return x.charCodeAt(x)
   }).sort(function(a,b){
     return a - b
   }).map(function(x){
     return String.fromCharCode(x)
   }).join('')}

AlphabetSoup(readline());
