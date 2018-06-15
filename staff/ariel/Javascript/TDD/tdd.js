

function Counter(){
    this.value = 0;
    
    this.count = function(){
      this.value += 1;
    }
  }
  
  function testCounterFuction(){
    var error = false;
    var c1 = new Counter();
    var c2 = new Counter();
    
    c1.count();
    
    if(c1.value != 1 && c2.value != 0){
      error = true;
    }
    
    c1.count();
    c2.count();
    if(c1.value != 2 && c2.value != 1){
      error = true;
    }
    
    return error;
  }
  
  
  
  var e = testCounterFuction()
  
  if(e){
    console.log("HAY ERROR! FATALLLLL");
  }else{
    console.log("TODO PERFECT");
  }