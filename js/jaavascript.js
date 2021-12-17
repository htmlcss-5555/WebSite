
var icon1 = document.getElementById("icon");
icon1.onclick = function change() {
    var element = document.body;
    element.classList.toggle("dark-theme");
  
    if (element.classList.contains("dark-theme")) {
   //if class was added to body
      localStorage.setItem("body", "dark-theme");
   //save information in "background" localStorage variable, use dark-mode class name
    } else {
      localStorage.setItem("body", "");
  //if class was removed set background" localStorage variable to null
    }
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
//when loading document
    var body = localStorage.getItem("body");
  // get localStorage var background
    if (body) {
  // if its not null and empty
      document.body.className += body;
  //add class to body
    }
  });
