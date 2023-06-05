const sidebarToggler = document.querySelector(".sidebar .sidebar-toggler");
const sidebar = document.getElementsByClassName("sidebar")[0];

//toggling sidebar
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
