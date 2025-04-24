// Crie uma função para verificar se um valor é Truthy
var cor = "azul";

verificar_cor = () => {
  if (cor === "vermelho") {
    return true;
  } else {
    return false;
  }
};

console.log(verificar_cor());

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

perimetro = (quadrado) => {
  console.log(quadrado * 4);
};

perimetro(4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
nomeSobrenome = (nome, sobrenome) => {
  console.log(nome, sobrenome);
};

nomeSobrenome("Luan", "Freire");

// Crie uma função que verifica se um número é par
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(verificarParImpar(9));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
nomeSobrenome = (nome, sobrenome) => {
  console.log(typeof nome);
};

nomeSobrenome("Luan", "Freire");

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", () => {
  console.log("Luan Freire");
});

// Corrija o erro abaixo
/*function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;

  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
}*/
