// Função é uma caixa que guarda ações que podem ser chamadas ao longo de todo meu código = Funções também podem ser chamadas de métodos

// Funcoes em JS são feitas com o comando function
// Em JS podemos chamar uma função antes ou depois dela ser declarada
function torrar(){
    console.log("Torrando pão")
    ejetarPao() // Fazendo com que uma função chame outra
}

function ejetarPao(){
    console.log("Preparando para ejetar pão")
    console.log("Pão finalizado")
}

torrar() //Chamando uma funcão para que ela seja executada
console.log("")

// Uma boa prática é fazer um função para cada ação sem mescla-las

// Função que chama todas as funções de uma vez:
function main(){
    getData()
    checkValues()
    sendToDatabase()
}

// Função que pega os dados:
function getData(){
    console.log("Pegando dados do usuario")
}

// Função que verifica os valores:
function checkValues(){
    console.log("Validando dados")
}

// Função que envia os dados para o banco de dados:
function sendToDatabase(){
    console.log("Enviando para o banco de dados")
}

main() //Somente chamamos uma função que chama as demais