if (document.querySelector(".modal-map")) {
  var link = document.querySelector(".contacts-button");
  var mailPopup = document.querySelector(".modal-mail");
  var mailClose = document.querySelector(".mail-close");

  var form = document.querySelector(".mail-form");
  var userName = document.querySelector("[name=user-name]");
  var userEmail = document.querySelector("[name=user-email]");
  var userComment = document.querySelector("#modal-text");

  var storageSupport = true;
  var nameStorage = "";
  var emailStorage = "";

  var mapLink = document.querySelector(".contacts-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".close-map");

  try {
    nameStorage = localStorage.getItem("userName");
    emailStorage = localStorage.getItem("userEmail");
  } catch (err) {
    storageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailPopup.classList.add("modal-show");
    if (nameStorage) {
      userName.value = nameStorage;
      userComment.focus();
    } else {
      userName.focus();
    }
    if (emailStorage) {
      userEmail.value = emailStorage;
    }
  });

  mailClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailPopup.classList.remove("modal-show");
    mailPopup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      mailPopup.classList.remove("modal-error");
      mailPopup.offsetWidth = mailPopup.offsetWidth;
      mailPopup.classList.add("modal-error");
    } else {
      if (storageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mailPopup.classList.contains("modal-show")) {
        mailPopup.classList.remove("modal-show");
        mailPopup.classList.remove("modal-error");
      }
    }
  });

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
} else {
  var catalogPopup = document.querySelector(".catalog-modal");
  var catalogClose = catalogPopup.querySelector(".close-modal");
  var buy = document.querySelectorAll(".actions-buy"),
    index, button;

  for (index = 0; index < buy.length; index++) {
    button = buy[index];
    button.addEventListener("click", clickHandler);
  }

  function clickHandler(event) {
    event.preventDefault();
    catalogPopup.classList.add("modal-show");
  };

  catalogClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (catalogPopup.classList.contains("modal-show")) {
        catalogPopup.classList.remove("modal-show");
      }
    }
  });  
};