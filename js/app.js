let typed = new Typed(".typing", {
  strings: ["", "Frontend Developer", "Graphic Designer", "AI-ML Enthusiast", "Competitive Coder"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();


// ====================== Page Loader Start =====================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.main-container').style.display = 'none';
  
  setTimeout(function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
    document.querySelector('.content').style.display = 'block';
  }, 1500);
});
// ====================== Page Loader End =====================


// =============== Section Active Toggler Start ==================
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navigation a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      
      this.classList.add('active');
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// =============== Section Active Toggler End ==================


// =================== Section Changing Animation Start ==================

