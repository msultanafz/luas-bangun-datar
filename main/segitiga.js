// Function untuk menghitung luas segitiga
function hitungLuasSegitiga() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = (alas * tinggi) / 2; // Rumus luas segitiga

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk mereset form
function resetForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").textContent = "";
}
