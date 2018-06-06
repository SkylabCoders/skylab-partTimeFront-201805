// Arrays

var beatles;
beatles = ['John', 'George', 'Ringo', 'Paul'];

beatles2 = beatles;
// si hay dos vars que contienen un array si se modifica en una, se modifica en la otra
// si modifico beatles2 estoy modicando beatles

var beatles = new Array('John', 'George', 'Ringo', 'Paul');

console.log(beatles.join("---.-"))

console.log(beatles.length)


var beatles = ['John', 'George', 'Ringo', 'Paul'];
var rollings = ['Mick', 'Keith', 'Charlie', 'Ron']


var all = beatles.concat(rollings)
console.log(all)
console.log(beatles);
console.log(rollings);

//Añadir un nuevo elemento al array sustituyendo al 4
var all = beatles[4] = "Pete";

//Añadir al final del array
beatles.push("Pete");

//Añadir al principio del array
beatles.unshift("Pete");

// quita el elmento del final
beatles.pop();

// ordernar
beatles.sort();

// dar la vuelta al orden
beatles.reverse();


// no modifica el array final
// 1 posicion inicial inclusive
// 2 hasta la 2 no inclusive
beatles.slice(1,2);

//A partir del 1 quita dos y mete pete
// quita elementos y pone elementos del array
beatles.splice(1,2,'pete');







//-------------------------------------------------------------------
//-------------------------------------------------------------------

// # Arrays practice [timing 30m]

// ## Goals

// - Practice arrays.

//-------------------------------------------------------------------
//-------------------------------------------------------------------

// ## Tasks

// ### isArray
// Write a JavaScript function to check whether an `input` is an array or not.

//     Test Data:
//     console.log(isArray('Skylab'));    // this should returns false
//     console.log(isArray([3, 5]));      // this should returns true

    function isArray(tocheck) {
        if(typeof tocheck == Array) {
            return true;
        } else {
            return false;
        }
    }
    console.log(isArray([0,0,0]));



// ### joinElements
// Write a simple JavaScript program to join all elements of the following array into a string.

//     Sample array : beatles = ['John','George','Ringo','Paul'];
    
//     Expected Output : 
//     'John,George,Ringo,Paul'
    
    beatles = ['John','George','Ringo','Paul'];
    function joinElements(elements) {
       return beatles.join(',');
    }

    joinElements(beatles);


// ### array_Clone
// Write a JavaScript function to clone an array.

//     Test Data :
//     console.log(array_Clone([1, 2, 4, 0])); 
//     console.log(array_Clone([1, 2, [4, 0]]));
//     [1, 2, 4, 0] 
//     [1, 2, [4, 0]]

var numbers1 = [1, 2, 4, 0];
function cloneArray(arrayToClone) {
    var newArray = [];
    for(var i=0; i <= arrayToClone.length; i++) {
        newArray.push(arrayToClone[i]);
    }
    return newArray;
}
cloneArray(numbers1);



// ### findDifferences
// Write a JavaScript function to find the difference of two arrays.

//     Test Data :
//     console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
//     ["3", "10", "100"]
//     console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
//     ["6"]
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//     ["3", "10", "100"] 

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


// Solucion de Cristiam
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



// ### Sum and Product
// Write a JavaScript program to compute the sum and product of an array of integers.

var numbers = [1,2,3,4];

function SumAndProduct(arrayNumber){
    var sum = 0;
    var prod = 1;

    for(var i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i];
        prod *= arrayNumber[i]; 
    }

    console.log(sum + ' ' + prod);
}

SumAndProduct(numbers);


// ### addItems
// Write a JavaScript program to add items in an blank array and display the items.

function addItems() {
    var newArray = [];

    for(var i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i]);
    }

    console.log(newArray);
}
addItems('pepe', 'manolo', 'perico');


// ### generateArrayLength
// Write a JavaScript function to generate an array of specified length, 
// filled with integer numbers, increase by one from starting position.

    // Test Data :
    // console.log(array_range(1, 4)); 
    // [1, 2, 3, 4]
    // console.log(array_range(-6, 4));
    // [-6, -5, -4, -3]

function createArray(nMin, range){    
    var newArray = [];
    
    for(var i = nMin; i < (nMin + range); i++) {
        newArray.push([i]);
    }
    return newArray;
}

createArray(-1,5);



// ### last
// Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

    // Test Data : 
    // console.log(last([7, 9, 0, -2])); 
    // console.log(last([7, 9, 0, -2],3)); 
    // console.log(last([7, 9, 0, -2],6));
    // Expected Output : 
    // -2 
    // [9, 0, -2] 
    // [7, 9, 0, -2]

var arrayNumbers = [7, 9, 0, -2];

