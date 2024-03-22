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
