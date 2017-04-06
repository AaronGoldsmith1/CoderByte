// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

function LetterCount(str) {
  var repeatCount = []
  //create array of words from string and remove special characters with RegEx
  var myString = str.split(' ').map(function(word){
   return word.replace(/[^a-zA-Z ]/g, "")
  })
  //store repeating character count in new array by calling helper function on each word
  myString.forEach(function(word){
    repeatCount.push(getNumRepeatedChars(word))
  })
  //get the largest repeat count of all words in string
  var max = Math.max(...repeatCount)
  //if there are no repeating characters, return -1
  if (max === 0) {return - 1}
  //target word at the same index of the max character count
  //.indexOf gives the first occuring max if there are more than one
  var indexMax = repeatCount.indexOf(max)
  return myString[indexMax]
}
//helper function to count number of repeating characters in word
function getNumRepeatedChars(word){
  var count = 0
  //counting occurence of each letter in word
  var allLetters = word.split('').reduce(function(allLetters, letter){
    if (letter in allLetters){
      allLetters[letter]++;
    } else {
      allLetters[letter] = 1;
    }
    return allLetters
  }, {})
  //if there are more than one occurences of letter, increase count
  for (var key in allLetters){
    if (allLetters[key] > 1) {
      count++
    }
  }
    return count
}
