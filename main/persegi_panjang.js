// Function untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang() {
  const panjang = parseFloat(document.getElementById("panjang").value);
  const lebar = parseFloat(document.getElementById("lebar").value);
  const hasil = panjang * lebar; // Rumus luas persegi panjang

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk mereset form
function resetForm() {
  document.getElementById("panjang").value = "";
  document.getElementById("lebar").value = "";
  document.getElementById("hasil").textContent = "";
}
