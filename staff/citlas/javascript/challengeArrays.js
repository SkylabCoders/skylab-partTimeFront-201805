/* Arrays practice [timing 30m]
Goals
Practice arrays.
Tasks

1
isArray
Write a JavaScript function to check whether an input is an array or not.
Test Data:
console.log(isArray('Skylab'));    // this should returns false
console.log(isArray([3, 5]));      // this should returns true
*/

function isArray(a){
    console.log(Array.isArray(a));
 }
 
 isArray([1,2,3])

/*
2
joinElements
Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : beatles = ['John','George','Ringo','Paul'];

Expected Output : 
'John,George,Ringo,Paul'
*/
var beatles = ['John','George','Ringo','Paul'];
var beatlesJoin = beatles.join()
console.log(beatlesJoin);

/*
3
array_Clone
Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0]]
*/

var array = [1, 2, 4, 0];
var arrayClone = array.slice(0);
console.log(arrayClone);

/*
4
findDifferences
Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"] 
*/

var array1 = [1,2,3,4,5,6,7];
var array2 = [1,2,4,5,6,7,8];
var temp = [];


for (var i in array1) {
  if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
  if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}

console.log(temp);

//respuesta de leticia
nums1 = [1, 2, 3];
nums2 = [100, 2, 1, 10];

function findDifferences(array1,array2) {
    var diff = [];
    
    // Buscar en array 1
    for(var i = 0; i< array1.length; i++) {
        
        var isthere = false;

        for(var j = 0; j< array2.length; j++) {
            //console.log(array1[i], array2[j]);
            if(array1[i] === array2[j]){
                isthere = true;
            }
        }
        if (!isthere) {
            diff.push(array1[i]);
        }
    }
    
    // Buscar en array 2
    for(var i = 0; i< array2.length; i++) {
        
        var isthere = false;

        for(var j = 0; j< array1.length; j++) {
            //console.log(array2[i], array1[j]);
            if(array2[i] === array1[j]){
                isthere = true;
            }
        }
        if (!isthere) {
            diff.push(array2[i]);
        }
    }
    return diff;
}

findDifferences(nums1,nums2);

/*
5
Sum and Product
Write a JavaScript program to compute the sum and product of an array of integers.
*/
function sumAndProduct (a){
    var sum = 0;
    var product = 1;
    for (i=0;i<a.length;i++){
        sum = sum + a[i];
        product = product * a[i];
    }

    return "la suma es " + sum + " el product es " + product
}
console.log(sumAndProduct([2,3]))

/*
6

addItems
Write a JavaScript program to add items in an blank array and display the items.
*/
var blankArray = [];
function addItems(a){
    return blankArray.push(a);
}
addItems(12)
console.log(blankArray)


/*
7
generateArrayLength
Write a JavaScript function to generate an array of specified length, 
filled with integer numbers, increase by one from starting position.

Test Data :
console.log(array_range(1, 4)); 
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
*/

function arrayRange(a,b){
    var array = []
    var j=0
    for(i=a;j<b;i++){
        array.push(i);
        j++;
    }
    return array
    }
    console.log(arrayRange(1, 4)); 
    console.log(arrayRange(-6, 4));

/*
8
last
Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.

Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); //te regresa los ultimos 3
console.log(last([7, 9, 0, -2],6)); //te regresa los ultimos 6
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]
*/

function last(a,n){
    var poped;

if (n==undefined){
    poped = a.pop();
} else {
    if (a.length<n){
        poped = a.slice(0,n);
    } else {
        poped = a.splice(a.length-n,n);
    }
}
    return poped
}
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6)); 

/*
9
sortItems
Write a JavaScript program to sort the items of an array.

Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

function myFunction() {
  var sorted = arr1.sort(function(a, b){return a - b});
  return sorted
}
console.log(myFunction());


/*
10
getRandom
Write a JavaScript function to get a random item from an array.
*/
var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
console.log(Math.floor((Math.random() * arr1.length) + 1));


/*
11
findDuplicates
Write a JavaScript program to find duplicate values in a JavaScript array.
*/
var arr1 = [ 3, 8, 1, 7, 6, 3, 5, -4, -3,6, 2, 1 ];

