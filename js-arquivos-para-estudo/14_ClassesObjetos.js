// Uma classe é uma forma que padroniza o formato de uma estrutura de dados.
// Um objeto é uma entidade que segue o padrão da estrutura de dados da classe, mas com suas próprias propriedades, metodos e funções.

// JSON geralmente usado para comunicar dados entre aplicações diferentes ou até mesmo iguais, porém em conjunto com outros. Já os objetos e classes devem ser usados no mesmo programa

// Quando crio um objeto a partir de uma classe, eu estou instanciando uma classe.

class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa // para declarar uma variavel, usamos o this dentro de classes
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "nuttela")
let boloPremium = new formaDeBolo("massa de Morango", "Prestigio")

boloFesta.escrever()
boloPremium.escrever()