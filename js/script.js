var writeUsLink = document.querySelector(".btn-write-us");
var writeUsPopup = document.querySelector(".modal-content-write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-content-close");
var form = writeUsPopup.querySelector("form");
var userName = writeUsPopup.querySelector("[name=user-name]");
var userMail = writeUsPopup.querySelector("[name=user-mail]");
var storage = localStorage.getItem("userName");


writeUsLink.addEventListener("click", function(event) {
  event.preventDefault();
  writeUsPopup.classList.add("modal-content-write-us-show");

  if (storage) {
    userName.value = storage
    userMail.focus();
  } else {
    userName.focus();
  }
  userName.focus();
});

writeUsClose.addEventListener("click", function(event) {
  event.preventDefault();
  writeUsPopup.classList.remove("modal-content-write-us-show");
  writeUsPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !userMail.value) {
    event.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("userName", userName.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-content-write-us-show")) {
      writeUsPopup.classList.remove("modal-content-write-us-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-map-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-map-show")) {
      mapPopup.classList.remove("modal-content-map-show");
    }
  }
});

var buyLinks = document.querySelectorAll(".btn-buy");
for (var i = 0; i < buyLinks.length; i++) {
  buyLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    buyPopup.classList.add("modal-content-basket-show");
  })
};

var buyPopup = document.querySelector(".modal-content-basket");
var buyClose = buyPopup.querySelector(".modal-content-close");

buyClose.addEventListener("click", function (event) {
  event.preventDefault();
  buyPopup.classList.remove("modal-content-basket-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (buyPopup.classList.contains("modal-content-basket-show")) {
      buyPopup.classList.remove("modal-content-basket-show");
    }
  }
});
