const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
const header = document.querySelector(".header");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", Actions);
});

function Actions(e) {
  const styles = e.currentTarget.classList;

  if (styles.contains("increase")) {
    if (count < 100) {
      count++;
    }
  } else if (styles.contains("decrease")) {
    if (count <= 100) {
      count--;
    }
  } else {
    count = 0;
  }

  if (count >= 0) {
    value.style.color = "#17af03";
    header.style.color = "#17af03";
  }

  if (count <= 0) {
    value.style.color = "#e4215c";
    header.style.color = "#e4215c";
  }

  if (count === 0) {
    value.style.color = "#22436c";
    header.style.color = "#22436c";
  }

  value.textContent = count;
}