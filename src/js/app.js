
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const price=document.getElementsByClassName('price');
  var elements = document.getElementsByClassName('product');
  for(var i=0; i<elements.length; i++) { 
  elements[i].setAttribute('data-price', price[0].innerHTML);
  }
});