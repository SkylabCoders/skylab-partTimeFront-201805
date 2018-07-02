function generateABC(){

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lettersArr = [];
    let lettersObj = {}

    for(var i=0 ; i<letters.length; i++){
      lettersArr[i] = letters[i];
      Object.defineProperty(lettersObj, 'id', {
        value: 2}
        )
    }
      


    console.log('Letters Array: ', lettersArr)
    console.log('');
    console.log('Objeto:', lettersObj);

  };


generateABC();