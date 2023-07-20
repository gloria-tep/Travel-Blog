function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".change-button");
themeButton.addEventListener("click", changeTheme);

function findoutmoreButton() {
  let name = prompt("what is your name?");
  let budget = prompt("what is your budget €€€ for travelling to switzerland?");
  let h1 = document.querySelector("h1");
  if (budget <= 400) {
    alert(
      "Hi" +
        " " +
        name +
        " " +
        ",switzerland is an expensive country!!you need to save up more."
    );
  } else {
    alert("Hi" + " " + name + " " + ", get ready for travelling!!");
  }
}
let button = document.querySelector(".button");
button.addEventListener("click", findoutmoreButton);
