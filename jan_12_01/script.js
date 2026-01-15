//PASSO 1: Selecionar todos os elementos
//
const numero = document.getElementById("numero");
const btnAdicionar = document.getElementById("adicionar");
const btnSubtrair = document.getElementById("subtrair");
const btnZerar = document.getElementById("zerar");

//PASSO 2: Criar variável para o valor
//
let contador = 0;
// "let" permite que o valor mude depois

//PASSO 3: Criar função que atualiza a tela
//
function atualizar() {
    numero.textContent = contador;
}

//PASSO 4: Adicionar eventos aos botões
//

//Quando clicar em "+", adiciona 1
btnAdicionar.addEventListener("click", function () {
    contador = contador + 1;
    atualizar();
});

//Quando clicar em "-", subtrai 1
btnSubtrair.addEventListener("click", function () {
    contador = contador - 1;
    atualizar();
});

//Quando clicar em "Zerar", volta para 0
btnZerar.addEventListener("click", function () {
    contador = 0;
    atualizar();
});
