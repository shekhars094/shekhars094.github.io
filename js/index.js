function transitionEffect() {
  let firstPageContainer = document.querySelector(".first-page-container");
  let image = document.querySelector(".logo-image");
  image.src = "./images/shashi_logo_light.svg";
  firstPageContainer.style.backgroundColor = "#000000";
  firstPageContainer.style.transition = "background-color 1000ms linear";
}

function removeElement() {
  let firstPageContainer = document.querySelector(".first-page-container");
  firstPageContainer.remove();
}

setTimeout(function () {
  transitionEffect();
}, 1000);

setTimeout(function () {
  let navigation = document.querySelector(".navigation-container");
  let firstPageContainer = document.querySelector(".first-page-container");

  navigation.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => {
    firstPageContainer.remove();
  }, 500);
}, 3000);
