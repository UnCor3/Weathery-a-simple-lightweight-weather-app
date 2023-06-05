const input = document.getElementById("speed-type");
const kph = document.getElementsByClassName("speed-type-kmh")[0];
const mph = document.getElementsByClassName("speed-type-mph")[0];


//kmp - mph toggler
input.addEventListener("change", () => {
  if (input.checked) {
    kph.classList.add("active");
    mph.classList.remove("active");
  } else {
    kph.classList.remove("active");
    mph.classList.add("active");
  }
});
