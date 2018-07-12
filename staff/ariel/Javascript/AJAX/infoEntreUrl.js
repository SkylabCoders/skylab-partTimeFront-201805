

// Este código trae lo que viene luego del .html en la url y lo organiza pra 
// poder utilizarla como parámetro en el ajax.


var search = window.location.search;
search = search.substring(1);
search = search.split("&");

var params = {};
search.forEach((s) => {
  var temp = s.split('=');
  params[temp[0]] = temp[1];
})



window.open(`beers-detail.html?beer=${id}&template=2`);