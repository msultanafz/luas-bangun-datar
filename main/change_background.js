// Array yang berisi daftar URL gambar-gambar background
const backgrounds = [
  "../img/wallpaper1.jpg",
  "../img/wallpaper2.jpg",
  "../img/wallpaper3.jpg",
  "../img/wallpaper4.jpg",
  "../img/wallpaper5.jpg",
];

// Variabel untuk menyimpan indeks gambar saat ini
let currentIndex = 0;

// Background default
const defaultBackground = backgrounds[0];

// Fungsi untuk mengganti wallpaper ke gambar berikutnya
function changeWallpaper() {
  // Hitung indeks gambar berikutnya
  currentIndex = (currentIndex + 1) % backgrounds.length;
  const newWallpaper = backgrounds[currentIndex];

  // Ambil elemen body
  const body = document.getElementById("body");

  // Tambahkan kelas fade-out untuk transisi
  body.classList.remove("fade-in");
  body.classList.add("fade-out");

  // Setelah transisi selesai, ganti wallpaper dan tambahkan kelas fade-in
  setTimeout(() => {
    body.style.backgroundImage = `url(${newWallpaper})`;
    body.classList.remove("fade-out");
    body.classList.add("fade-in");
  }, 500); // Pastikan durasi yang sama dengan transisi CSS

  // Simpan URL wallpaper di localStorage agar pilihan ini berlaku di semua halaman
  localStorage.setItem("wallpaper", newWallpaper);
}

// Fungsi untuk menerapkan wallpaper yang tersimpan di localStorage
function applySavedWallpaper() {
  const savedWallpaper = localStorage.getItem("wallpaper") || defaultBackground;
  const body = document.getElementById("body");
  body.style.backgroundImage = `url(../../${savedWallpaper})`;
  body.classList.add("fade-in");
}

// Ketika halaman dimuat, cek apakah ada wallpaper tersimpan di localStorage
document.addEventListener("DOMContentLoaded", function () {
  applySavedWallpaper();
});
