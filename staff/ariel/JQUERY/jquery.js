// DOM  --> document Object Model

// #document (en la consola), me permite inspeccionar el html

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
    
  $('.mydivClass:nth-child(2)').hide(5000,function(){       // --> el segundo argumento de .hide es la función call back que permite definir cuándo termina el hide. 
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


EVENTOS CON jQUERY:

  $('#myButton').on('click',function(){
      $('.mydivClass:nth-child(2)').hide(3000);
      $('#mydivId .estado').html(estado);  
  });


*/