function myFunction() {
  var sorted = arr1.sort(function(a, b){return a - b});
  return sorted
}

var sorted = myFunction()
var duplicated = []
console.log(sorted)
for (i=0;i<sorted.length;i++)
if (sorted[i]==sorted[i+1]){
  duplicated.push(sorted[i]);
}
console.log(duplicated)

/*
12
mergeArrays
Write a JavaScript function to merge two arrays and removes all duplicates elements.

Test data :
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
console.log(merge_array(array1, array2));
[3, 2, 30, 1]

*/

var array1 = [1, 2, 3,1,2]; 
var array2 = [2, 30, 1]; 
var merged = [];
var duplicated = [];


function mergeArray(a,b){
  merged = array1.concat(array2);
  
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var unique = merged.filter( onlyUnique ); 
    return unique
}

console.log(mergeArray(array1,array2));



/*
13
separateEven
Write a JavaScript program which accept a number as input and insert dashes (-) 
between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/
function insertDash(num){
    var separated = []
    num = num.toString();
    num = num.split("");
   

    for (var i=0; i<num.length; i++){
      num[i]=parseInt(num[i]);
      separated.push(num[i]);     
    }
 
  
    for (var i=0; i<separated.length-1; i++){
      if (separated[i] % 2 == 0 && separated[i+1] % 2 == 0){
        var a = separated[i+1];
         separated.splice(i+1,0,"-");   
     }     
    }
  
  
    separated = separated.join('')
    console.log(separated)
    return separated
  
}
insertDash("025468");

/*
14
mostFrequentItem
Write a JavaScript program to find the most frequent item of an array.
Sample array : */
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times ) 


function mostFreq (){
    var count = {};
    for (i=0;i<arr1.length;i++){
      var num = arr1[i];
      count[num] = count[num] ? count[num] + 1 : 1;
    }
    var arrayVal = Object.values(count);  
    var sorted = arrayVal.sort(function(a, b){return a - b});
    
    console.log(sorted[sorted.length-1])
    var answer;
    for (var x in count){
      if (count[x] == sorted[sorted.length-1]){
        answer = x ;
      }
    }
    
    
    return answer + ' is the most frequent and is repeated ' +sorted[sorted.length-1] + ' times'
    
  }
  console.log(mostFreq(arr1));

/*
15
moveElement
Write a JavaScript function to move an array element from one position to another.

Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]
*/


function move(a,b,c){
    array = a;
    moveThisPositions = c;
    
    itemToMove = array.splice(b,1);
    if (c<0){
      array.splice(c+1,0,itemToMove[0]);
    } else {
      array.splice(c,0,itemToMove[0]);
    }
    
    return array;
  }
  console.log(move([10, 20, 30, 40, 50], 0, 2));
  console.log(move([10, 20, 30, 40, 50], -1, -2));

/*
16
swapCase
Write a JavaScript program which accept a string as input and swap the case of each character. 
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

function swap(str){
    var splited = str.split('')
    //console.log(splited)
    for (i=0;i<splited.length;i++){
       var answer = []
     if (splited[i] == splited[i].toLowerCase()){
       splited[i] = splited[i].toUpperCase();
     } else {
       splited[i] = splited[i].toLowerCase();
     }
    }
    
     var nonsplit = splited.join('')
    
    console.log(nonsplit)
  }
  
  swap('The Quick Brown Fox');

/*
17
Print elements array
Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.

Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output : 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" 
*/

function printElements(x){
    for (i=0;i<x.length;i++){
      console.log("Row " + i)
       for (j=0;j<x[i].length;j++){
        console.log(x[i][j]);
       }
    }
  }
  
  printElements(a);

/*
18
array_filled (string)
Write a JavaScript function to create a specified number of elements with 
pre-filled string value array.

Test Data :
console.log(array_filled(3, 'default value')); 
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]
*/


function arrayFilled(num,str){
    var arrayToFill = []
    for(i=0;i<num;i++){
      arrayToFill.push(str)
    }
    return arrayToFill
}
console.log(arrayFilled(3, 'default value')); 
console.log(arrayFilled(4, 'password'));

/*
19
Sum squares
Write a JavaScript program to find the sum of squares of a numeric vector.
*/


