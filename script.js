const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");

const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

//control nav-item animation
function navAnimation(d1, d2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${d1}${i + 1}`, `slide-${d2}${i + 1}`);
  });
}

//toggle change class

function toggleNav() {
  // Menu bars cross - hamburger
  menuBars.classList.toggle("change");

  //   toggle menu
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    //   animate show menu
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // animate slide-in nav items
    navAnimation("out", "in");
  } else {
    //animate hide menu
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // animate slide-out nav items
    navAnimation("in", "out");
  }
}

// event listeners

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
