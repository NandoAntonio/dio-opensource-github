torrar("Pao de forma")
torrar("Pao Integral")
torrar("Pao de Gergilim")

function torrar(pao){ //pao e um parametro passado para dentro da minha funcao, onde na hora que chamo essa funcao posso passar seu valor
    console.log("Torrada feita com " + pao)
}

// console.log(pao) //Essa variavel somente existe dentro do escopo da funcao, fora da chave e como se ela nao existisse. Devemos ter atencao a isso, pois se aplica a todos os parametros

// Var = cria variaveis globais que podem vazar para todos
// Let = cria uma variavel que so existe no seu contexto

console.log("") //Somente para Pular linha

function fazerPao(material, nome = "Cliente", valor){
    console.log("Torrada feita com " + material)
    console.log("Pedido feito por: " + nome)
    console.log("O valor total é: " + valor)
}

fazerPao("Pao de Gengibre", "Fernando", 10.99)
fazerPao("Pao de Hamburguer", "Camila", 52.30)
fazerPao("Pao de Hamburguer", undefined, 28.99) //Nao pode ocorrer o encontro de separadores, ele retorna erro = A nao ser que voce passe o valor como undefined

createStringConnections("db_products", "Fernando", "1234")

function createStringConnections(databaseName, user, pass){
    console.log(`connect:DBCONNECT; user=${user}; pass=${pass};initial_database=${databaseName}`)
}

// Com a crase + as chaves podemos fazer interpolacao de strings, que e juntar variaveis a strings sem precisar concatenar