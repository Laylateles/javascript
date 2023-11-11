class Livros{
    constructor(titulo,autor,avaliacao=0){//avali==number de 1 a 5
        this.titulo = titulo
        this.autor = autor
        this.avali = avaliacao 
    }
}

let lista = []
function adicionarLivros(titulo,autor,avaliacao){
    if(avaliacao > 5){
        console.log('Por favor digite um número entre 1 e 5 para a avaliação')
        console.log('---------------------')
    }else{
    const novoLivro = new Livros(titulo,autor,avaliacao)
    lista.push(novoLivro)
    }
}
let l1 = adicionarLivros('rapunzel','alice',2)
let l2 = adicionarLivros('piratas no caribe','froid',2)
console.log(lista)//ok
console.log('---------------------')

function mediaAvali(lista){
    if(lista.length === 0){
        return 0 
    }
    const somaMedia = lista.reduce((soma,lista)=>soma+lista.avali,0)//mesmo não entendo muito bem,foi a unica maneira que funcionou,procurar saber mais sobre reduce depois
    return somaMedia / lista.length
}
// mediaAvali(lista)
let a = mediaAvali(lista)
console.log(`A média das avaliações:${a}`)
console.log('---------------------')

function exibirInfo(lista){
    lista.forEach((el)=>{
        console.log(`Nome:${el.titulo}\nAutor:${el.autor}\nAvaliação:${el.avali}`)
        console.log('---------------------')
    })
}
exibirInfo(lista)
