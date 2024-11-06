// Function untuk menghitung luas jajar genjang
function hitungLuasJajarGenjang() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = alas * tinggi; // Rumus luas jajar genjang

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk reset form
function resetForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").textContent = "";
}
