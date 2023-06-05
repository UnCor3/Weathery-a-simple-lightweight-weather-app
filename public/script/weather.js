const checkbox = document.getElementById("temp-type");
const checkbox2 = document.getElementById("felt-temp");

const temp_c = document.getElementsByClassName("temp-c")[0];
const temp_f = document.getElementsByClassName("temp-f")[0];

const f_temp_c = document.getElementsByClassName("f-temp-c")[0];
const f_temp_f = document.getElementsByClassName("f-temp-f")[0];

//toggle mechanism for Celsius and Fahrenheit 
function handleTempClassList() {
  if (checkbox.checked) {
    temp_c.classList.add("active");
    f_temp_c.classList.add("active");

    temp_f.classList.remove("active");
    f_temp_f.classList.remove("active");
  } else {
    temp_c.classList.remove("active");
    f_temp_c.classList.remove("active");

    temp_f.classList.add("active");
    f_temp_f.classList.add("active");
  }
}

//toggle mechanism for Celsius and Fahrenheit 
function handleFeltTempClassList() {
  if (checkbox2.checked) {
    checkbox.checked = true;
    temp_c.classList.add("active");
    f_temp_c.classList.add("active");

    temp_f.classList.remove("active");
    f_temp_f.classList.remove("active");
  } else {
    temp_c.classList.remove("active");
    f_temp_c.classList.remove("active");

    temp_f.classList.add("active");
    f_temp_f.classList.add("active");
  }
}

checkbox.addEventListener("change", handleTempClassList);
checkbox2.addEventListener("change", handleFeltTempClassList);
