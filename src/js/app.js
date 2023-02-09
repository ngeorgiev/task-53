import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var productDiv = document.querySelector('.product');
  var productPrice = document.querySelectorAll('p')[1].innerHTML;
  var span = document.createElement('span');
  span.class = "data-price";
  span.className = "data-price";
  span.innerText = productPrice;
  productDiv.setAttribute('data-price', productPrice);
  productDiv.appendChild(span);

});
