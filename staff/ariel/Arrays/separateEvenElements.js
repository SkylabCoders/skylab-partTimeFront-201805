   
// ### separateEven:  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

var nro = [];


function separateEven(){
    var cifras = Math.round(Math.random()*10);

    if (cifras<2){
        alert('EL nro debe tener al menos 2 cifras');
        separateEven();
    };

    for (var i=0; i<cifras; i++){
        nro[i] = (Math.round(Math.random()*10))
    };

    console.log('EL nro generado es: ' + nro);
    

    for (i=0; i < cifras ; i++){

        if(nro[i]==='-'){
            continue;
        };

        if(Number.isInteger(nro[i]/2) && Number.isInteger(nro[(i+1)]/2)){
            nro.splice((i+1),0,'-');
        };
    }


    console.log('El nro modificado es: ' + nro.join(''));

}

separateEven()
