function hitungLuasLingkaran() {
  const sisi = parseFloat(document.getElementById("sisi").value);
  const hasil = sisi * sisi;

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

function resetForm() {
  document.getElementById("sisi").value = "";
  document.getElementById("hasil").textContent = "";
}
