var link = document.querySelector(".contacts-button");
var mailPopup = document.querySelector(".modal-mail");
var mailClose = mailPopup.querySelector(".mail-close");

var form = mailPopup.querySelector(".mail-form");
var userName = mailPopup.querySelector("[name=user-name]");
var userEmail = mailPopup.querySelector("[name=user-email]");
var userComment = mailPopup.querySelector("#modal-text");

var storageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
nameStorage = localStorage.getItem("userName");
emailStorage = localStorage.getItem("userEmail");
} catch {
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
})