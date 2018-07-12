import React, { Component } from 'react';

import './letra.css';


class Letra extends Component {

  constructor(props){
    super(props);
    this.state = {//this.state es un objeto
      status: '',
      foundOrNot: '',
      showingContainer: true,
      letterChosen: ''
    }
   //aqui van los bind
  this.getLetterClicked = this.getLetterClicked.bind(this)
  this.start = this.start.bind(this)

}

 

  start(){
    if(this.props.vidas == 5){
      var abc = document.getElementById("myContainer");
        //abc.style.display = "block"
        var foundedText = document.getElementById("founded");
        //foundedText.style.display = "block"
    } 
  }

  getLetterClicked(event){
    console.log('click a')
    //let letterClicked = this.state.letterChosen
    let letterClicked = event.currentTarget.textContent
    console.log(letterClicked)
    this.props.settingLetter(letterClicked)
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
      console.log(result)
      //console.log('fallaste, una ' + letterClicked)
      
      /*$(this).css("background", "rgb(231, 76, 60)");
      $('.foundOrNot').text('Una ' + letter + ', No has acertado! te quedan ' + vidas + ' vidas!');  
     */} else {
       let result = 'acertaste una '+letterClicked
       this.setState({foundOrNot:result })
       console.log(result)
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
        //console.log('has perdido ya no tienes vidas, la palabra era '+ this.props.selectedWord)
        let statusText = 'has perdido ya no tienes vidas, la palabra era '+ this.props.selectedWord
        this.setState({status:statusText })
        console.log(statusText)
        var abc = document.getElementById("myContainer");
        abc.style.display = "none"
        var foundedText = document.getElementById("founded");
        foundedText.style.display = "none"
        return
      } //else {
        //$( ".container" ).show();
        //$('.status').hide();
        
      //};
} else {
  //$('.status').show();
  //$('.status').text('You win :)');
  //$( ".container" ).hide();
  //console.log('has ganado')
  let statusText = 'has ganado'
        this.setState({status:statusText })
        console.log(statusText)
        var abc = document.getElementById("myContainer");
        abc.style.display = "none"
        var foundedText = document.getElementById("founded");
        foundedText.style.display = "none"
}
    console.log(this.props.selectedWord)
  }

  render() {
   
    this.start()
    return (
      
          <div onClick={this.getLetterClicked} id="letter-'+letter+'" className="letter"><p>{this.props.letter2}</p></div>
     
    );
  }
}

export default Letra;
