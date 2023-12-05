const numero = document.querySelector('.numero')

let promise = new Promise((result_ok,result_erro)=>{
    //é feito uma promessa para dps de ser executado o código,ser executado a promise
    //o que eu quero retornar
    let res = true
    let tempo = 3000//3seg
    setTimeout(()=>{//é executado dps de 3seg
        if(res){//se res verdadeiro
            result_ok('Deu tudo certo')//aq é o retorno
        } else{
            result_erro('Deu tudo errado')//os parâmetros recebem isso aq
        }
     },tempo)
})
promise.then((retorno)=>{//quem preenche aq é a variael que possui o retorno que no caso aqui é o result_ok,no mesmo caso do outro
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})//se deu certo cai aqui
promise.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove('ok')
    numero.classList.add('erro')
})//se der errado cai aq


// let res = false
// let tempo = 3000//3seg

numero.innerHTML = 'Processando....'
// setTimeout(()=>{//ele não espera o tempo,só continua o código
//     res = true
//     //independente se for true ou false o resultado vai ser o mesmo
//     //só vai ser executado dps de 3seg
// },tempo)

// if(res){
//     numero.innerHTML = 'Deu tudo certo'
//     numero.classList.remove('erro')
//     numero.classList.add('ok')
// } else{
//     numero.innerHTML = 'Deu tudo errado'
//     numero.classList.remove('ok')
//     numero.classList.add('erro')
// }

