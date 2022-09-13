const media620px = window.matchMedia('(max-width: 620px)');
const productImg = document.querySelector('[data-js="product-img"]');

function changeProductImg() {
  if(media620px.matches)
    productImg.src = '../images/image-product-mobile.jpg';
  return;
}

changeProductImg();