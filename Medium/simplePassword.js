// Using the JavaScript language, have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark.
// 4. It cannot have the word "password" in the string.
// 5. It must be longer than 7 characters and shorter than 31 characters.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".

function SimplePassword(str){
  var myPassword = str.split('')
  var punctuation = /[.,:!?+=]/
  //validate password length
  if(str.length <= 7 || str.length >= 31) {
  return false
  }
  //check if password contains punctuation
  if (!punctuation.test(str)){
  return false
  }
  //check if password contains a number
  if (!(/[0-9]/).test(str)) {
    return false
  }
  //check if password contains a capital character
  if (myPassword.every(function(character){
    return character === character.toLowerCase()
  })) {
  return false
  }
  //check if password contains the string 'password'
  if (str.toLowerCase().includes('password')){
    return false
  }
  //if password is valid, return true
  return true
}
