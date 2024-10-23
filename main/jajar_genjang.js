function hitungLuasJajarGenjang() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = alas * tinggi;

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

function resetForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").textContent = "";
}
