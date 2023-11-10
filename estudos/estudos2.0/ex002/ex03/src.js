class Pessoa{//classe pai
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    apresentar = function(){
        console.log(`Olá, meu nome é ${p1.nome} e eu tenho ${p1.idade} anos.`)
    }
}

let p1 = new Pessoa('layla',12)
p1.apresentar()
console.log('------------------------------------------')

class Aluno extends Pessoa{//classe filho //herança
    constructor(nome,idade,matricula){
        super(nome,idade)//super é usado para não ter q repetir as mesmas coisas
        this.matri = matricula
    }

    estudar = function(){
        console.log(`Estou estudando`)
    }
    setMatricu = function(matricula){
        if(matricula >= 0){//encapsulamento
            this.matri = matricula//se a matricula for maior que zero ela adiciona a matricula,se não ela imprime isso:
        } else{
            console.log(`Digite uma matricula válida!`)
        }
    }
}
let p2 = new Aluno('lero',12)//se não for usar os outros parâmetro não precisa definir eles
p2.estudar()
p2.setMatricu(2)//se for usar uma function que possue parâmetros é necessário passar os parâmetros na chamada
console.log('------------------------------------------')

class Professor extends Pessoa{//importante colocar o extends//poliformismo
    constructor(nome,idade,matricula){
        super(nome,idade,matricula)
    }
    ensinar(){
        console.log(`Estou ensinando`)
    }
}
let p3 = new Professor()
p3.ensinar()
console.log('------------------------------------------')

class Livros{
    constructor(titulo,autor,anoPublicacao){
        this.titulo = titulo
        this.autor = autor
        this.anoPubl = anoPublicacao
    }
    mostrarDetalhes(){
        console.log(`Título: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicação: ${this.anoPubl}`)//usar o this.x é melhor,pelo menos aqui dentro
    }
}

let livr = new Livros('O que o tempo me roubou','Oda',1990)
livr.mostrarDetalhes()


