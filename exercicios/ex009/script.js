function clicar(){
    var inicio = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var resu = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resu.innerHTML = `Impossível contar!`
    } else {
        resu.innerHTML = `Contando:`
        var i =Number(inicio.value)
        var f =Number(fim.value)
        var p =Number(passo.value)

        //  if(p = 0){
        //      window.alert('Passo inválido,considerando PASSO 1!')
        //      p = 1 ------- por algum motivo o google trava quando coloco pra rodar
        //  }
          if (i < f) {
        //contagem crescente
        for(var c = i ; c <= f ; c += p){
            resu.innerHTML += ` ${c} `
        }
       } else {
        // contagem regressiva
        for(var c = i ; c >= f ; c -= p)
        resu.innerHTML += ` ${c} `
       }
    }
    
}

/* o primerio else: o number está convertendo os dados digitados no input para poder realizar a soma.
o segundo if é para se o valor inicial digitado for menor q o fim,assim a var contador se inicia no i(var c = i),enquanto o contador for menor q f (c <= f),o valor do contador somado ao passo(c += p)
o mesmo esquema no else mas enves d somar o passo vc diminui(c -= p)









*/