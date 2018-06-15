 $(function(){
                
                function generateAbc(){
                    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    for(var i=0 ; i<letters.length ; i++){
                        $('.abc').append('<div class="letterBox" data-letter="'+letters[i]+'"><p>'+letters[i]+'</p</div>')
                    };
                };

                generateAbc();


                $('.sup-button').on('click', function() {
                    
                    var frutas = ['manzana','banana','pera','fresa','cereza','anana','tomate','naranja','clementina','chirimoya','pomelo','melocoton', 'ciruela', 'lichi','melon', 'sandia', 'mango', 'papaya', 'higos', 'maracuya', 'guanabana' ];
                    var indice = Math.round(Math.random()*20);
                    var fruta = frutas[indice];
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
                    $('#palabra').html(frutaArr);      

                    function getIncognita(y){                       
                    
                        for (var i=0; i<y.length; i++){

                            incognitaArr[i]= '   _  ';
                        };

                        return incognitaArr
                                   
                    };
                    incognitaArr = getIncognita(fruta);
                    $('.incognita').html(incognitaArr);
                   
                    
                    function vidas(x){
                        var vidas = Math.round(x.length * 1.5);
                        return vidas
                    };
                    lifes = vidas(fruta); 

                    function vidasArr(x){
                        for (var q=0; q<x.length; q++){
                            $('.vidas').append('<i class="fas fa-child"></i>'); 
                        };
                    };
                    vidasArr(fruta);


                    $('.letterBox').on('click', function() {

                        guess = $('.letterBox').click(function(){
                            console.log($(this).attr("data-letter"))
                        })

                  

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

                            

                    
                    });
                    

                });

            });



            /*

            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
undefined
for(var i=0 ; i<letters.length ; i++){
	$('.abc').append('<div class="letterBox" data-letter="'+letters[i]+'"><p>'+letters[i]+'</p</div>')
}
jQuery.fn.init [section.abc, prevObject: jQuery.fn.init(1)]
$('.letterBox').click(function(){
	console.log($(this).attr("data-letter"))
})

*/