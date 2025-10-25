// First Slide

let swiper = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    1250: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
// Second Slide

let swiper2 = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Third Slide

let swiper3 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

// About Page
// first Swiper

let swiper4 = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".pagination-2",
    clickable: true,
  },
});

// Second Swiper

let swiper5 = new Swiper(".mySwiper4", {
  slidesPerView: 8,
  spaceBetween: 0,
  loop: false,
});

// Isotope Jquery

// var elem = document.querySelector(".enrollment-row");
// let strength = document.querySelector(".strngth");

// var iso = new Isotope(elem, {
//   itemSelector: ".target-line",
//   layoutMode: "fitRows",
// });

// strength.addEventListener("click", () => {
//   iso.arrange({ filter: ".strngth" });
// });
