// Promises
var p = new Promise((resolve, reject)=>{
    console.log("INI PROMISE")
});

// Acepta funcion y numero
setTimeout(()=>{
    console.log();
},1000);
// nos devuelve un handler para que podamos manejarlo
$('#cancel-timeout').click(()=>{
    clearTimeout(t);
    reportStatus('timeout','cancelled');
});


// setInterval()
let intervalCounter = 0;
const i = setInterval(()=>{
    reportStatus('interval',`running - ${intervalCounter++}`);
},10);


<html lang="en">
<head>
  <meta charset="utf-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timeout</title>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        timeout status <span id="timeout-status"></span>
        
    </div>
    <button id="cancel-timeout">cancel timeout</button>
    <br/>
    <br/>
    <br/>
    <div class="container">
        Interval status <span id="interval-status"></span>
    </div>
    <button id="cancel-interval">cancel interval</button>
    <script >
        const reportStatus = (type, status) => {
            $(`#${type}-status`).html(status);
        }

        reportStatus('timeout','running');
        reportStatus('interval','running');

        {/* timeout */}
        const t = setTimeout(()=>{
            reportStatus('timeout','end');
        },5000);

        $('#cancel-timeout').click(()=>{
            clearTimeout(t);
            reportStatus('timeout','cancelled');
        });

        {/* // interval */}
        let intervalCounter = 0;
        const i = setInterval(()=>{
            reportStatus('interval',`running - ${intervalCounter++}`);
        },10);
        $('#cancel-interval').click(()=>{
            clearInterval(i);
            reportStatus('interval','stopped');
        });
    </script>

</body>
</html>


<!-- 
Your last JavaScript (Node) code is saved below:

/*
console.log("STEP 1");

var p = new Promise((resolve, reject)=>{
  console.log("INI PROMISE")
  
});


console.log("STEP 2");

p.then((data)=>{
  console.log("accepted", data);
  
},()=>{
  console.log("rejected");
  
});

console.log("STEP 3");
*/


//------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timeout</title>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>

<body>
    <div class="container1">
        Promise status <span id="promise-status"></span>
        <input id="beer-id" />
        <button id="get-beer">Ger Beer</button>
        <div class="container"></div>
    </div>
    <button id="cancel-promise">cancel promise</button>
    <script >
        const reportStatus = (type, status) => {
            $(`#${type}-status`).html(status);
        }

        $('#get-beer').click(()=>{
          const p = new Promise((resolve, reject)=>{
            const beerId = $('#beer-id').val();
            
            if(!/\d/.test(beerId)){
              reject("not a valid id");
              return;
            }

            reportStatus('promise', 'getting Beer');
            $.ajax({
              url: `https://api.punkapi.com/v2/beers/${beerId}`,
              success: (beers)=>{
                reportStatus('promise', 'data arrived');

                if(beers.length !== 1){
                  reject('not a single beer');
                }else{
                  resolve(beers[0]);
                }
              },
              error: (e,e2,e3) => {
                reject(e.responseJSON.error);
              }
            });
          });
      
          p.then((beer)=>{
            reportStatus('promise', 'Beer OK');
            $('.container').append(
              `<div class="beer">
                <div class="beer-image" style="background-image: url(${beer.image_url})"></div>
                <div class="beer-info">
                  <h1>${beer.name}</h1>
                  <h2>${beer.tagline}</h2>
                <div>
            </div>`);
            
          },(reason)=>{
            reportStatus('promise', reason);
          })
          
          reportStatus('promise', 'end click');
        });
        
    </script>

</body>
</html>


// ----------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timeout</title>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>

<body>
    <div class="container1">
        Promise status <span id="promise-status"></span>
        <input id="beer-id" />
        <button id="get-beer">Ger Beers</button>
        <div id="container-b1"></div>
        <div id="container-b2"></div>
    </div>
    <button id="cancel-promise">cancel promise</button>
    <script >
        const reportStatus = (type, status) => {
            $(`#${type}-status`).html(status);
        }

        $('#get-beer').click(()=>{
          let promises = [];

          const p = new Promise((resolve, reject)=>{
            const beerId = $('#beer-id').val();
            
            if(!/\d/.test(beerId)){
              reject("p is not a valid id");
              return;
            }

            reportStatus('promise', 'getting Beer');
            $.ajax({
              url: `https://api.punkapi.com/v2/beers/${beerId}`,
              success: (beers)=>{
                //reportStatus('promise', 'data arrived');

                if(beers.length !== 1){
                  reject('p is not a single beer');
                }else{
                  beers[0].promiseId = "p";
                  resolve(beers[0]);
                }
              },
              error: (e,e2,e3) => {
                reject(`p1 ${e.responseJSON.error}`);
              }
            });
          });

          promises.push(p);

          const p2 = new Promise((resolve, reject)=>{
            let beerId = $('#beer-id').val();
            
            if(!/\d/.test(beerId)){
              reject("p2 is not a valid id");
              return;
            }

            beerId++;

            reportStatus('promise', 'getting Beer');
            $.ajax({
              url: `https://api.punkapi.com/v2/beers/${beerId}`,
              success: (beers)=>{
                //reportStatus('promise', 'data arrived');

                if(beers.length !== 1){
                  reject('p2 is not a single beer');
                }else{
                  beers[0].promiseId = "p2";
                  resolve(beers[0]);
                }
              },
              error: (e,e2,e3) => {
                reject(`p2 ${e.responseJSON.error}`);
              }
            });
          });
          promises.push(p2);

          /* // All -> espera a que todos los resultados lleguen

          Promise.all(promises).then((results) => {
            results.forEach((r,i)=>{
              reportStatus('promise', 'Beer OK');
              $(`#container-b${i+1}`).html(
                `<div class="beer">
                  <div class="beer-image" style="background-image: url(${r.image_url})"></div>
                  <div class="beer-info">
                    <h1>${r.name}</h1>
                    <h2>${r.tagline}</h2>
                  <div>
              </div>`);
            })
          }, (reason)=>{
            reportStatus('promise', reason);
            $(`#container-b1, #container-b2`).html('')
          });

          reportStatus('promise', 'end click');
          */
        
          // Race ->  te dice cual acaba primero
          Promise.race(promises).then((result) => {
            reportStatus('promise', `La promesa ganadora es ${result.promiseId}`);
          });
        });
        
    </script>

</body>
</html>
