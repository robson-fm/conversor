//Conversão de dolar para real
function ConverterBr() {
  var valorElemento = document.getElementById("valorBr");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.07;

  //console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertidoReal");
  var valorConvertido = "R$" + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
  document.getElementById("flag").style.display = "inline-block";
}

//Conversão de real para dolar

function ConverterUs() {
  var valorElemento = document.getElementById("valorUs");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico / 5.07;

  //console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
  var valorConvertido = "US$" + valorEmDolar.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
  document.getElementById("flagEua").style.display = "inline-block";
}

document.getElementById("flag").style.display = "none";
document.getElementById("flagEua").style.display = "none";