function sumSquares(array){
    var answer=0;
    for (i=0;i<array.length;i++){
      answer = answer + (array[i]*array[i])
    }
    return answer
  }
  console.log(sumSquares([1,2,3,4]));


/*
20
removeDuplicate
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
----------------------------- https://stackoverflow.com/questions/1960473/get-all-unique-values-in-an-array-remove-duplicates
*/

var arrayToRemoveDups = [1,2,3,4,2,3,5,4,6,]
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

var unique = arrayToRemoveDups.filter( onlyUnique ); 

/*
21
showChoices
We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."

Note : Use ordinal numbers to tell their position.
*/

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]

function ordinal(col,ord){
  for (i=0;i<col.length;i++){
    if (i==0){
       console.log((i+1) + ord[1] + " choice is " + col[i]);
     } else if (i==1){
       console.log((i+1) + ord[2] + " choice is " + col[i]);
     } else if (i==2){
       console.log((i+1) + ord[3] + " choice is " + col[i]);
     } else if (i>2){
       console.log((i+1) + ord[0] + " choice is " + col[i]);
     }   
   }
  }
 

console.log(ordinal(color,o));

/*
22
showLeapYears
Find the leap years in a given range of years.
*/

function leapYears(a,b){
    var years = []
   
    for(i=a;i<b;i++){
      if (i%4==0){
      years.push(i);
      } 
    }
    return years;
  }
  
  console.log(leapYears(2000,2025))

/*
23
shuffleArray
Write a JavaScript program to shuffle an array.
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
/*
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);
*/

function shuffle(a){
var currentIndex = a.length;
var temporaryValue;
var randomIndex;

while (0 !== currentIndex){
  randomIndex = Math.floor(Math.random()*currentIndex);
  currentIndex--;

  temporaryValue = a[currentIndex];
  a[currentIndex] = a[randomIndex];
  a[randomIndex] = temporaryValue;
}
return a
}

var array = [1,2,3,4];
array = shuffle(array);
console.log(array)
/*
24
binarySearch
Write a JavaScript program to perform a binary search.

Note : A binary search or half-interval search algorithm finds the position 
of a specified input value within an array sorted by key value.

Sample array : 
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output : 
console.log(binary_Search(items, 1)); //0 
console.log(binary_Search(items, 5)); //4
*/
var items = [1, 2, 3, 4, 5, 7, 8, 9];
function binarySearch(arr,elem){
  return arr.indexOf(elem)
}
console.log(binarySearch(items, 1)); //0 
console.log(binarySearch(items, 5)); //4

/*
25
sumPositions
There are two arrays with individual values, write a JavaScript program to compute
 the sum of each individual index value from the given arrays.

Sample array : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output : 
[4, 5, 8, 10, 12, 13] 
*/



array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

function sumPositions(a,b){
  var answer = []
  if (a.length<b.length){
      while (a.length<b.length) { 
        a.push(0);
      }
  } else if (a.length>b.length){
      while (a.length>b.length) { 
      b.push(0);
      }
  }
    for(i=0;i<a.length;i++){
      answer.push(a[i]+b[i]);
    }
return answer
}

console.log(sumPositions(array1,array2))




/*
26
generateArraySteps
Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :
console.log(rangeBetwee(4, 7)); 
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/

function rangeBetween(inic,fin){
    rangeArray = []
    for (i=inic;i<fin+1;i++){
      rangeArray.push(i);
    }
    return rangeArray
  }
  console.log(rangeBetween(4, 7)); 
  console.log(rangeBetween(-4, 7));

/*
27
flattenArray
Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow,
 the array will only be flattened a single level.

Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
[1, 2, 3, [[4]], 5, 6]
*/

//--------------------------------------no entiendo!! la logica
//-----------------no se que es pass shallow
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
var arr1 = [1, [2], [3, [[4]]],[5,6]]

function flattenDeep(arr1){
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};

console.log(flattenDeep(arr1))

