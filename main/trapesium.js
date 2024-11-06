// Function untuk menghitung luas trapesium
function hitungLuasTrapesium() {
  const sisiA = parseFloat(document.getElementById("sisia").value);
  const sisiB = parseFloat(document.getElementById("sisib").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = ((sisiA + sisiB) * tinggi) / 2; // Rumus luas trapesium

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk mereset form
function resetForm() {
  document.getElementById("sisia").value = "";
  document.getElementById("sisib").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").textContent = "";
}
