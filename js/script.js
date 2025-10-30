document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
  });
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

  // Isotope JS Initialize
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

  // Workout Page dropdown list

  // // Trainer Button
  // const trainerButton = document.querySelector(".trainer-btn");
  // const trainerList = document.querySelector(".trainer-list");

  // trainerButton.addEventListener("click", () => {
  //   trainerList.classList.toggle("active");
  // });

  // // Training Button
  // const trainingButton = document.querySelector(".training-btn");
  // const trainingList = document.querySelector(".training-list");

  // trainingButton.addEventListener("click", () => {
  //   trainingList.classList.toggle("active");
  // });
  // // Membership Button
  // const membershipButton = document.querySelector(".member-btn");
  // const membershipList = document.querySelector(".membership-list");

  // membershipButton.addEventListener("click", () => {
  //   membershipList.classList.toggle("active");
  // });

  // Workout Page Card Filteration
  // Isotope JS Initialize

  let iso;

  window.addEventListener("load", function () {
    var elem = document.querySelector(".grid-card .row");

    iso = new Isotope(elem, {
      itemSelector: ".enrollment-card",
      layoutMode: "fitRows",
    });

    // Filter on dropdown radio change
    document
      .querySelectorAll("input[name='category-radio']")
      .forEach((radio) => {
        radio.addEventListener("change", function () {
          const value = this.id; // expects classes like .strength, .wellness on cards
          iso.arrange({ filter: "." + value });

          // close dropdown (if you want it closed after choose)
          document.querySelector(".category-list").classList.remove("active");
          // reset arrow rotation
          document.querySelector(".slc-icon").classList.remove("rotated");
        });
      });

    // If you have other filter buttons, keep their active state logic
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

    // Re-layout on resize
    window.addEventListener("resize", () => {
      iso.layout();
    });
  });

  // Category button toggle and reset filter (now can safely reference iso)
  const categoryButton = document.querySelector(".category-btn");
  const categoryList = document.querySelector(".category-list");
  const trainerButton = document.querySelector(".trainer-btn");
  const trainerList = document.querySelector(".trainer-list");
  const trainingButton = document.querySelector(".training-btn");
  const trainingList = document.querySelector(".training-list");
  const memberButton = document.querySelector(".member-btn");
  const memberList = document.querySelector(".member-list");
  const categoryIcon = document.querySelector(".slc-icon");

  // one shared dropdown toggle function
  function setupDropdown(button, list) {
    if (!button || !list) return;

    const icon = button.querySelector(".slc-icon") || button.querySelector("i");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      const isOpen = list.classList.contains("active");

      // close all dropdowns
      document
        .querySelectorAll(".dowpdown-list")
        .forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(".slc-icon")
        .forEach((i) => i.classList.remove("rotated"));

      if (!isOpen) {
        list.classList.add("active");
        if (icon) icon.classList.add("rotated");
      }

      // Reset isotope filter if available
      if (typeof iso !== "undefined") {
        iso.arrange({ filter: "*" });
      }

      document
        .querySelectorAll(".button-slider")
        .forEach((b) => b.classList.remove("active-btn"));
    });
  }

  // apply dropdowns
  setupDropdown(categoryButton, categoryList);
  setupDropdown(trainerButton, trainerList);
  setupDropdown(trainingButton, trainingList);
  setupDropdown(memberButton, memberList);

  // close dropdown on outside click
  document.addEventListener("click", (e) => {
    const clickCategory =
      categoryButton &&
      (categoryButton.contains(e.target) || categoryList.contains(e.target));
    const clickTrainer =
      trainerButton &&
      (trainerButton.contains(e.target) || trainerList.contains(e.target));
    const clickTraining =
      trainingButton &&
      (trainingButton.contains(e.target) || trainingList.contains(e.target));
    const clickMember =
      memberButton &&
      (memberButton.contains(e.target) || memberList.contains(e.target));

    if (!clickCategory && !clickTrainer && !clickTraining && !clickMember) {
      categoryList && categoryList.classList.remove("active");
      trainerList && trainerList.classList.remove("active");
      trainingList && trainingList.classList.remove("active");
      memberList && memberList.classList.remove("active");

      document
        .querySelectorAll(".slc-icon")
        .forEach((i) => i.classList.remove("rotated"));
    }
  });

  // Refresh AOS to remove animation delays
  AOS.refresh();
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

// Modal password Hide/Show

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
