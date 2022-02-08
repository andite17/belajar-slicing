let menuOpen = document.querySelector(".menu-toggle");
let menuWrapper = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", function () {
  const res = menuOpen.classList.toggle("bx-x");
  menuWrapper.classList.toggle("active");
  if (res) {
    menuOpen.classList.remove("bxs-grid-alt");
  } else {
    menuOpen.classList.toggle("bxs-grid-alt");
  }
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});
