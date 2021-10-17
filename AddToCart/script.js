var btn1 = document.getElementById('btn1');
var main = document.getElementById('mainbox');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var cart = document.getElementById('cart1');

btn1.onclick = function(){
  var itm1 = document.createElement('div');
  var txt = document.createTextNode("computer");
  itm1.appendChild(txt);
  cart.appendChild(itm1);
}
btn2.onclick = function(){
  var itm2 = document.createElement('div');
  var txt1 = document.createTextNode("Immortals Of Meluha");
  itm2.appendChild(txt1);
  cart.appendChild(itm2);

}

btn3.onclick = function(){
  var itm3 = document.createElement('div');
  var text3 = document.createTextNode("iPhone 12 Pro Max");
  itm3.appendChild(text3);
  cart.appendChild(itm3);

}
var x = document.createElement("INPUT");
x.setAttribute("type", "number");