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
