
 console.log("INI");
 $(document).ready(function(){
   console.log("DOCUMENT READY INI");
   function getBeers(page, perPage){
     $.ajax({
       url: "https://api.punkapi.com/v2/beers",
       data:{
         page: page,
         per_page: perPage
       },
       success: function(data){
         data.forEach(function(beer){
           $('.container').append(
             '<div class="beer">'+
               '<div class="beer-image" data-name='+beer.name+' style="background-image: url('+beer.image_url+')"></div>'+
               '<div class="beer-info">'+
                 '<h1>'+beer.name+'</h1>'+
                 '<h2>'+beer.tagline+'</h2>'+
                 '<div>First brewed: '+beer.first_brewed+'</div>'+
               '</div>'+
             '</div>');
         });
       },
       error: function(request, status, message){
         console.log("ERROR");
         console.log('message: ', message);
         console.log('status: ', status);
         console.log('request: ', request);

       }
     });
   }

//poner la pagina en n data
var pageNumber;


    $('.page').click(function(){
       pageNumber = $(this).attr('data-page-num');
       $('.container').empty();
       getBeers(pageNumber,$('.selecting').val());
    });
  /* $('.page2').click(function(){
       $('.container').empty();
       getBeers(2,$('.selecting').val());
   });
   $('.page3').click(function(){
       $('.container').empty();
       getBeers(3,$('.selecting').val());
   });*/



   $( ".selecting" ).change(function() {
       $('.container').empty();
       getBeers(pageNumber,$('.selecting').val());
   });
  
   /*Implementar búsqueda por nombre: 
  -añadir input y botón tal que cuando haga click en el botón, 
  -se busque en la API los resultados 
  -y se remplacen por los actuales.

  */
   //https://api.punkapi.com/v2/beers?beer_name=electric
function searchBeer(searchThis){
     $.ajax({
       url: "https://api.punkapi.com/v2/beers?beer_name="+searchThis,
       success: function(data){
         data.forEach(function(beer){
           $('.container').append(
             '<div class="beer">'+
               '<div class="beer-image" style="background-image: url('+beer.image_url+')"></div>'+
               '<div class="beer-info">'+
                 '<h1>'+beer.name+'</h1>'+
                 '<h2>'+beer.tagline+'</h2>'+
               '</div>'+
             '</div>');
         });
       },
       error: function(request, status, message){
         console.log("ERROR");
         console.log('message: ', message);
         console.log('status: ', status);
         console.log('request: ', request);

       }
       
     });
   }
   
   $('.searchBeer').click(function(){
     $('.container').empty();
     var buscarEsto = $('.cervezaABuscar').val();
     searchBeer(buscarEsto)
       console.log("busca");
    });

    //search ok!! falta el detalle

   

$(document).on('click', '.beer', function(){//https://stackoverflow.com/questions/9484295/jquery-click-not-working-for-dynamically-created-items
 console.log("The beer was clicked.");
 //var myWindow = window.open("cervezasDetalle.html", "MsgWindow","");
 //myWindow.document.write("<h2>Hello World!</h2>")
 output = '<h1>Hello, World!</h1>';
 window.open('cervezasDetalle.html').document.body.innerHTML += output;
 
 $.ajax({
       url: "https://api.punkapi.com/v2/beers?beer_name="+$(this).attr("data-name"),
       success: function(beer){
           $('.containerDetail').append(
             '<div class="beer">'+
               '<div class="beer-image" style="background-image: url('+beer.image_url+')"></div>'+
               '<div class="beer-info">'+
                 '<h1>'+beer.name+'</h1>'+
                 '<h2>'+beer.tagline+'</h2>'+
                 '<h2> First Brewed: '+beer.first_brewed+'</h2>'+
                 '<h2>'+beer.description+'</h2>'+
                 '<h2> ABV:'+beer.abv+'</h2>'+
                 '<h2> IBU: '+beer.ibu+'</h2>'+
                 '<h2> Volume: '+beer.volume+'</h2>'+
                 '<h2> Ingredients: '+beer.ingredients+'</h2>'+
                 '<h2> Food pairing: '+beer.food_pairing+'</h2>'+
                 '<h2> Brewers tips: '+beer.brewers_tips+'</h2>'+
                 '<h2>'+beer.tagline+'</h2>'+
               '</div>'+
             '</div>');
        
       },//termina success
       error: function(request, status, message){
         console.log("ERROR");
         console.log('message: ', message);
         console.log('status: ', status);
         console.log('request: ', request);
       }//termina error
       
     });//Termina ajax

});//termina document on click


/*
$('.beer').click(function() {
 //$('.beer').load("cervezasDetalle.html");
 console.log('clicado beer')
 window.open("cervezasDetalle.html");
 });*/
//$('.beer').load("cervezasDetalle.html");//no funciona?
   
   console.log("DOCUMENT READY END");
 });

 
 console.log("END");

/*
 //Implementar página detalle de beer: en cada resultado, 
 -hacer que el nombre y la imagen sea un link a 
 -una página nueva que muestre el 
 -detalle completo de esa cerveza. 
*/