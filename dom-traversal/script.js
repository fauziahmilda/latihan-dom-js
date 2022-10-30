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
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

/**
 * !METODE NYARI ROOT
 *
 * parentNode
 * parentElement
 * nextSibling
 * nextElementSibling
 * previousSibling
 * previousElementSibling
 *
 * bisa dipake double
 * name.parentElement.parentElement
 *
 */
