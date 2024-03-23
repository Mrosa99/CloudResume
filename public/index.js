const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

// Collapse navbar after clicking on navbar-link item
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

// Offsets scroll to better align with section
$("body")
  .attr({
    "data-spy": "scroll",
    "data-target": "#navbarContent",
  })
  .scrollspy({
    offset: 300,
  });

var i = 0;
var txt = "Hi, I'm Milton";
var speed = 100;
console.log(txt);

document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name-typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
