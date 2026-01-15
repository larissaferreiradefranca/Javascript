const frutas = ["maçã", "banana", "laranja"];

//Forma clássica
//LENGTH: usada para determinar o tamanho de objetos como arrays e strings. Para arrays, também pode ser usada para definir o número de elementos.
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


//Forma moderna (for...of) - mais limpa - utilizado para extrair tudo do array (criar um nome para representar um item do array)
for (const fruta of frutas) {
    console.log(fruta);
}

//ARRAYS - Métodos importantes

const numeros = [1, 2, 3, 4, 5];

//Adicionar no final
numeros.push(6);

//Remover do final
numeros.pop();

//Adicionar no início
numeros.unshift(0);

//Remover do início
numeros.shift();

//Tamanho do Array
numeros.length

//Encontrar índice
numeros.indexOf(3);   // 2 (posição do número 3)

//Verificar se existe
numeros.includes(3);  //true
numeros.includes(10); //false

