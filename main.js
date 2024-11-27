//banner---------------------------------
const imgNumber = document.querySelectorAll(".banner img");
const right_btn = document.querySelector(".fa-solid.fa-arrow-right");
const left_btn = document.querySelector(".fa-solid.fa-arrow-left");
let index = 0;
console.log(imgNumber.length);

right_btn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".banner").style.right = index * 100 + "%";
});

left_btn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".banner").style.right = index * 100 + "%";
});
