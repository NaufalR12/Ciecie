//Toggle display flex notifikasi
const itemDetailNotifikasi = document.querySelector("#item-detail-notifikasi");

document.querySelector(".item-detail-bayar").onclick = (e) => {
  itemDetailNotifikasi.style.display = "flex";
  e.preventDefault();
};

//Klik tombol close notifikasi
document.querySelector(".notifikasi .close-icon").onclick = (e) => {
  itemDetailNotifikasi.style.display = "none";
  e.preventDefault();
};

//klik diluar notifikasi
window.onclick = (e) => {
  if (e.target === itemDetailNotifikasi) {
    itemDetailNotifikasi.style.display = "none";
  }
};
