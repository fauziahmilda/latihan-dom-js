//DOM SELECTION
//document.getElementById() => mengembalikan element

const judul = document.getElementById("judul");
judul.style.color = "#EDAE49";
judul.style.backgroundColor = "#30638E";
judul.innerHTML = "This is Zia's Profile";

//document.getElementByTagName() = mengembalikan HTMLCollection
//berarti array itu HTMLCollection tuh
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "#EDAE49";
}

//document.getElementByClassName() = mengembalikan HTMLCollection
//berarti array itu HTMLCollection
const p1 = document.getElementsByClassName("p1");

//document.querySelector() -> element
//hanya mgnubah target pertama, tidak bisa semua, harus satu2
const p4 = document.querySelector("#b p"); //idnya b, lalu didalamnya p
p4.style.color = "#30638E";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "#30638E";
li2.style.color = "#EDAE49";

//document.querySelectorAll()
const pAll = document.querySelectorAll("p");

//MENGUBAH NODE ROOT
//noderoot = document
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
