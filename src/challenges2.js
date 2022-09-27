// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    const msg = 'não é possível gerar um número de telefone com esses valores';
    for (number of array) {
      // Varifica se é menor que 0 ou maior que 9
      if (number < 0 || number > 9) {
        return msg;
      }
      // Verifica se algum número ocorre 3 vezes ou mais
      let ocorrencias = 0;
      for (comparedNumber of array) {
        if (number == comparedNumber) {
          ocorrencias += 1;
        }
      }
      if (ocorrencias >= 3) {
        return msg;
      }
      let phoneNumber = '';
    }
    return '(' + array[0] + array[1] + ')'
    + ' ' + array[2] + array[3] + array[4] + array[5] + array[6]
    + '-' +  + array[7] + array[8] + array[9] + array[10];


  }
}

// console.log(generatePhoneNumber([0, 2, 3, 4, 5, 2, 7, 2, 9, 9, 4]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
