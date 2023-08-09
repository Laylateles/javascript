function clicar(){
    var inicio = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var resu = window.document.getElementById('res')
    if(inicio.value.length == 0 ){
        resu.innerText = 'Por favor digite um número válido!'
    } else {
        resu.innerHTML = 'seu número é válido!'
    }
}