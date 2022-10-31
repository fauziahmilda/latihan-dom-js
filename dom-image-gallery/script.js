// const jumbo = document.querySelector(".jumbo");
// console.log(jumbo);

// const thum = document.querySelectorAll(".thum");
// console.log(thum);

// thum.forEach(function (thum) {
//   thum.addEventListener("click", function (e) {
//     alert("ok");
//     jumbo.replaceAttribute(thum);
//   });
// });

const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thums = document.querySelectorAll(".thum");

container.addEventListener("click", function (e) {
  if (e.target.className == "thum") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    thums.forEach(function (thum) {
      thum.className = "thum";
    });

    e.target.classList.add("active");
  }
});
