// Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the longest consecutive subsequence (LCS). An LCS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in a consecutive, increasing order. The sequence does not need to be contiguous and there can be several different subsequences. For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program should return 4 because that is the length of the longest consecutive subsequence.


function LongestConsecutive(arr) {
  //array to store all consecutive subsequences
  var sub = []
  //initialize tracking variables to determine length of longest subsequence
  var len = 1
  var max = 1
  //sort integery array in ascending order
  //push all consecutive subsequences into new array
  arr.sort(function(a,b){return a-b}).forEach(function(value,idx, arr){
    if (value + 1 === arr[idx + 1]){
       sub.push(arr[idx], arr[idx +1])
    }
  })
  //eliminate duplicates from subsequences array
  var subSequences = [...new Set(sub)]
  //loop through subsequences to find the longest length
  for (var i = 0; i < subSequences.length; i++) {
    if (subSequences[i + 1] - subSequences[i] === 1){
        len++
        console.log('LENGTH:', len)
        console.log('MAX:', max)
      //if there is an element out of sequence, set max to current length and reset length to 1
      } else if (len > max) {
        max = len;
        len = 1;
    }
  }
  return max
}
