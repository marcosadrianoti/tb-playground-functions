// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(myString) {
  return myString.split(" ");
}

// Desafio 4
function concatName(myArray) {
  return myArray[myArray.length - 1] + ", " + myArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let qtItem = 0;
  let itensObjet = {};
  for (let number of array) {
    let qt = 0;
    for (let iterator of array) {
      if (number == iterator) {
        qt += 1;
      }
    }
    itensObjet[number] = qt;
  }
  let qtVezesNumeroMaior = 0;
  let maiorNumero = (Object.keys(itensObjet))[0];
  for (let key in itensObjet) {
    if (parseInt(key) >= maiorNumero){
      maiorNumero = key;
      qtVezesNumeroMaior = itensObjet[key]
    }
  }
  return qtVezesNumeroMaior;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