function getLast(arraySet, n){
    var newArray = [];

    if(n !== undefined){                    // remember set undefined not null
        newArray = arraySet.splice(n);
    } else {
        newArray = arraySet.splice(-1);
    }
    
    return newArray;
}

getLast(arrayNumbers);
getLast(arrayNumbers, -2);


// ### sortItems
// Write a JavaScript program to sort the items of an array.

//     Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
//     Sample Output : -4,-3,1,2,3,5,6,7,8

var arrayNumbers = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

function sortItems(arrayToSort){
    return arrayToSort.sort();
}

sortItems(arrayNumbers);


// ### getRandom
// Write a JavaScript function to get a random item from an array.

var arrayNumbers = [ 303, 803, 703, 603, 503, -403, -303, 203, 103 ];

function getRandom2(arr){
    var randomPosition = Math.floor(Math.random() * arr.length);
    console.log(arr[randomPosition]);
}

getRandom2(arrayNumbers);



// ### findDuplicates
// Write a JavaScript program to find duplicate values in a JavaScript array.


// !!!!!! not finished !!!!!!!!!

var arrayNumbers = [ 3, 8, 5, 8, 5, -4 ];

function findDuplicates(arr) {
    var duplicates = [];

    for(var i = 0; i < arr.length; i++){
        //console.log(arr[i]);
        for(var j = 0; j < arr.length; j++){
            //console.log(" -> " + arr[j]);
            if( i === j ){
                // console.log("same position");
                continue;
            } else if(arr[i] === arr[j]) {  
                //console.log("same value " + arr[i]);
                duplicates.push(arr[i]);
            
                // if(duplicates.length === 0) {
                //     duplicates.push(arr[i]);
                // } else {
                //     for(var k = 0; k < duplicates.length; k++){
                //         console.log(arr[i] + " -> " + duplicates[k]);
                //         if(arr[i] !== duplicates[k]){
                //             console.log("diferent! " + arr[i]);
                //             duplicates.push(arr[i]);
                //         }
                //     }
                // }
            } else {
                continue;
            }
        }
    }
    
    console.log(duplicates);
}

findDuplicates(arrayNumbers);


// ### mergeArrays
// Write a JavaScript function to merge two arrays and removes all duplicates elements.

//     Test data :
//     var array1 = [1, 2, 3]; 
//     var array2 = [2, 30, 1]; 
//     console.log(merge_array(array1, array2));
//     [3, 2, 30, 1]

var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1];

function mergeArrays(arr1,arr2){
    return arr1.concat(arr2);
}
mergeArrays(array1,array2);



// ### separateEven
// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

var quantity = 41223223;

function insertDash(number){
    var num = number.toString().split("");
    for (var i = 0; i < num.length; i++){
        if (num[i] % 2 === 0 && num[i+1] % 2 === 0){
            num[i] += "-";
        }
    }

    console.log(num.join(''));
}

insertDash(quantity);



// 26 ### mostFrequentItem
// Write a JavaScript program to find the most frequent item of an array.

//     Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//     Sample Output : a ( 5 times ) 



//  ### moveElement
// Write a JavaScript function to move an array element from one position to another.

//     Test Data :
//     console.log(move([10, 20, 30, 40, 50], 0, 2));
//     [20, 30, 10, 40, 50]
//     console.log(move([10, 20, 30, 40, 50], -1, -2));
//     [10, 20, 30, 50, 40]

var arr1 = [10, 20, 30, 40, 50];

function moveElement(arr, oldIndex, newIndex){
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    console.log(arr);
}

moveElement(arr1, 0, 2);



// ### swapCase
// Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

var sentence = "The Quick Brown Fox";

function invertCase(str){
    var newArray = str.split("");

    for(i = 0; i < newArray.length; i++){
        if( newArray[i] === newArray[i].toLowerCase()) {
            newArray[i] = newArray[i].toUpperCase();
        } else {
            newArray[i] = newArray[i].toLowerCase();
        }
    }
    return newArray.join("");
}

invertCase(sentence);


// ### Print elements array
// Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.

//     Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//     Sample Output : 
//     "row 0" 
//     " 1" 
//     " 2" 
//     " 1"
//     " 24"
//     "row 1" 

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printArray(arr){
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(j===0){
                console.log('row ' + arr.indexOf(arr[i]));
            }
            console.log(arr[i][j]);
        }
    }
}

printArray(a);



// ### array_filled (string)
// Write a JavaScript function to create a specified number of elements with pre-filled string value array.

//     Test Data :
//     console.log(array_filled(3, 'default value')); 
//     ["default value", "default value", "default value"]
//     console.log(array_filled(4, 'password'));
//     ["password", "password", "password", "password"]

function array_filled(n,content) {
    newArray = [];

    for(i = 0; i < n; i++){
        newArray.push(content);
    }
    console.log(newArray);
}

