/* ## Longest Country

Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 

    Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output : "United States of America"
*/

function longestCountry(x){

    var changes = 1;

    while (changes > 0){

        changes = 0;

        for (var i=0; i<x.length-1; i++){


            if(x[i].length < x[i+1].length){
                temp = x[i];
                x[i] = x[(i+1)];
                x[(i+1)] = temp;
                changes = changes + 1;
            };  

        };


        
    };


    return x[0]  

    
};

longestCountry(["Australia", "Germany", "United States of America"]);
