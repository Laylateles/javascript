function clicar(){
    var inicio = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var resu = window.document.getElementById('res')
    if (inicio.value.length == fim.value.length) {
        resu.innerHTML = 'Não foi possível contar,pois os números são iguais!'
    } else {
    resu.innerHTML = `Contando de ${inicio} até ${fim}`
    }
}