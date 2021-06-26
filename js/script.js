const toggle = document.querySelector(".switch");
console.log(toggle);

//Selects ball in Toggle

const ball = document.querySelector(".ball");

//Selects Basic price span

const basicPrice = document.querySelector(".basic h3 span");

//Selects Professional price span

const proPrice = document.querySelector(".professional h3 span");

//Selects Master price span

const masterPrice = document.querySelector(".master h3 span");


//==============================================

//Adds click event to ball

toggle.addEventListener("click", function () {
  if (ball.classList.contains("move-right")) {
    ball.classList.remove("move-right");
    basicPrice.innerText = "199.99";
    proPrice.innerText = "249.99";
    masterPrice.innerText = "399.99";
  } else {
    ball.classList.add("move-right");
    basicPrice.innerText = "19.99";
    proPrice.innerText = "24.99";
    masterPrice.innerText = "39.99";
};
});

//=============================================

//Adds keyboard functionality for Toggle

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    if (ball.classList.contains("move-right")) {
      ball.classList.remove("move-right");
      basicPrice.innerText = "199.99";
      proPrice.innerText = "249.99";
      masterPrice.innerText = "399.99";
    } else {
      ball.classList.add("move-right");
      basicPrice.innerText = "19.99";
      proPrice.innerText = "24.99";
      masterPrice.innerText = "39.99";
  };
  };
});
