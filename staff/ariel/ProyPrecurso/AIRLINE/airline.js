var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

function info(flights) {
    var name = window.prompt('Bienvenido a SkyLab Flights', 'Ingrese su nombre');
    alert ('Bienvenido ' + name.toUpperCase() + ' !');
    var costo = 0;
    var escalasTotales = 0;
    console.log('A CONTINUACION VERÁS LA INFORMACIÓN DE NUESTROS VUELOS:')
    for ( i=0; i<flights.length; i++) {
        if (flights[i].scale){
            var escala = 'realiza una escala.';
            escalasTotales = escalasTotales + 1;
        } else {
            escala = 'no realiza escalas.';
        };
        console.log( 'El vuelo con origen ' + flights[i].from + ' y destino '+  flights[i].to + ' tiene un costo de ' + flights[i].cost + ' y ' + escala);
        costo = costo + flights[i].cost;
    };
    var promedio = costo/flights.length;

    console.log('');
    console.log('El costo promedio de nuestros vuelos es: ' + promedio);
    console.log('');
    console.log('Las escalas totales ascienden a: ' + escalasTotales);
    console.log('');
    console.log('Los destinos de los últimos 5 vuelos del día de hoy son: ');
    for (y = flights.length-5; y< flights.length; y++) {
        console.log('- ' + flights[y].to);
    };

    modify(flights);
};

function modify(flights){
    var userType = window.prompt('Eres admin o usuario?', 'admin o user');
        if (userType === 'admin' || userType ==='Admin' || userType === 'ADMIN') {
            var action = window.prompt('Elije qué operación deseas realizar', '"Crear" o "Eliminar" vuelos');
            if (action === 'Crear' || action === 'Crear') {
                var newID = window.prompt('Ingrese el ID del vuelo', 'ej 10');
                var newTo = window.prompt('Ingrese el DESTINO del vuelo', 'Destino');
                var newFrom = window.prompt('Ingrese el ORIGEN del vuelo', 'Origen') 
                var newCost = window.prompt('Ingrese el COSTO del vuelo', 'Costo');
                var newScale = window.prompt('ingrese el nró de escalas', 'ej 2');
                if (newScale === 0){
                    escalaInfo = 'no realiza ninguna escala.';
                } else if (newScale === 1){
                    escalaInfo = 'realiza una escala.';  
                } else {
                    escalaInfo = 'realiza más de una escala.';
                };
                flights.push({ID: newID, to: newTo, from: newFrom, cost: newCost, scale: newScale});
                console.log('');
                console.log('El el nuevo vuelo parte de ' + flights[(flights.length)-1].from + ' hacia ' + flights[(flights.length)-1].to + ', con un costo de ' + flights[(flights.length)-1].cost + '€ y ' + escalaInfo);
            } else if (action === 'Eliminar' || action === 'eliminar' || action === 'ELIMINAR'){
                alert ('EN CONSTRUCCION');
            } else {
                alert ('PARAÁMETRO NO VÁLIDO, INTÉNTALO MAS TARDE');    // cómo puedo volver a la línea 48 ???
            };
        } else if (action === 'user' || action === 'USER' || action === 'User' || action === 'usuario' || action === 'Usuario' || action === 'USUARIO'  ) {
            alert ('EN CONSTRUCCIÓN');
        } else {
            alert ('NO ERES USER NI ADMIN');
        };
};
info(flights);
