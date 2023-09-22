

const numero1 = 10;
const numero2 = 25;
const numero3 = 15;

// Verifica qual é o maior número
let maiorNumero;

if (numero1 >= numero2 && numero1 >= numero3) {
  maiorNumero = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  maiorNumero = numero2;
} else {
  maiorNumero = numero3;
}

// Mostra o resultado na tela
