const body = document.querySelector("body");
let isOpen = false;

//toggler function
function handleSideBar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.classList.toggle("active");
}

//event listener for hamburger toggler
const hamburger = document.getElementsByClassName("hamburger-container")[0];
hamburger.addEventListener("click", () => {
  isOpen = !isOpen;
  handleSideBar();
});
