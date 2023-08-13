function gerar() {
    var numero = window.document.getElementById('inum')
    var res = window.document.getElementById('res')
    var n =Number(numero.value)
    if (n < 0){
       res.innerHTML = `O número não possui tabuada dentre os números positivos!`
    } else {
        for(var t = n ; t >= n; t *= n){
            res.innerHTML += `A tabuada do número ${n } é : ${t}`
        }
    }
}

//tentar ver a aula amanhã pra ver se ta certo,pq por algum motivo o google n quer abrir o site