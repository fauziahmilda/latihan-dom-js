function getPilihanComputer() {
  var comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}
//menentukan pemenang
function getHasil(comp, player) {
  // var hasil = "";
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "../image/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

//mengambil img yg ada di li saja
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilComputer = getPilihanComputer();
    const pilPlayer = pil.className;
    console.log("comp: " + pilComputer);
    console.log("player: " + pilPlayer);
    const hasil = getHasil(pilComputer, pilPlayer);
    putar();
    console.log(hasil);

    setTimeout(() => {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "../image/" + pilComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

//----------METODE PANJANG

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilComputer = getPilihanComputer();
//   const pilPlayer = pGajah.className;
//   console.log("comp: " + pilComputer);
//   console.log("player: " + pilPlayer);
//   const hasil = getHasil(pilComputer, pilPlayer);
//   console.log(hasil);
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "../image/" + pilComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilComputer = getPilihanComputer();
//   const pilPlayer = pOrang.className;
//   console.log("comp: " + pilComputer);
//   console.log("player: " + pilPlayer);
//   const hasil = getHasil(pilComputer, pilPlayer);
//   console.log(hasil);
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "../image/" + pilComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilComputer = getPilihanComputer();
//   const pilPlayer = pSemut.className;
//   console.log("comp: " + pilComputer);
//   console.log("player: " + pilPlayer);
//   const hasil = getHasil(pilComputer, pilPlayer);
//   console.log(hasil);
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "../image/" + pilComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
