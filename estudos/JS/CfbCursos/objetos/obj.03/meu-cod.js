let nome2= document.querySelector('#nome1')
let idade2=document.querySelector('#num1')
const botao = document.querySelector('#botão')
const res = document.querySelector('#res')

function criarPessoa(){
    res.innerHTML = ''
    pessoa.map((el)=>{
        const p = document.createElement('p')
        res.appendChild(p)
        p.innerHTML += `O nome  digitado foi ${el.nome} e idade ${el.idade}<br>`
    })
}

let pessoa = []
botao.addEventListener('click',(evt)=>{
    class Pessoa{
        constructor(nome,idade){
            this.nome = nome
            this.idade = idade
        }
    }
    const p1 = new Pessoa(nome2.value,idade2.value)
    pessoa.push(p1)
    console.log(pessoa)
    nome2.value = ''
    idade2.value = ''
    nome2.focus()
    criarPessoa()
})

