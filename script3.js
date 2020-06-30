function Verificar() {
  var n1 = parseInt(document.getElementById("num1").value);
  var p1 = 230
  var n2 = parseInt(document.getElementById("num2").value);
  var p2 = 8578
  var n3 = parseInt(document.getElementById("num3").value);
  var p3 = 750
  var acerto = 0


  if (n1 == p1) {
    acerto = acerto + 1
  }

  if (n2 == p2) {
    acerto = acerto + 1
  }

  if (n3 == p3) {
    acerto = acerto + 1
  }

  if (acerto == 3) {
    alert("Parabéns você teve êxito neste simulado!")

  }

  else {
    alert("Há algo de errado, tente de novo!")
  }

}