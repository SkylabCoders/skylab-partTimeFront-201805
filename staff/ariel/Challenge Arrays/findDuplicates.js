// ### findDuplicates: Write a JavaScript program to find duplicate values in a JavaScript array.

// NOTA: NO LOGRO QUE EL ARRAY REPEATED NO MUESTRE LOS ELMENTOS REPETIDOS MAS DE UNA VEZ

var generated = [];
var repeated = [];
var elementos = 1;

function findDuplicates() {
   elementos = Math.round(Math.random()*100);

    console.log('EL array tendrá: ' + elementos + ' elementos.')


    // GENERA EL ARRAY
    for (var i=0; i<elementos; i++){
        generated[i] = (Math.round(Math.random()*20))
    };

    //COMPARACION CREAR ARRAY REPETIDOS
    for (i=0; i < elementos; i++){
        
        for (var j=(i+1); j<=elementos; j++){
            
            if (generated[i] === generated[j]){
                repeated.push(generated[i]); 
                break;
            }
        }
    }


    // ORDENAR EL ARRAY REPEATED
    var compare = function(a,b){
        if(a < b){
            return -1;
        } 
        return 1;
    };

    
    // ELIMINAR DUPLICADOS DEL ARRAY REPEATED
    for (var k=0; k < repeated.length; k++){
        
        for (var l=repeated.length-1; l>k; l--){
            
            if (repeated[k] === repeated[l]){
                repeated.splice(l,1);
            }
        }
    }

    repeated.sort(compare);

    // IMPRIMIR 
    console.log('El array generado es: ' + generated);
    console.log('');
    console.log('Los elementos repetidos son: ' + repeated);
    console.log('');
    console.log('La cantidad de elementos repetidos es: ' + repeated.length)

}

findDuplicates()