document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navBar");
  const iconNav = document.querySelector(".fa-solid.fa-bars");

  const handleViewNav = () => {
    nav.classList.toggle("show");
  };

  if (iconNav) {
    iconNav.addEventListener("click", handleViewNav);
  }
});
