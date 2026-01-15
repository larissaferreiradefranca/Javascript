//Criar a função
function saudacao() {
    console.log("Olá");
}

//Chamar a função
saudacao();
saudacao();

//Funções com parâmetros
function saudacao(nome) {
    console.log("Olá, " + nome +  "!");
}

saudacao("Maria");
saudacao("João");

//Funções que retornam valor
function somar(a, b) {
    return a + b;
}

const resultado = somar(5,3); 
console.log(resultado);

//ARROW FUNCTIONS (forma moderna)
const dobrar = n /*n é parametro*/ => /*seta indica função*/  n * 2 /*return*/;

