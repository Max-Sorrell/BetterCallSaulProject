/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos == currentScrollPos) {
    document.getElementById("saulHeaderID").style.top = "-100px";
  } else {
    document.getElementById("saulHeaderID").style.top = "0px";
  }
}

var prevScrollPos = window.pageYOffset;
window.onload = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos == currentScrollPos) {
    document.getElementById("saulHeaderID").style.top = "-100px";
  } else {
    document.getElementById("saulHeaderID").style.top = "0px";
  }
}


// exact same code as above except it means it works when the page is loaded 





/*js code for curtain*/


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}