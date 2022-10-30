//MANIPULASI ELEMENT

//element.innerHTML
//element.style.<property>
//elememt.setAttribute()
//element/classList
const judul = document.getElementById("judul");
judul.innerHTML = "Profil Ziaa <3";
judul.style.backgroundColor = "#DBB4AD";
judul.style.color = "#3A2D32";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Wellcome to my profil";
// sectionA.style.backgroundColor = "#A2AD91";

const a = document.querySelector("section#a a");
a.setAttribute("id", "link");

/**
 * untuk mengubah class
 * menggunakanan -> element.classlist.add()
 *                  element.classList.remove()
 *                  element.classList.toggle() -> menambah/menghapus
 *                  element.classList.item() -> mencari dg index dari 0
 *                  element.classList.contains() -> cek, ada gak
 *                  element.classList.remove()
 */

//-----------------------------------------------------

//MANIPULASI NODE
//document.createElement()
//document.createTextNode()
//node.appendChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()

//menambahkan paragraf baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf Baru");
//simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);
//simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru); //simpan ke akhir dari sebuah element parent

//misal mau taro di tengah2
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Li Item Baru");
//simpan textnya
liBaru.appendChild(textLiBaru);
//simpan di tempat
const ul = document.querySelector("section#b ul"); //parent
const li2 = ul.querySelector("li:nth-child(2)"); //ambil lagi
ul.insertBefore(liBaru, li2); //simpan liBaru sebelum li2 di ul

//contoh remove link
//tangkap section A
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

//contoh replace child
//parent section b
const b = document.getElementById("b");
//tangkap element yg bakal diremove
const p4 = b.querySelector("p");
//buat element baru
const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Information");
h2Baru.appendChild(textH2Baru);
b.replaceChild(h2Baru, p4);
h2Baru.style.backgroundColor = "#A2AD91";
h2Baru.style.color = "#3A2D32";
