// Desktop Dropdown Menu 
const toggleIcon = document.querySelector(".menu-w-dropdown");
const sol_dropdown_container = document.querySelector(
  ".solutions__dropdown__content-container"
);

toggleIcon.addEventListener("click", () => {
  sol_dropdown_container.classList.toggle("w--open");
});

// Mobile Menu
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("w--open");
});

// Typewriter effect
document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = [
    "making decisions",
    "selecting leaders",
    "educating voters",
    "running contests",
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("#typing-effect-dynamic-text").innerHTML =
        "The Ranked choice platform for" +
        " " +
        text.substring(0, i + 1) +
        '<span aria-hidden="true" class="underline"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

// Carousel
let slideIndex = 2;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

function plusSlides(n) {
  console.log(n);
  showSlides((slideIndex += n));
}
const arrowLeft = document.querySelector(".testimonial-arrow-left");
const arrowRight = document.querySelector(".testimonial-arrow-right");

arrowLeft.addEventListener("click", () => {
  plusSlides(-1);
});
arrowRight.addEventListener("click", () => {
  plusSlides(1);
});
console.log(arrowLeft, arrowRight);
