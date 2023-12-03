const numero = document.querySelector('.numero')

let res = false
let tempo = 3000//3seg

numero.innerHTML = 'Processando....'
setTimeout(()=>{
    res = true//só vai ser executado dps de 3seg
},tempo)

if(res){
    numero.innerHTML = 'Deu tudo certo'
    numero.classList.remove('erro')
    numero.classList.add('ok')
} else{
    numero.innerHTML = 'Deu tudo errado'
    numero.classList.remove('ok')
    numero.classList.add('erro')
}

