var writeUsLink = document.querySelector(".btn-write-us");
var writeUsPopup = document.querySelector(".modal-content-write-us");

if (writeUsPopup) {
  var writeUsClose = writeUsPopup.querySelector(".modal-content-close");
  var form = writeUsPopup.querySelector("form");
  var userName = writeUsPopup.querySelector("[name=user-name]");
  var userMail = writeUsPopup.querySelector("[name=user-mail]");
  var storage = localStorage.getItem("userName");
}

if (writeUsLink) {
  writeUsLink.addEventListener("click", function(event) {
    event.preventDefault();
    writeUsPopup.classList.add("modal-content-show");

    if (storage) {
      userName.value = storage;
      userMail.focus();
    } else {
      userName.focus();
    }
  });
}

if (writeUsClose) {
  writeUsClose.addEventListener("click", function(event) {
    event.preventDefault();
    writeUsPopup.classList.remove("modal-content-show");
    writeUsPopup.classList.remove("modal-error");
  });
}

if (form) {
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
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-content-show")) {
      writeUsPopup.classList.remove("modal-content-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-content-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-content-close");
}

if (mapOpen) {
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});

var buyLinks = document.querySelectorAll(".btn-buy");
var buyPopup = document.querySelector(".modal-content-basket");

if (buyPopup) {
  var buyClose = buyPopup.querySelector(".modal-content-close");
}

if (buyClose) {
  buyClose.addEventListener("click", function (event) {
    event.preventDefault();
    buyPopup.classList.remove("modal-content-show");
  });
}

if (buyLinks) {
  for (var i = 0; i < buyLinks.length; i++) {
    buyLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      buyPopup.classList.add("modal-content-show");
    })
  };
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (buyPopup.classList.contains("modal-content-show")) {
      buyPopup.classList.remove("modal-content-show");
    }
  }
});
