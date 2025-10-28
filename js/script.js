document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
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
    slidesPerView: 3,
    spaceBetween: 0,
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

  // Isotope Jquery

  // var elem = document.querySelector(".grid-card");

  // var iso = new Isotope(elem, {
  //   itemSelector: ".enrollment-card",
  //   layoutMode: "fitRows",
  // });

  // document.querySelectorAll(".button-slider").forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     const filterValue = btn.getAttribute("data-filter");
  //     iso.arrange({ filter: filterValue });
  //     btn.classList.toggle("active-btn");
  //   });
  // });
});
























// Now Isotope runs only after images are fully loaded
window.addEventListener("load", function () {
  var elem = document.querySelector(".grid-card .row");

  var iso = new Isotope(elem, {
    itemSelector: ".enrollment-card",
    layoutMode: "fitRows",
  });

  document.querySelectorAll(".button-slider").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });

      document
        .querySelectorAll(".button-slider")
        .forEach((b) => b.classList.remove("active-btn"));
      btn.classList.add("active-btn");
    });
  });

  window.addEventListener("resize", () => {
    iso.layout();
  });
});
























// Cursor Initialization

const cursor = document.querySelector(".cursor");
const anchor = document.querySelectorAll("a");
const cursorBtn = document.querySelectorAll("button");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
});

anchor.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

cursorBtn.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// Modal Input Label behaviour

document.querySelectorAll(".modal-input").forEach((input) => {
  const formName = input.closest(".modal-inputBox").querySelector(".form-name");

  input.addEventListener("focus", () => {
    formName.classList.add("hide-label");
  });

  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      formName.classList.remove("hide-label");
    }
  });
});

// Modal Gender Selection
const input = document.getElementById("modal-gender");
const dropdown = document.querySelector(".gender-dropdown");

input.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

dropdown.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    input.value = item.dataset.value;
    dropdown.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".modal-inputBox")) {
    dropdown.style.display = "none";
  }
});

document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.closest(".password-wrapper").querySelector("input");
    const icon = button.querySelector("i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});
