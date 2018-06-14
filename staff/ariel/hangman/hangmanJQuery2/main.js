 $(function(){

                $('.sup-button').on('click', function() {
                    
                    var frutas = ['manzana','banana','pera','fresa','cereza','anana','tomate','naranja','clementina','chirimoya','pomelo','melocoton', 'ciruela', 'lichi','melon', 'sandia', 'mango', 'papaya', 'higos', 'maracuya', 'guanabana' ];
                    var indice = Math.round(Math.random()*20);
                    var fruta = frutas[indice];
                    // $('#palabra').html(fruta);     //--> TEST OK
                    // $('#guess').html(fruta.length); //--> TEST OK
                    var frutaArr = [];
                    var incognitaArr = [];
                    var lifes = 0;
                    var lifesArr = [];
                    var guess = '';

                    function fruitToArray(x){
                        for (var k=0; k<x.length; k++){

                            frutaArr[k]=x[k];
                        }

                        return frutaArr
                    }; 
                    frutaArr = fruitToArray(fruta)
                    $('#palabra').html(frutaArr);      // ---> TEST OK
                    //$('#guess').html(typeof frutaArr);   // ---> TEST OK

                    function getIncognita(y){                       
                    
                        for (var i=0; i<y.length; i++){

                            incognitaArr[i]= '   _  ';
                        };

                        return incognitaArr
                                   
                    };
                    incognitaArr = getIncognita(fruta);
                    $('.incognita').html(incognitaArr);
                    //$('#guess').html(typeof incognitaArr);   // ---> TEST OK
                    
                    function vidas(x){
                        var vidas = Math.round(x.length * 1.5);

                        return vidas
                    };

                    function vidasArr(x){
                        for (var q=0; q<x.length; q++){
                            $('.vidas').append('<i class="fas fa-child"></i>'); //<i id="fas fa-female"></i>'); 
                        };
                    };

                    lifes = vidas(fruta); 
                    vidasArr(fruta);

                    //lifesArr = vidasArr(fruta);
                    //$('.vidas').html(lifesArr); 
                    //$('.lifes').html(lifes);   

                    $('.letterBox').on('click', function() {
                        var letraElegida = 
                        $('#test').attr('id')

                        guess = $('.letterBox').val();
                        $('.letter').val('');
                        //$('#guess').html(guess); //  ---> Test OK

                        //while (lifes > 0) {

                            evaluateLetter(guess);

                            function evaluateLetter(x) {
                                var cont = 0;

                                for (var j=0; j<frutaArr.length; j++){

                                    if (x === frutaArr[j]){
                                        incognitaArr[j] = x;
                                        cont = cont+1;             // ---> indica si se ha acertado (>0) o no (=0). 
                                    };
                                };
                                    
                                if (cont!= 0) {    // ---> guess está en la fruta

                                    if ( incognitaArr.join() === frutaArr.join() ) {

                                        return $('#board').html('FELICITACIONES HAS GANADO!!!');

                                    } else {
                                        $('#board').html('Felicitaciones la letra "' + x + '" está en la palabra.');
                                        $('.incognita').html(incognitaArr);
                                        return lifes
                                    };
                                };
                                
                                if (cont == 0 ) {   // ---> guess NO está a fruta

                                    lifes = lifes - 1;
                                    $('.vidas').remove('<i class="fas fa-child"></i>');

                                    //$('.lifes').html(lifes);
                                    $('#vidas').html(lifesArr);  

                                    if (lifes == 0 ){
                                        
                                        return $('#board').html('GAME OVER\n\nLa fruta era: ' + fruta);

                                    } else {
                                        $('#board').html('La letra "' + x + '" no se encuentra en la palabra');
                                        return lifes
                                    };
                                };  
                                
                                
                                
                                return lifes
                            };

                            
                        //};
                    
                    });
                    

                });

            });