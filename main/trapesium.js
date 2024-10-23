function hitungLuasTrapesium() {
  const p_sisi1 = parseFloat(document.getElementById("psisi1").value);
  const p_sisi2 = parseFloat(document.getElementById("psisi2").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = ((p_sisi1 + p_sisi2) * tinggi) / 2;

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

function resetForm() {
  document.getElementById("psisi1").value = "";
  document.getElementById("psisi2").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").textContent = "";
}
