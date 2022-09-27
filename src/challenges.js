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
    if (parseInt(key) >= maiorNumero) {
      maiorNumero = key;
      qtVezesNumeroMaior = itensObjet[key]
    }
  }
  return qtVezesNumeroMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1;
  if (cat1 - mouse < 0) {
    distCat1 = (cat1 - mouse) * -1;
  } else {
    distCat1 = cat1 - mouse
  }
  let distCat2;
  if (cat2 - mouse < 0) {
    distCat2 = (cat2 - mouse) * -1;
  } else {
    distCat2 = cat2 - mouse
  }

  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  newArray = [];
  for (let number of array) {
    if (number % 3 == 0 && number % 5 == 0) {
      newArray.push('fizzBuzz');
    } else if (number % 3 == 0) {
      newArray.push('fizz');
    } else if (number % 5 == 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    };
  }
  return newArray;
}

// Desafio 9
function encode(myString) {
  let novaString = '';

  for (let letra of myString) {
    let letraSubstitutida = '';
    switch (letra) {
      case 'a':
        letraSubstitutida = '1';
        break;
      case 'e':
        letraSubstitutida = '2';
        break;
      case 'i':
        letraSubstitutida = '3';
        break;
      case 'o':
        letraSubstitutida = '4';
        break;
      case 'u':
        letraSubstitutida = '5';
        break;
    
      default:
        break;
    }
    if (letraSubstitutida != ''){
      novaString += letraSubstitutida;
    }else{
      novaString += letra;
    }
  }

  return novaString;
}
// console.log(encode('amarei'));

function decode(myString) {
  let novaString = '';

  for (let letra of myString) {
    let letraSubstitutida = '';
    switch (letra) {
      case '1':
        letraSubstitutida = 'a';
        break;
      case '2':
        letraSubstitutida = 'e';
        break;
      case '3':
        letraSubstitutida = 'i';
        break;
      case '4':
        letraSubstitutida = 'o';
        break;
      case '5':
        letraSubstitutida = 'u';
        break;
    
      default:
        break;
    }
    if (letraSubstitutida != ''){
      novaString += letraSubstitutida;
    }else{
      novaString += letra;
    }
  }

  return novaString;
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
