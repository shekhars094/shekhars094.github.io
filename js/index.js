window.userData = {
  lightMode: true,
};

function transitionEffect() {
  let firstPageContainer = document.querySelector(".first-page-container");
  let image = document.querySelector(".logo-image");
  image.src = "./images/shashi_logo_light.svg";
  firstPageContainer.style.backgroundColor = "#000000";
  firstPageContainer.style.transition = "background-color 1000ms linear";
}

function darkModeToggle() {
  if (window.userData.lightMode) {
    let body = document.querySelector("body");
    let navLogo = document.querySelector(".nav-logo");
    navLogo.src = "./images/shashi_logo_light.svg";
    body.style.backgroundColor = "#000000";
    body.style.color = "#ffffff";
    window.userData.lightMode = false;
  } else {
    let body = document.querySelector("body");
    let navLogo = document.querySelector(".nav-logo");
    navLogo.src = "./images/shashi_small_logo_dark.svg";
    body.style.color = "#000000";
    body.style.backgroundColor = "#ffffff";
    window.userData.lightMode = true;
  }
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
