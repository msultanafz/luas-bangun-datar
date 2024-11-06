// Function untuk menghitung luas lingkaran
function hitungLuasLingkaran() {
  const jari_jari = parseFloat(document.getElementById("jari-jari").value);
  const hasil = 3.14 * (jari_jari * jari_jari); // Rumus luas lingkaran

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk mereset form
function resetForm() {
  document.getElementById("jari-jari").value = "";
  document.getElementById("hasil").textContent = "";
}