array_filled(3,'lorem ipsum');



// ### Sum squares
// Write a JavaScript program to find the sum of squares of a numeric vector.

var a = [3, 2, 5, 4];

function sumSquares(arr){
    var sum = 0;
    
    for(i = 0; i < arr.length; i++){
        sum += arr[i]*arr[i];
    }

    return sum;
}

sumSquares(a);



// ### removeDuplicate
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

var a = [pepe, Ramon, Mariano, Sandalio, Pepe];

function removeDuplicate(arr){
    for(i = 0; i < arr.length; i++){

    }
}

removeDuplicate(a);


// 21 ### showChoices
// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// Note : Use ordinal numbers to tell their position.



// 20 ### showLeapYears
// Find the leap years in a given range of years.



// 19 ### shuffleArray
// Write a JavaScript program to shuffle an array.



// 18 ### binarySearch
// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value. 

//     Sample array : 
//     var items = [1, 2, 3, 4, 5, 7, 8, 9];
//     Expected Output : 
//     console.log(binary_Search(items, 1)); //0 
//     console.log(binary_Search(items, 5)); //4



// 17 ### sumPositions
// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

//     Sample array : 
//     array1 = [1,0,2,3,4];
//     array2 = [3,5,6,7,8,13];
//     Expected Output : 
//     [4, 5, 8, 10, 12, 13] 




// 16 ### generateArraySteps
// Write a JavaScript function to generate an array between two integers of 1 step length.

//     Test Data :
//     console.log(rangeBetwee(4, 7)); 
//     [4, 5, 6, 7]
//     console.log(rangeBetwee(-4, 7));
//     [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]



// 15 ### flattenArray
// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

//     Sample Data :
//     console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
//     [1, 2, 3, 4, 5, 6]
//     console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
//     [1, 2, 3, [[4]], 5, 6]



// 14 ### unionArray
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :

//     console.log(union([1, 2, 3], [100, 2, 1, 10]));
//     [1, 2, 3, 10, 100]



// 13 ### removeFalsy
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

//     Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//     Expected result : [15, -22, 47]



// 12 ### first
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

//     Test Data : 
//     console.log(first([7, 9, 0, -2])); 
//     console.log(first([],3));
//     console.log(first([7, 9, 0, -2],3));
//     console.log(first([7, 9, 0, -2],6));
//     console.log(first([7, 9, 0, -2],-3));
//     Expected Output : 
//     7
//     [] 
//     [7, 9, 0] 
//     [7, 9, 0, -2] 
//     [] 



// 11 ### sortObjectsTitle
// Write a JavaScript function to sort the following array of objects by title value.

//     Sample object :

//     var library = [ 
//        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//        ];
//     Expected result :

//     [[object Object] {
//       author: "Suzanne Collins",
//       libraryID: 3245,
//       title: "Mockingjay: The Final Book of The Hunger Games"
//     }, [object Object] {
//       author: "Bill Gates",
//       libraryID: 1254,
//       title: "The Road Ahead"
//     }, [object Object] {
//       author: "Steve Jobs",
//       libraryID: 4264,
//       title: "Walter Isaacson"
//     }]



// 10 ### findPairSum
// Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

//     Input: numbers= [10,20,10,40,50,60,70], target=50
//     Output: 3, 4



// 9 ### validValues
// Write a JavaScript function to retrieve the value of a given property from all elements in an array.

//     Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//     Expected result : [15, -22, 47]



// 8 ### longestCommon
// Write a JavaScript function to find the longest common starting substring in a set of strings.

//     Sample array : console.log(longest_common_starting_substring(['go', 'google']));
//     Expected result : "go"



// 7 ### fillArray
// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// Test Data : 
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]



// 6 ### removeElement
// Write a JavaScript function to remove a specific element from an array.

//     Test data :
//     console.log(remove_array_element([2, 5, 9, 6], 5));
//     [2, 9, 6]



// 5 ### findArrayWithElement
// Write a JavaScript function to find an array contains a specific element.

//     Test data :
//     console.log(remove_array_element([2, 5, 9, 6], 5));
//     [2, 9, 6]



// 4 ### emptyArray
// Write a JavaScript script to empty an array keeping the original size.



// 3 ### getNthLargest
// Write a JavaScript function to get nth largest element from an unsorted array.

//     Test Data :
//     console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
//     89



// 2 ### array_filled (numeric)
// Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

//     Test Data :
//     console.log(array_filled(6, 0)); 
//     [0, 0, 0, 0, 0, 0]
//     console.log(array_filled(4, 11));
//     [11, 11, 11, 11]



// 1 ### filterFalsy
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

//     Test Data :
//     console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
//     [58, "abcd", true]


