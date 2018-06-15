// Unique Characters -- Leticia
// Write a JavaScript function to extract unique characters 
// from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"


function findUnique(word) {
  var found = "";
  
  for (var i=0; i<word.length; i++){
    if (!found.includes(word[i]) ) {
      found += word[i];
    }
  }
  
  return found;
}

  
  
console.log(findUnique('thequickbrownfoxjumpsoverthelazydog'));

