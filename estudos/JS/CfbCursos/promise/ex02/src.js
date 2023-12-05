const numero = document.querySelector('.numero')
const promessa = document.querySelector('.promessa')

promessa.addEventListener('click', () => {
    numero.innerHTML = 'Processando...'
    promisse()//só chamar a função
    .then((retorno) => {//eles vão tomar uma decisão dps que a função for chamada
        numero.innerHTML = retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
    })//se deu certo cai aqui
    .catch((retorno) => {//está assim diretamente ligada a função
        numero.innerHTML = retorno
        numero.classList.remove('ok')
        numero.classList.add('erro')
    })//se der errado cai aq
})


function promisse() {
    let promise = new Promise((result_ok, result_erro) => {//poderia colocar ela dentro do evento
        //não tive escolha,ela é executada sozinha
        let res = true
        let tempo = 3000
        setTimeout(() => {
            if (res) {
                result_ok('Deu tudo certo')
            } else {
                result_erro('Deu tudo errado')
            }
        }, tempo)
    })
    // promise.then((retorno) => {
    //     numero.innerHTML = retorno
    //     numero.classList.remove('erro')
    //     numero.classList.add('ok')
    // })//se deu certo cai aqui
    // promise.catch((retorno) => {
    //     numero.innerHTML = retorno
    //     numero.classList.remove('ok')
    //     numero.classList.add('erro')
    // })//se der errado cai aq
    return promise//agr precisa return o valor
}
numero.innerHTML = 'Esperando....'