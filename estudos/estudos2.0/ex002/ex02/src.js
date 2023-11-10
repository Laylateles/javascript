class Pessoa{
    constructor(nome=undefined,idade=0){
        this.nome = nome
        this.idade = idade
    }
    apresentar = function(){
        console.log(`Olá meu nome é ${p1.nome} e minha idade é ${p1.idade} anos`)
    }
}

let p1 = new Pessoa('layla',17)//tem q ser o p1 lá dentro pq ele q vai passar os parâmetros
p1.apresentar()//quando chamar a function ela vai disparar aquela function dentro da class Pessoa q é um obj