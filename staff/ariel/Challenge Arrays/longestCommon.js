/*### longestCommon

Write a JavaScript function to find the longest common starting substring in a set of strings.

    Sample array : console.log(longest_common_starting_substring(['go', 'google']));
    Expected result : "go"

*/

var subStrings = [];

function longestCommon(x){

for(j=0; j<x.length; j++)

    subStrings[j] = x[j][0];

    for(var i=1; i<x[i].length; i++){

        subStrings[i] = subStrings[j] + x[i][j];

    }

    console.log(subStrings)
};

longestCommon(['hola','holly']) 






//, 'ola', 'holly', 'holanda']) //, 'sobre', 'sonoro', 'sobrado', 'sobresaturado']);