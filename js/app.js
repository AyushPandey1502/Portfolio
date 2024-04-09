let typed = new Typed(".typing", {
  strings: ["", "Frontend Developer", "Graphic Designer", "AI-ML Enthusiast", "Competitive Coder"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
let isDarkMode = false;

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

function applyColors() {
  circles.forEach(function (circle, index) {
    const color = isDarkMode ? brightenColor(colors[index % colors.length]) : colors[index % colors.length];
    circle.style.backgroundColor = color;
  });
}

function brightenColor(hex) {
  const brightnessFactor = 1.5; // Increase brightness by 50%
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Increase brightness
  r = Math.min(Math.round(r * brightnessFactor), 255);
  g = Math.min(Math.round(g * brightnessFactor), 255);
  b = Math.min(Math.round(b * brightnessFactor), 255);

  // Convert RGB back to hex
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
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
applyColors(); // Apply initial colors
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
// document.addEventListener("DOMContentLoaded", function() {
//   const navLinks = document.querySelectorAll('.navigation a');

//   navLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       navLinks.forEach(function(link) {
//         link.classList.remove('active');
//       });

//       this.classList.add('active');
//       const targetId = this.getAttribute('href').substring(1);
//       const targetSection = document.getElementById(targetId);
//       if (targetSection) {
//         event.preventDefault();
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navigation a');
  const sections = document.querySelectorAll('section');

  function makeLinkActive() {
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      if (targetId === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      this.classList.add('active');

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = 40;
        const targetOffset = targetSection.offsetTop - offset;

        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', makeLinkActive);
});


// ==================== Skills Tab Switcher ====================
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach(tabContents => {
      tabContents.classList.remove("skills-active");
    })
    target.classList.add('skills-active')


    tabs.forEach(tab => {
      tab.classList.remove("skills-active");
    })
    tab.classList.add('skills-active')
  })
})

// ========================== Services Modal ===================
const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', () => {
    modal(i);
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    })
  })
})


let mixerProject = mixitup('.project-container', {
  selectors: {
      target: '.project-card'
  },
  animation: {
      duration: 300
  }
});


// ===================================
const linkWork = document.querySelectorAll('.project-item');

function activeWork() {
  linkWork.forEach(item => item.classList.remove('active-project'));
  this.classList.add('active-project');
}

linkWork.forEach(item => item.addEventListener("click", activeWork));



// ====================

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("click", function(e) {
      if (e.target.classList.contains('project-button')) {
          togglePortfolioPopup();
          portfolioItemDetails(e.target.parentElement);
      }
  });

  document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup);

  function togglePortfolioPopup() {
      const portfolioPopup = document.querySelector(".portfolio-popup");
      if (portfolioPopup) {
          portfolioPopup.classList.toggle("open");
      }
  }

  function portfolioItemDetails(portfolioItem) {
    console.log("portfolioItemDetails function called");
    const thumbnailImg = document.querySelector(".pp-thumbnail img");
    console.log("thumbnailImg:", thumbnailImg);
    const subTitleSpan = document.querySelector(".portfolio-popup-subtitle span");
    console.log("subTitleSpan:", subTitleSpan);
    const popupBody = document.querySelector(".portfolio-popup-body");
    console.log("popupBody:", popupBody);

    console.log("portfolioItemDetails function called");
    const thumbnail = document.querySelector(".project-img");
    console.log("thumbnailImg:", thumbnail);
    const subTitle = document.querySelector(".portfolio-title");
    console.log("subTitleSpan:", subTitle);
    const popup= document.querySelector(".portfolio-item-details");
    console.log("popupBody:", popup);

    

      if (thumbnailImg) {
          thumbnailImg.src = portfolioItem.querySelector('.project-img').src;
      }
      if (subTitleSpan) {
          subTitleSpan.innerHTML = portfolioItem.querySelector(".project-title").innerHTML;
      }
      if (popupBody) {
          popupBody.innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
      }
  }
});


function removeScrollWatcher() {
  var scrollWatcherDiv = document.querySelector('.scroll-watcher');
  if (scrollWatcherDiv && window.innerWidth < 1199) {
      scrollWatcherDiv.remove();
  }
}

removeScrollWatcher();
window.addEventListener('resize', removeScrollWatcher);
