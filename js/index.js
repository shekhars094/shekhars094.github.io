function transitionEffect() {
  let firstPageContainer = document.querySelector(".first-page-container");
  let image = document.querySelector(".logo-image");
  image.src = "./images/shashi_logo_light.svg";
  firstPageContainer.style.backgroundColor = "#000000";
  firstPageContainer.style.transition = "ease 2s #000000";
}

setTimeout(transitionEffect, 2000);
