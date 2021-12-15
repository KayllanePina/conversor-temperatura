function converterTemperaturas(temperatura, conversor){
  let resultado;

 
  if(conversor == 'C'){
    resultado = converterParaCelsius(temperatura);
  } else if(conversor == 'K') {
    resultado = converterParaKelvin(temperatura);
  }

  return resultado;
}

function converterParaCelsius(kelvin){
  let celsius = kelvin - 273;

  return celsius
}

function converterParaKelvin(celsius){
  let kelvin = celsius + 273;

  return kelvin
}

exports.converterTemperaturas = converterTemperaturas;