class Pessoa{
    constructor(nome,id){//método
        this.nome = nome
        this.idade = id
}
}
let p1 = new Pessoa('layla',18)//aqui é como se chama-se a (function)não é uma function mais é como se fosse construtor,ele passa os valores correspondentes
console.log(p1)


/*
class Pessoa{
    constructor(){ //método
        this.nome = 'layla'
        this.idade = 18
}
}
let p1 = new Pessoa()//sem passar nenhum parâmetro
console.log(p1)
*/