// Selectors //
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");

// Event Listeners //
leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);

// Functions //
/* Issue with display when position value is incremented and user decides to click on the other button to cycle through*/
let position = 0;

function left() {
  if (position == 0) {
    html.className = "html left-position";
    css.className = "css top-position";
    js.className = "js right-position";
    position++;
  }
  else if (position == 1) {
    html.className = "html right-position";
    css.className = "css left-position";
    js.className = "js top-position";
    position++;
  }
  else if (position == 2) {
    html.className = "html";
    css.className = "css";
    js.className = "js";
    position = 0;
  }
};

function right() {
  if (position == 0) {
    html.className = "html right-position";
    css.className = "css left-position";
    js.className = "js top-position";
    position++;
  }
  else if (position == 1) {
    html.className = "html left-position";
    css.className = "css top-position";
    js.className = "js right-position";
    position++;
  }
  else if (position == 2) {
    html.className = "html";
    css.className = "css";
    js.className = "js";
    position = 0;
  }
};
