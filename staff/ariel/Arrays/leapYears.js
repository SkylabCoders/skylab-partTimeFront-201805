
//### showLeapYears Find the leap years in a given range of years.

// ALGORITMO ACCORDING TO WIKIPEDIA
// p: Es divisible por 4; q: es divisible entre 100; r: es divisible entre 400
// p & (!q || r)


function leapYear(){
    var years = [];
    var leapYears = []
    var elements = Math.round(Math.random()*10000);

    for (var i= 0; i< elements; i++){
        years[i] = Math.round(Math.random()*5000);

        if ( Number.isInteger(years[i]/4) && (!Number.isInteger(years[i]/4) || Number.isInteger(years[i]/400))){
            console.log('El año ' + years[i] + ' es bisiesto')
            leapYears.push(years[i]);
        } else { 
            console.log(years[i])
        }

    };
    console.log('');
    console.log('Hemos encontrado los siguentes ' + leapYears.length + ' años bisiestos en la lista de ' + elements + ' años:');
    console.log('');

    for ( var j= 0; j < leapYears.length; j ++){
        console.log(leapYears[j]);
    };

};

leapYear();