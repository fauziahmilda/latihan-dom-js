// const cls = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// cls.addEventListener("click", function () {
//   //   alert("ok");
//   console.log(card);
//   //   card.style.display = "none";
// });

//--------------------------------------
//DOM traversal
//cara 1
const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }
//cara 2
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     //metode untuk menghentikan buble, ato efek dari class lain
//     e.stopPropagation();
//   });
// });

/**
 * !PREVENT DEFAULT
 * * untuk menghentikan aksi default yang dilakukan oleh
 * * sebuah element
 *
 */

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

//cara 3
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  //e.target, tau apa yg kita klik
  if ((e.target.className = "close")) {
    e.target.parentElement.style.display = "none";
  }
});
