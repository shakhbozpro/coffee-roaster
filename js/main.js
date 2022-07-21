var elOpenModalBtn = document.querySelector(".js-modal-open");
var elOpenModalTooBtn = document.querySelector(".js-modal-open-too");
var elOverlay = document.querySelector(".overlay");
var elOverlayModal = document.querySelector(".overlay-modal");
var elCloseModalBtn = document.querySelector(".js-modal-close");

elOpenModalBtn.addEventListener("click" , function(){
   elOverlay.classList.add("modal-open");
})

elOpenModalTooBtn.addEventListener("click" , function(){
   elOverlay.classList.add("modal-open");
})

elCloseModalBtn.addEventListener("click" , function(){
   elOverlay.classList.remove("modal-open");
})