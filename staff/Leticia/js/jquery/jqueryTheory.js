// Jquery
// --------------------------
// BOM -> browser object model
// DOM -> document object model


$('.myDivClass'); // selector
// retorna un objeto jquery, 
// podemos usar métodos:
// .html()
//.append()
//.attr('data-key', 'definicion del key')
//.css('color','red')

$('input').val('pongo otra cosa');

$('.class').each(function(){
    console.log(this)
});

$('.myDivClass').each(function(){
    // this es .myDivClass
    // hay que wrapear el this para convertirlo en elemento jquery
    $(this).html('my div con class'); 
    $(this).append(' '+(i+1));
})

.show(1000) // time in msecs

$('div')[1]; 
// retorna un objeto del DOM, 
// no obj jquery cuando se usan las llaves
// NO podemos usar métodos en este caso



// funcion callback
// --------------------------
// Permite saber cuando la llamada a una función se ha ejecutado
$('.myDivClass').each(function(){
    $(this).hide(1000, function(){ // la funcion despues de la coma es el callback
        console.log('la animacion '+i+' ha terminado');
        // se ejecuta una vez el de antes ha terminado
    });
})

$('.mydivClass:nth-child(2)').hide(5000,function(){
    $('.mydivClass:nth-child(3)').hide(5000,function(){
        console.log('La animación 2 ha terminado');
            $('.mydivClass:nth-child(4)').hide(5000,function(){
                console.log('La animación 3 ha terminado');
        })
    })
})

// callbacks anidados
$('.mydivClass:nth-child(2)').hide(5000,function(){
    $('.mydivClass:nth-child(3)').hide(5000,function(){
      $('.mydivClass:nth-child(4)').hide(5000,function(){});
    })
})

// Ejemplo de funcion usada en el callback

/*
<html>
<head>
  <meta charset="utf-8">
  <title>jQuery</title>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>
<body>
    <div id="mydivId">Estado de las animaciones: <span class="estado"></span></div>
    <div class="mydivClass">my div1 con class</div>
    <div class="mydivClass">my div2 con class</div>
    <div class="mydivClass">my div3 con class</div>
    <input type="text" />
    <button id="myButton"></button>
  
  <script>

  function changeStado(estado){
    $('#mydivId .estado').html(estado);  
  }
  
  changeStado("comenzando animación 1");
    
  $('.mydivClass:nth-child(2)').hide(5000,function(){
    changeStado('La animación 1 ha terminado');
    
    $('.mydivClass:nth-child(3)').hide(5000,function(){
      changeStado('La animación 2 ha terminado');
      
      $('.mydivClass:nth-child(4)').hide(5000,function(){
        changeStado('La animación 3 ha terminado');
      });
    });
  });
  </script>
</body>
</html>
*/



function myFunctionSumaConCallback(a,b, callback){ // parámetro funcion callback
    var i = 0;
    var resultado = 0;
    while(i++ < 100){
      resultado = a+b+i; 
    }
    callback(resultado);
}
    
var miCallback = function(res){
    changeStado(res);
}
    
// le definimos qué funcion callback usar
myFunctionSumaConCallback(2,3, miCallback); 
 


//---------------------------------------
// Manejar eventos
//---------------------------------------

/* 
<div id="mydivId">Estado de las animaciones: 
<p class="estado"></p>
<p class="estado-fin"></p>
</div>
<div class="mydivClass">my div1 con class</div>
<div class="mydivClass">my div2 con class</div>
<div class="mydivClass">my div3 con class</div>
<input type="text" />
<button id="myButton">click meee</button> 
*/

$('#myButton').on('click',function(){
    alert("Botón clicado");
});

$('#myButton').on('click',function(){
    $('.mydivClass:nth-child(2)').hide(3000);
});

// cada vez que ejecuto el click
$('#myButton').on('click',function(){
    // pone el val del input a un div del html
    $('.mydivClass:nth-child('+$('input').val()+')').hide(3000);
    // le paso el val del input
    $('#mydivId .estado').html('Ocultando: '+$('input').val());  
});

$('#myButton').on('click',function(){
    // código optimizado usando una variable 
    // para evitar que jquery tenga que buscar dos veces el elmento
    var elementoOcultar = $('input').val()
    $('.mydivClass:nth-child('+elementoOcultar+')').hide(3000);
    $('#mydivId .estado').html('Ocultando: '+elementoOcultar);  
});

var i = 0;
$('#myButton').mouseleave(function(){
    $('#mydivId .estado').html('Ocultando: '+(i++));  
});


// scroll events
//---------------------------------------
$(window).scroll(function(){
    //valor en coordernadas
    var pos = $('#myButton').position();
    $('#mydivId .estado').html('Ocultando: '+(pos.left)+' // '+pos.top);  
})

$(window).scroll(function(){      
    // valor en px
    var pos = $(window).scrollTop();
    $('#mydivId .estado').html('Ocultando: '+(pos));  
    
    if(pos > 140){
        $('#mydivId .estado').css("color",'red');
    }else{
        $('#mydivId .estado').css("color",'black');
    }   
})


// unbind()
// Remove a previously-attached event handler from the elements.
$( "#foo").unbind( "click" );

guess = $('input').val();
$('input').val('').focus();
// .focus() vuelve a poner el cursor en el input
// .val('') vacía el input