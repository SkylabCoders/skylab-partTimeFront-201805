import React, { Component } from 'react';

import './letra.css';


class Letra extends Component {

  constructor(props){
    super(props);
    this.state = {//this.state es un objeto
      status: '',
      foundOrNot: '',
    }
   //aqui van los bind
  this.createAbc = this.createAbc.bind(this)
  this.getLetterClicked = this.getLetterClicked.bind(this)
  }

  createAbc(){
    var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for(var i=0 ; i<abecedario.length ; i++){
      var letter = abecedario[i];
      //$('.container').append('<div id="letter-'+letter+'" class="letter"><p>'+letter+'</p></div>')
      
    }
    console.log('hola')
  }

  getLetterClicked(event){
    console.log('click a')
    let letterClicked = event.currentTarget.textContent
    console.log(letterClicked)
    //this.props.onSetStatus(this.props.letter,letterClicked)
    let acertar = 0;
     for (let i=0;i<this.props.selectedWord.length;i++){
       if(this.props.selectedWord[i]==letterClicked){
        console.log(this.props.xWord)
        let xWord1 =  this.props.xWord
        xWord1[i]= letterClicked;
         acertar++;
         this.setState({xWord: xWord1})
       }   
       console.log(this.props.xWord)
       
     }//termina for
     
     if (acertar<1) {
       let vidas1 = this.props.vidas-1
       
      this.props.onSetStatus(vidas1); 
      console.log(this.props.vidas)
      let result = 'fallaste, una '+letterClicked
      this.setState({foundOrNot:result })
      console.log(this.state.foundOrNot)
      //console.log('fallaste, una ' + letterClicked)
      
      /*$(this).css("background", "rgb(231, 76, 60)");
      $('.foundOrNot').text('Una ' + letter + ', No has acertado! te quedan ' + vidas + ' vidas!');  
     */} else {
       let result = 'acertaste una '+letterClicked
       this.setState({foundOrNot:result })
       console.log(this.state.foundOrNot)
      /*$('.foundOrNot').text('Una ' + letter + ', Has acertado!\n' );
      $(this).css("background", "rgb(39, 174, 96)");
      $('.showWord').text(xWord.join(''));*/
    }
    
    //checkStatus();
    //});
    if (this.props.xWord.includes('*')){
      if (this.props.vidas<1){
        //$('.status').show();
        //$('.status').html('Game Over :( <br> La palabra era '  + selectedWord.join(''));
        //$( ".container" ).hide();
        console.log('has perdido ya no tienes vidas, la palabra era '+ this.props.selectedWord)
        return
      } //else {
        //$( ".container" ).show();
        //$('.status').hide();
        
      //};
} else {
  //$('.status').show();
  //$('.status').text('You win :)');
  //$( ".container" ).hide();
 console.log('has ganado')
}
    console.log(this.props.selectedWord)
  }

  render() {
    //this.createAbc()
    return (
      <div className="letra container" id='myContainer'>
         <p className="foundOrNot">{this.state.foundOrNot}</p>
        <p className="status"></p>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>A</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>B</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>C</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>D</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>E</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>F</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>G</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>H</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>I</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>J</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>K</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>L</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>M</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>N</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>Ñ</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>O</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>P</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>Q</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>R</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>S</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>T</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>U</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>V</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>W</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>X</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>Y</p></div>
        <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>Z</p></div>
       
      </div>
    );
  }
}

export default Letra;
