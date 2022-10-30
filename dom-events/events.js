/**
 * ! cara mendengerkan event
 * * event handler
 * -->inline html atribut
 * -->element method
 * * addEventListener()
 *
 * ? perbendaannya -> terlihat kalo banyak perubahan
 * * event handler -> cara lama, perubahan akan menimpa perubahan sebelumnya
 * * addEventListener()--> perubahannya akan menambah perubahan sblmnya
 */
const a = document.getElementById("a");
const link = document.querySelector("section#a a");
a.removeChild(link);

/**
 * *event handler
 */
//kita mendengarkan suatu aksi ketika klik p3 maka warna bg nya berubah
//bisa pake css, cuma ga efektif
const p3 = document.querySelector(".p3");

function ubahWarnaP3() {
  p3.style.backgroundColor = "#DBB4AD";
}

function ubahWarnaP2() {
  p2.style.backgroundColor = "#FFE3DC";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

/**
 * *addEventListener()
 */
//setiap klik sekali nambah list item baru
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(textLiBaru);
  ul.appendChild(liBaru);
}); //js cariin p4, trs pas click lakukans sesuatu
