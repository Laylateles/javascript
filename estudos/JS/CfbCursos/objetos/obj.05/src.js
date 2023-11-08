let nome2= document.querySelector('#nome1')
let idade2=document.querySelector('#num1')
const botao = document.querySelector('#botão')
const res = document.querySelector('#res')


let pess = []
botao.addEventListener('click',(evt)=>{
    const Pessoa = (nome,idade)=>({//precisa do parêntese antes
        nome : nome,
        idade : idade,
    })
    const add = Pessoa(nome2.value,idade2.value)
    pess.push(add)
    criarPessoa()
})

function criarPessoa(){
    res.innerHTML = ''
    pess.map((el)=>{
        let p = document.createElement('p')
        p.innerHTML = `Nome:${el.nome} <br> Idade:${el.idade}`
        res.appendChild(p)
    })
}





// const Pessoa = {
//     nome:'layla',
//     getNome: function(){//ela vai receber o valor da função
//         return this.nome
//     },

// }
// const p2 = Pessoa
// const p3 = Pessoa

// p3.nome = 'joao'//muda o nome de todas as constantes que estiverem recebendo o obj
// console.log(p2)
// console.log(Pessoa.getNome())