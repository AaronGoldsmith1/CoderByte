// Have the function LRUCache(strArr) take the array of characters stored in strArr, which will contain characters ranging from A to Z in some arbitrary order, and determine what elements still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm implemented. For example: if strArr is ["A", "B", "C", "D", "A", "E", "D", "Z"], then the following steps are taken:
//
// (1) A does not exist in the cache, so access it and store it in the cache.
// (2) B does not exist in the cache, so access it and store it in the cache as well. So far the cache contains: ["A", "B"].
// (3) Same goes for C, so the cache is now: ["A", "B", "C"].
// (4) Same goes for D, so the cache is now: ["A", "B", "C", "D"].
// (5) Now A is accessed again, but it exists in the cache already so it is brought to the front: ["B", "C", "D", "A"].
// (6) E does not exist in the cache, so access it and store it in the cache: ["B", "C", "D", "A", "E"].
// (7) D is accessed again so it is brought to the front: ["B", "C", "A", "E", "D"].
// (8) Z does not exist in the cache so add it to the front and remove the least recently used element: ["C", "A", "E", "D", "Z"].

function LRUCache(strArr) {
  //declare empty array to store cache
  var cache = []
  //loop through passed in string array
  strArr.forEach(function(character, idx, strArr){
    //if character doesn't exist in hash, and hash is less than 5, add character to end
    if (!cache.includes(character) && cache.length < 5){
      cache.push(character)
    }
    //if cache length is 5, add new character to end and remove first character
    if (!cache.includes(character) && cache.length >= 5) {
      cache.push(character)
      cache.splice(0, 1)
    }
    //if character is alread in cache, remove it at its current index and push it to the end
    else if(cache.includes(character)) {
      cache.splice(cache.indexOf(character), 1)
      cache.push(character)
    }
  })
  //return cache as string
  return cache.join('-')
}
