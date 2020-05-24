
var nav = new XMLHttpRequest(); 

nav.onload = function(){
  if(nav.status == 200){
    document.getElementsByTagName('nav')[0].innerHTML += nav.responseText;
  } 
}
nav.open('GET', '../../nav.htm', true);   
nav.send(null); 


var idat = new XMLHttpRequest(); 

idat.onload = function(){
  if(idat.status == 200){
    document.getElementById('index-alfabet').innerHTML += idat.responseText;
  } 
}
idat.open('GET', '../../alfabet/alfabet-kuno/idat.htm', true);   
idat.send(null); 