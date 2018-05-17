

const calculator = (x,y) => {
        if (typeof x == 'number' && typeof y == 'number') {
                return
                let suma = x + y;
                let resta = x - y;
                let mult = x * y;
                let div = x / y;
                if (suma.isInteger){
                        console.log ('Suma = ' + suma)     
                } else {
                        console.log ('Suma = ' + suma.toFixed(3))
                };
                if (resta.isinteger) {
                        console.log ('Resta = ' + resta)
                } else {
                        console.log ('Resta = ' + resta.toFixed(3))
                };
                if (mult.isInteger) {        
                        console.log ('Multiplicación = ' + mult)
                } else {
                        console.log ('Multiplicación = ' + mult.toFixed(3))
                };
                if (div.isInteger) {
                        console.log ('División = ' + div)
                } else {
                        console.log ('División = ' + div.toFixed(3))
                }
                
        } else {
                console.log('ATENCION ! Solo se pueden ingresar números' )
        }  
}

calculator(4,2);
