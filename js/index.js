function transitionEffect() {
  let firstPageContainer = document.querySelector(".first-page-container");
  let image = document.querySelector(".logo-image");
  image.src = "./images/shashi_logo_light.svg";
  firstPageContainer.style.backgroundColor = "#000000";
  firstPageContainer.style.transition = "background-color 1000ms linear";
}

setTimeout(transitionEffect, 1000);
