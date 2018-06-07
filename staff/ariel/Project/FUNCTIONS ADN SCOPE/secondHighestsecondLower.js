
/*Second lowest and second greatest
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

function secondLG(num){
  var sorted = num.sort(function(a, b){return a-b});
  console.log(sorted)
  var answer = []
  answer.push(sorted[1]);
  answer.push(sorted[sorted.length-2])
  return answer
}

console.log(secondLG([1,2,3,4,5]))