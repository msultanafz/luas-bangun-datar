// Function untuk menghitung luas belah ketupat
function hitungLuasBelahKetupat() {
  const diagonal1 = parseFloat(document.getElementById("diagonal1").value);
  const diagonal2 = parseFloat(document.getElementById("diagonal2").value);
  const hasil = (diagonal1 * diagonal2) / 2; // Rumus belah ketupat

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

// Function untuk mereset form
function resetForm() {
  document.getElementById("diagonal1").value = "";
  document.getElementById("diagonal2").value = "";
  document.getElementById("hasil").textContent = "";
}