/*
28
unionArray
Write a JavaScript program to compute the union of two arrays.
Sample Data :

console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/
//-------------------------------------------------------------esta hecha pero no entiendo filter
function union (a,b){
  var c = a.concat(b);
  var d = c.filter(function (item, pos) {return c.indexOf(item) == pos});
  d.sort(function(a, b){return a - b});
  return d
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

/*
29
removeFalsy
Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' 
values from an array.

Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/

function removeFalsy(array) {
  
  var myFilterArray = array.filter(Boolean);
  
    return myFilterArray;
  }

console.log(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]));

/*
30
first
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' 
will return the first 'n' elements of the array.

Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
*/

//-----------------------------------------me sale mal el tercer test, deberia ser 7,9,0 y sale 9,0,-2
function first(a,n){
    var shifted;

if (n==undefined){
    shifted = a.shift();
} else {
    if (a.length<n){
        shifted = a.slice(0,n);
    } else {
        shifted = a.splice(a.length-n,n);
    }
}
    return shifted
}
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


/*
31
sortObjectsTitle
Write a JavaScript function to sort the following array of objects by title value.

Sample object :

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
Expected result :

[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]
*/
//--------------------------- https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

function compare(a,b) {
 if (a.title < b.title)
   return -1;//If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
 if (a.title > b.title)
   return 1;//If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
 return 0;//leave a and b unchanged with respect to each other, but sorted with respect to all different elements
}

console.log(library.sort(compare));

/*
32
findPairSum
Write a JavaScript program to find a pair of elements (indices of the two numbers) from 
an given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 3, 4
*/

var numbers = [10,20,10,40,50,60,70];
var target = 50;
var len = numbers.length;
console.log("numbers length")
var answer = []
for (i=0;i<numbers.length;i++){
  console.log(numbers[i])
  for (j=0;j<len;j++){
  if(numbers[i]+numbers[j]==target){
    answer.push(numbers.indexOf(numbers[i]));
    answer.push(numbers.indexOf(numbers[j]));
  }
}
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var unique = answer.filter( onlyUnique ); 
   
console.log(unique)

/*
33
validValues
Write a JavaScript function to retrieve the value of a given property from all elements in an array.

Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/
function validValues(array) {
  
  var myFilterArray = array.filter(Boolean);
  
    return myFilterArray;
  }

console.log(validValues([NaN, 0, 15, false, -22, '',undefined, 47, null]));


/* 34
longestCommon
Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"
*/


/* 35
fillArray
Write a JavaScript function to fill an array with values 
(numeric, string with one character) on supplied bounds.

Test Data :
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

*/


/* 36
removeElement
Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
*/

function removeElement(arr,del){
  arr.splice(arr.indexOf(del),1);
 return arr
}
console.log(removeElement([2, 5, 9, 6], 5));


/* 37
findArrayWithElement
Write a JavaScript function to find an array contains a specific element.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
*/


/* 38
emptyArray
Write a JavaScript script to empty an array keeping the original size.

*/
function emptyArray(arr){
  for(i=0;i<arr.length;i++){
    arr[i]=""
  }
  console.log(arr.length)
  return arr
}
console.log(emptyArray([2, 5, 9, 6]));


/* 39
getNthLargest
Write a JavaScript function to get nth largest element from an unsorted array.

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
*/
function getNthLargest(arr,nth){
  var sorted = arr.sort(function(a, b){return a - b});
  return arr[nth];
  
}
console.log(getNthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 

/* 40
array_filled (numeric)
Write a JavaScript function to create a specified number of elements with pre-filled 
numeric value array.

Test Data :
console.log(array_filled(6, 0)); 
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]
*/
function arrayFilled(num,str){
    var arrayToFill = []
    for(i=0;i<num;i++){
      arrayToFill.push(str)
    }
    return arrayToFill
}
console.log(arrayFilled(6, 0)); 
console.log(arrayFilled(4, 11));

/* 41
filterFalsy
Write a JavaScript function to filter false, null, 0 and blank values from an array.

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
*/

function filterFalsy(array) {
  
  var myFilterArray = array.filter(Boolean);
  
    return myFilterArray;
  }

console.log(filterFalsy([58, '', 'abcd', true, null, false, 0]));
//----------------------------
//---------------------------no me salia con if == false,etc quitaba los otros, pero no el false
//-----------------------------
//[58, "abcd", true]
//https://stackoverflow.com/questions/32906887/remove-all-falsy-values-from-an-array/32906951


//falta 27,30,32,34,35,37