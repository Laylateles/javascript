let nome2= document.querySelector('#nome1')
let idade2=document.querySelector('#num1')
const botao = document.querySelector('#botão')
const res = document.querySelector('#res')

botao.addEventListener('click',(evt)=>{
    class Pessoa{
        constructor(nome,idade){
            this.nome = nome
            this.idade = idade
        }
    }
    const p1 = new Pessoa(nome2.value,idade2.value)
    nome2.value = ''
    idade2.value = ''
    nome2.focus()
    res.innerHTML += `O nome  digitado foi ${p1.nome} e idade ${p1.idade}<br>`
})