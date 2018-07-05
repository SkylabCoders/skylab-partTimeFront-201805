import React, { Component } from 'react';

import './App.css';
import Letra from '../Letra/letra'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {//this.state es un objeto
      vidas: 5,
      selectedWord: '',
      xWord: [],
      counts: {},
      letter: ''  
    }
   //aqui van los bind
   this.chooseWord = this.chooseWord.bind(this)
   this.xWording = this.xWording.bind(this)
   this.setTodoStatus = this.setTodoStatus.bind(this)
   this.start = this.start.bind(this)

  }

  start(){
    //this.setState({status: ''})
    //this.setState({foundOrNot: ''}) 
    //this.setState({showingContainer: true})  
    this.setState({vidas: 5}) 
    this.setState({xWord: []}) 
    this.setState({counts: {}}) 
    this.setState({letter: ''}) 
  }

  chooseWord(){
    this.start()
    console.log(this.state.vidas)
    console.log('pressed')
    var paises = ['MEXICO','ESPAÑA','ARGENTINA','VENEZUELA','COLOMBIA', 'URUGUAY','FRANCIA','ALEMANIA','SUIZA','SUECIA', 'ITALIA','CROACIA','CANADA','CHINA','JAPON', 'PORTUGAL','BRASIL','CHILE','ANDORRA','HOLANDA'];
    let selectedWord1 = paises[Math.floor((Math.random() * paises.length))];
    this.setState({selectedWord: selectedWord1},this.xWording)
    
  }

  xWording(){
    
    console.log(this.state.selectedWord)
    let selectedWordSplited = this.state.selectedWord.split('');  
    let xWord1 = []
    for(var i=0;i<selectedWordSplited.length;i++){
      xWord1.push('*');//para crear la palabra con * en cada letra
    }
    this.setState({xWord:xWord1})
    console.log(this.state.xWord)
    //$('.showWord').text(xWord.join(''));
    //$('.letra').css('display','block');
    //checkStatus()
    
  }


  setTodoStatus(lifes){   
    this.setState({vidas: lifes})  
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">HANGMAN con JQuery</h1>
        </header>
        <div className="wordToGuess">
        <button className="start" onClick={this.chooseWord} type="button">Para empezar has click!</button>


        <p className="showWord">{this.state.xWord}</p>
       
      </div>
       <Letra vidas={this.state.vidas} selectedWord={this.state.selectedWord} xWord={this.state.xWord} counts={this.state.counts} letter={this.state.letter} onSetStatus = {this.setTodoStatus} start = {this.start} />
       
      </div>
    );
  }
}
/*
var paises = ['MEXICO','ESPAÑA','ARGENTINA','VENEZUELA','COLOMBIA', 'URUGUAY','FRANCIA','ALEMANIA','SUIZA','SUECIA', 'ITALIA','CROACIA','CANADA','CHINA','JAPON', 'PORTUGAL','BRASIL','CHILE','ANDORRA','HOLANDA'];
      var vidas;
      var selectedWord; 
      var xWord;
      var counts;
      var letter;
      var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
      for(var i=0 ; i<abecedario.length ; i++){
        var letter = abecedario[i];
        $('.container').append('<div id="letter-'+letter+'" class="letter"><p>'+letter+'</p></div>')
      }
      
      
      $('.letter').click(function(){
         letter = $(this).text()
         console.log(letter)
         //letter=letter.toLowerCase();
     var acertar = 0;
     for (i=0;i<selectedWord.length;i++){
       if(selectedWord[i]==letter){
         xWord[i]= letter;
         acertar++;
       }   
     }//termina for
     
     if (acertar<1) {
         vidas--; 
         $(this).css("background", "rgb(231, 76, 60)");
         $('.foundOrNot').text('Una ' + letter + ', No has acertado! te quedan ' + vidas + ' vidas!');  
       } else {
         $('.foundOrNot').text('Una ' + letter + ', Has acertado!\n' );
         $(this).css("background", "rgb(39, 174, 96)");
         $('.showWord').text(xWord.join(''));
       }
       checkStatus();
       });
  
  
 
 
   function initHangman(){
     vidas = 5;
     xWord = [];
     counts = {};
 
     console.log( "ready!" );
       selectedWord = paises[Math.floor((Math.random() * paises.length))];
     console.log(selectedWord)
     selectedWord = selectedWord.split('');  
     for(i=0;i<selectedWord.length;i++){
       xWord.push('*');//para crear la palabra con * en cada letra
     }
       
     $('.showWord').text(xWord.join(''));
     $('.letra').css('display','block');
 
     //var h = new Hangman();
   //initHangman();
   checkStatus()
   }
 
   
   function checkStatus(){
     if (xWord.includes('*')){
           if (vidas<1){
             $('.status').show();
             $('.status').html('Game Over :( <br> La palabra era '  + selectedWord.join(''));
             $( ".container" ).hide();
             
             //return
           } else {
             $( ".container" ).show();
             $('.status').hide();
             //$('.another').text('Pon otra letra');
             //$('input').val('');
             
           };
     } else {
       $('.status').show();
       $('.status').text('You win :)');
       $( ".container" ).hide();
      // $('.another').text('');
           //return
     }
   };//fin de check status
 
   $('.start').click(function(){
     initHangman();
   console.log('empieza')
       $( ".container" ).show();
       $('.status').hide();
       $('.foundOrNot').text('');
       $(".letter").css("background", "lightgrey");
     
       //askLetter();
       
       
   });
*/ 
export default App;
