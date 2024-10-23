function hitungLuasBelahKetupat() {
  const diagonal1 = parseFloat(document.getElementById("diagonal1").value);
  const diagonal2 = parseFloat(document.getElementById("diagonal2").value);
  const hasil = (diagonal1 * diagonal2) / 2;

  document.getElementById("hasil").textContent = hasil;

  return false; // Agar form tidak melakukan submit
}

function resetForm() {
  document.getElementById("diagonal1").value = "";
  document.getElementById("diagonal2").value = "";
  document.getElementById("hasil").textContent = "";
}
