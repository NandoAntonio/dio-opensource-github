// JSON = é uma maneira de transferir dados de forma agrupada
// JSON = JavaScript Object Notation
// Composto por chave e valor com objetivo de transferir dados
// Somente agrupe variaveis que estao dentro do mesmo contexto 
// JSON é um formato de comunicação/Transferencia universal entendido por todas as linguagens de programação, aplicações e meios

let invoice = {
    name: "Fernando",
    age: 22,
    products: { //Um objeto dentro de outro
        0: ["Mouse R1", 29.90],
        1: ["Ajazz Ak820", 129.99],
        2: ["Monitor 24p", 899.99]
    }
}

console.log(invoice)

gerarFuncao(invoice)
function gerarFuncao(invoiceGenerate){
    console.log(`"O comprador é: ${invoiceGenerate.name}`)
    console.log(`A idade é: ${invoiceGenerate.age}`)
    console.log("-----------------------------")

    for (let index in invoiceGenerate.products){ //Estou usando um for IN para percorrer um objeto, desestruturando ele
        let [productName, productPrice] = invoiceGenerate.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }
}
// let name = "Fernando"
// let idade = 22
// let products = ["Mouse R1", "Ajazz Ak820", "Monitor 24p"]
// let productsValues = [29.90, 129.99, 899.99]

// generateInvoice(name, products, idade, productsValues)

// function generateInvoice(name, products, idade, productsValues){
//     console.log("O comprador é: " + name)
//     console.log("A idade é: " + idade)
//     console.log("-----------------------------")
//     console.log("O produto é: " + products[0])
//     console.log("O valor é: " + productsValues[0])
// }