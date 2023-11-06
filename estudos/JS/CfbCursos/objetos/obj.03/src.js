const botao = document.querySelector('#botão')
// const res = document.querySelector('#res')

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
      return  this.nome
    }
    getIdade(){
       return this.idade
    }
}

let pessoas =[]//serve para armazenar os objetos
const res = document.querySelector('#res')

const addPessoa=()=>{
    res.innerHTML = ''
    pessoas.map((el)=>{
        const div = document.createElement('div')
        div.setAttribute('class','pessoa')
        div.innerHTML = `Nome:${el.getNome()} e idade${el.getIdade()}`
        res.appendChild(div)
    })
}


botao.addEventListener('click',(evt)=>{
    let nome2= document.querySelector('#nome1')
    let idade2=document.querySelector('#num1')
    const p1 = new Pessoa(nome2.value,idade2.value)
    pessoas.push(p1)
    nome2.value = ''
    idade2.value = ''
    nome2.focus()
    addPessoa()//importante para chamar a função,se não ela não funciona
})

