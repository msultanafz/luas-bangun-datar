// Function untuk menghitung luas persegi
function hitungLuasPersegi() {
  const sisi = parseFloat(document.getElementById("sisi").value);
  const hasil = sisi * sisi; // Rumus luas persegi

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk mereset form
function resetForm() {
  document.getElementById("sisi").value = "";
  document.getElementById("hasil").textContent = "";
}
