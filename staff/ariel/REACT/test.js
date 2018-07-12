
function getWords(){

  let frutas = ['manzana','banana','pera','fresa','cereza','anana','tomate','naranja','clementina','chirimoya','pomelo','melocoton', 'ciruela', 'lichi','melon', 'sandia', 'mango', 'papaya', 'higos', 'maracuya', 'guanabana' ];
  let indice = Math.round(Math.random()*20);
  let fruta = frutas[indice];
  let frutaArr = [];
  let incognitaArr = [];


  for (let k=0; k<fruta.length; k++) {
  frutaArr[k] = fruta[k];
  incognitaArr[k] = " _ ";
  };


}

getWords();
