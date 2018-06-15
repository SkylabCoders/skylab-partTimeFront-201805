//Objects 

var myObj = {
    prop1 : "value of myObj prop 1",
    prop2 : "value of myObj prop 2"
  }
  
  console.log(myObj['prop1'])
  
   
  console.log('Los Keys son: ' + Object.keys(myObj));  // ---> me detalla los nombres de las keys


// ITERACION A LO LARGO DE

 var numOfKeys = Object.keys(myObj)
 

  for(var i=1 ; i<=numOfKeys ; i++){
    console.log(myObj['prop'+i]) 
  }


  // THIS

  var hotel = {
    name: "SkyHotel",
    rooms: 40,
    booked: 20,
    gym: true,
    roomType: ['twin, single, suite'],
    checkAvailability: function(){
      return this.rooms > this.booked;
    }
    
  }

  console.log(hotel.checkAvailability());


  // CONSTRUCTOR  ---> funciona como una plantilla

  function Hotel(name, rooms, booked) {
    this.name = name,
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability= function(){
      return this.rooms > this.booked;
    }  
  }


  var skyHotel = new Hotel ('Skyhotel', 40, 20);    // --> INSTANCIA 
  console.log(skyhotel)
  var parkHotel = new Hotel ('Park', 140, 80);    // --> INSTANCIA 
  console.log(parkHotel)

  // PUEDO AGRUPAR INSTANCIAS EN ARRAYS

  var hotels = [skyHotel, parkHotel];

  // 

   
//Objects 

    var born = {
        country: "Colombia",
        city: "Macondo"
    }
    
    function Autor(n, l, b){
        this.name = n;
        this.lastmane = l;
        this.born = b
    }
    
    var gabrielAutor = new Autor("Gabriel","Garcia", born);

    function Book(name, autor){
        this.name = name;
        this.autor = autor;
    }
      
    console.log(gabrielAutor)
      
    var cienAnios = new Book("100 años de soledad", gabrielAutor)
      

    //console.log(cienAnios)


    console.log(cienAnios.autor.born.city)


    // ALCANCE O SCOPE DE LAS VARIABLES

    function Book(name, autor){
        this.name = name;
        this.autor = autor;
        this.pages = 400;
        
        this.numOfPages = function(){
          var self = this;            // --> tengo que traerme el "this" de la función madre
          
          function countPages(){
            return self.pages;
          }
          return countPages();
        }
      }