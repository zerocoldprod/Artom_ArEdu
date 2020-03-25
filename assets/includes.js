'use strict';

// Fn : Include HTML Partials
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("HZ-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("HZ-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

includeHTML();

// Fn : Enter Fullscreen Mode
function fullscreen(){
  if (document.fullscreenElement) {
      // fullscreen is activated
      document.exitFullscreen();
  } else {
      // fullscreen is cancelled
      document.documentElement.requestFullscreen();
  }
}

var modalContent,modalFooter,modalBefore,btnOpenModal,spanCloseModal;
setTimeout(function(){

  // Get the button that opens the modal
  btnOpenModal = document.getElementById("ar-modal-show");

  // Get the <span> element that closes the modal
  spanCloseModal = document.getElementsByClassName("close")[0];
}, 0);


// When the user clicks on the button, open the modal
function showModal() {
  document.getElementById("ar-modal-content").classList.remove("bounceOutUp");
  document.getElementById("ar-modal-before").classList.add("bounceOutUp");
  document.getElementById("ar-modal-content").style.display = "block";
  document.getElementById("ar-modal-footer").style.display = "block";
  document.getElementById("ar-modal-before").style.display = "none";
  document.getElementById("ar-modal-show").style.display = "none";
  document.getElementById("hero-home").classList.add("overlayed-ar");
  $('.single-item').slick();
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  document.getElementById("ar-modal-before").classList.remove("bounceOutUp");
  document.getElementById("ar-modal-content").classList.add("bounceOutUp");
  document.getElementById("ar-modal-content").style.display = "none";
  document.getElementById("ar-modal-footer").style.display = "none";
  document.getElementById("ar-modal-before").style.display = "block";
  document.getElementById("ar-modal-show").style.display = "block";
  document.getElementById("hero-home").classList.remove("overlayed-ar");
}

function focusMode(){
  fullscreen();
  $('header,footer').toggle();
  $('#overlayFocusMode').toggle();
}