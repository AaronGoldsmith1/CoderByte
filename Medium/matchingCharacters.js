// Using the JavaScript language, have the function MatchingCharacters(str) take the str parameter being passed and determine the largest number of unique characters that exists between a pair of matching letters anywhere in the string. For example: if str is "ahyjakh" then there are only two pairs of matching letters, the two a's and the two h's. Between the pair of a's there are 3 unique characters: h, y, and j. Between the h's there are 3 unique characters: y, j, a, and k. So for this example your program should return 4.

//find all substrings between matching characters
//find number of unique characters in all substrings
//return largest number


function MatchingCharacters(str){
  //if there is only one character, return 0
  if (str.length < 2) {
    return 0
  }
  //split string into words
  var myString = str.split('')
  var pairs = []
  var stringsToCheck =[]
  //count occurences of all letters in word
  var letterCount = myString.reduce(function(allChar, char){
    if (char in allChar){
      allChar[char]++
    } else {
      allChar[char] = 1
    }
      return allChar
    }, {})
  //keep track of all characters appearing more than once representing pairs
  for (var letter in letterCount){
    if (letterCount[letter] > 1) {
      pairs.push(letter)
    }
  }
  //find longest substrings within paired characters
  pairs.forEach(function(letter){
    stringsToCheck.push(str.substring(str.indexOf(letter)+1,str.lastIndexOf(letter)).split(''))
  })
  //get rid of duplicate characters to only count unique characters
  var mySubstrings = stringsToCheck.map(function(str){
    return [...new Set(str)]
  })
  //sort in descending order to find longest substring
  mySubstrings.sort(function(a,b){
    return b.length - a.length
  })
  return mySubstrings[0].length
}
