// Page Loader
window.onload = function () {
  setTimeout(() => {
    const loader = document.getElementById("onload-loader");
    const content = document.getElementById("onload-content");

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.classList.add("onload-hidden");
      content.classList.remove("onload-hidden");
    }, 500);
  }, 2000);
};

document.addEventListener("DOMContentLoaded", () => {
  // AOS Initialize
  AOS.init({
    duration: 1000,
  });

  // Luxy Initialize
  luxy.init();
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

  // Workout Page Card Filteration
  // Isotope JS Initialize

  let iso;

  window.addEventListener("load", function () {
    var elem = document.querySelector(".grid-card .row");

    iso = new Isotope(elem, {
      itemSelector: ".enrollment-card",
      layoutMode: "fitRows",
    });

    // Filter on dropdown radio change (/*input[name='category-radio']*?)
    document.querySelectorAll(".form-check-input").forEach((radio) => {
      radio.addEventListener("change", function () {
        const value = this.value; // expects classes like .strength, .wellness on cards
        iso.arrange({ filter: "." + value });

        // close dropdown (if you want it closed after choose)
        document.querySelector(".dowpdown-list").classList.remove("active");
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

// When modal open page will not scroll

// add this script after bootstrap.js (or in a DOMContentLoaded block)
(function () {
  const modal = document.getElementById("exampleModal");
  let scrollY = 0;

  function preventScroll(e) {
    // allow events that happen inside the modal content (so modal can scroll)
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent && modalContent.contains(e.target)) return;
    e.preventDefault();
  }

  modal.addEventListener("show.bs.modal", () => {
    // save current scroll
    scrollY = window.scrollY || document.documentElement.scrollTop;

    // lock document scroll by fixing body
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    // also ensure html doesn't scroll (safe-guard)
    document.documentElement.style.overflow = "hidden";

    // block wheel/touchmove globally (but allow inside modal-content)
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
  });

  modal.addEventListener("hidden.bs.modal", () => {
    // restore body
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    document.documentElement.style.overflow = "";

    // remove global blockers
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);

    // restore scroll position
    window.scrollTo(0, scrollY);
  });
})();

// When hamberger open body will not scroll

(function () {
  // selector for your offcanvas
  const offcanvas = document.getElementById("offcanvasScrolling");
  if (!offcanvas) return;

  let scrollY = 0;

  // allow events inside this element (the offcanvas panel) to pass
  function isInsideOffcanvas(target) {
    return offcanvas.contains(target);
  }

  function preventBgScroll(e) {
    if (isInsideOffcanvas(e.target)) return; // allow scrolling inside offcanvas
    e.preventDefault();
  }

  offcanvas.addEventListener("show.bs.offcanvas", () => {
    // save current scroll
    scrollY = window.scrollY || document.documentElement.scrollTop || 0;

    // lock body in place (preserve visual scroll position)
    document.documentElement.style.scrollBehavior = "auto"; // avoid smooth jump
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // also prevent wheel/touchmove globally (passive:false so preventDefault works)
    document.addEventListener("wheel", preventBgScroll, {
      passive: false,
      capture: true,
    });
    document.addEventListener("touchmove", preventBgScroll, {
      passive: false,
      capture: true,
    });
  });

  offcanvas.addEventListener("hidden.bs.offcanvas", () => {
    // restore body
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    document.documentElement.style.scrollBehavior = "";

    // remove blockers
    document.removeEventListener("wheel", preventBgScroll, { capture: true });
    document.removeEventListener("touchmove", preventBgScroll, {
      capture: true,
    });

    // restore scroll pos
    window.scrollTo(0, scrollY);
  });

  // Extra: if user opens offcanvas by toggling class manually (rare), handle body class too
  const observer = new MutationObserver(() => {
    if (document.body.classList.contains("offcanvas-open")) {
      // if somehow shown without events, ensure lock
      if (!document.body.style.position) {
        scrollY = window.scrollY || 0;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        document.addEventListener("wheel", preventBgScroll, {
          passive: false,
          capture: true,
        });
        document.addEventListener("touchmove", preventBgScroll, {
          passive: false,
          capture: true,
        });
      }
    } else {
      // ensure cleanup if class removed manually
      if (document.body.style.position) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.removeEventListener("wheel", preventBgScroll, {
          capture: true,
        });
        document.removeEventListener("touchmove", preventBgScroll, {
          capture: true,
        });
        window.scrollTo(0, scrollY);
      }
    }
  });
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"],
  });
})();
