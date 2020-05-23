


var intro = new XMLHttpRequest(); 

intro.onload = function(){
  if(intro.status == 200){
    document.getElementById('intro-home').innerHTML += intro.responseText;
  } 
}
intro.open('GET', 'intro.htm', true);   
intro.send(null); 
