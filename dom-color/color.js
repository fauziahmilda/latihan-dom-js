//pas tombol diclick, bodynya berubah warna

const tUbahWarna = document.getElementById("tUbahWarna");
// const body = document.getElementsByTagName("body")[0];
//body gausa
tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "pink-muda"); // ini dari css style
  document.body.classList.toggle("pink-muda"); //mengubah true false
});

//buat tombol dengan javascript
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
//simpan after button
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

//tangkap slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  //   sMerah.value;
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  //   console.log(r, g, b);
});
sHijau.addEventListener("input", function () {
  //   sMerah.value;
  const g = sHijau.value;
  const r = sMerah.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sBiru.addEventListener("input", function () {
  //   sMerah.value;
  const g = sHijau.value;
  const r = sMerah.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  //posisi mouse sumbu x dan y
  //clientX harus nempel pada suatu element
  //   console.log(event.clientX);
  //ukuran browser
  //   console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  const mPos = (xPos + yPos) / 2;
  document.body.style.backgroundColor =
    "rgb(" + xPos + ", " + yPos + ", " + mPos + ")";
});
