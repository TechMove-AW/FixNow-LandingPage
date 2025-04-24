document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menuButton");
  const navigationMenu = document.querySelector(".navigationMenu");
  const menuItems = document.querySelectorAll(".navigationMenu a");

  menuButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");

    const bars = menuButton.querySelectorAll("span");
    bars.forEach((bar, index) => {
      if (navigationMenu.classList.contains("active")) {
        if (index === 0) {
          bar.style.transform = "rotate(45deg) translate(5px, 5px)";
        }
        if (index === 1) {
          bar.style.opacity = "0";
        }
        if (index === 2) {
          bar.style.transform = "rotate(-45deg) translate(5px, -5px)";
        }
      } else {
        bar.style.transform = "none";
        bar.style.opacity = "1";
      }
    });
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navigationMenu.classList.remove("active");

      const bars = menuButton.querySelectorAll("span");
      bars.forEach((bar) => {
        bar.style.transform = "none";
        bar.style.opacity = "1";
      });
    });
  });
});
