var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]; 




var nroDeJugadores = prompt('Ingrese el nro de jugadores', 'nro de jugadores');

/*  ÉSTE BLOQUE INTENTA TRABAJAR CON CLASS E INSTANCIAS
class jugadores {
    constructor(nombre, puntos) {
        this.nombre = nombre;
        this.puntos = puntos;
    }
};

var todosLosJugadores = [];

for (i=0; i<nroDeJugadores; i++) {
    var newPlayerName = prompt('Ingrese el nombre del jugador Nro: ' + (i+1) + 'jugador nro ' + (i+1) + ' de '+ nroDeJugadores + ' jugadores');
    var newPlayer = new jugadores(newPlayerName, 0);
    todosLosJugadores.push(newPlayer);
};

console.log('Los jugadores son: ')
for (i=0; i<nroDeJugadores; i++) {
    console.log('- ' + todosLosJugadores[i]);
};
*/

var jugadores =[];
for (i=0; i<nroDeJugadores; i++) {
    var newPlayer = {}

	newPlayer.nombre = prompt('Ingrese el nombre del jugador Nro: ' + (i+1)  + ' de '+ nroDeJugadores + ' jugadores');
	newPlayer.puntos = 0

	jugadores.push(newPlayer)
};

console.log('Bienvenidos: ');
for (y=0; y<jugadores.length; y++) {
    console.log('- ' + jugadores[y].nombre); 
};


var nroDePreguntas = prompt('Cuántas preguntas quieren hacer?')

function juego(){

for (i=0; i<nroDePreguntas; i++){

    var letra = prompt('Elige una letra', 'letra');
    var pregunta = questions.filter(function(letra){
        return questions.question === letra;
    });
    
    alert('Con la Letra: ' + letra.toUpperCase() + ', la pregunta es: ' + pregunta);
 /*
    for (y=0; y<jugadores.length; y++){

        var respuesta = prompt(jugadores[y].nombre + ' : ' + pregunta + ' tienes 5 segundos! ', 'respuesta');

        switch(respuesta){
            case questions.filter(function(letra){
                return questions.question === letra}):
            window.alert('CORRECTO ! Has ganado 1 punto !')
            jugadores[y].puntos=jugadores[y].puntos+1; 
            break;
            case 'pasapalabra':
                continue;
            break;
            case 'end':
                break;
            break;
            default:
            window.alert('Incorrecto ! ! !');
        };

    };*/
};



jugadoresSorted = Object.puntos(jugadores).sort(function(a,b){return jugadores[a]-jugadores[b]})


/*
for (j = 0; j< jugadores.length; j++) {
    console.log(jugadoresSorted[j].nombre + ' has sumado ' + jugadoresSorted[j].puntos + ' puntos.');
};
*/

};

juego(questions, jugadores);








 /*function myFunction() {
            var setTimeOut = setTimeout(function(){ alert("Tu tiempo ha terminado"); }, 50000);
        }; 


else if (setTimeOut){
        console.log(jugaodres[y].nombre + ' tu tiempo ha terminado, pasamos al próximo jugador');
        continue; 
        
/*function myStopFunction() {
                clearTimeout(setTimeOut);
}  
*/