function clicar() {
    var n1 =Number(window.prompt('Digite um número:'))
    var res =window.document.getElementById('res')
    if(n1 % 2 == 0) {
        res.innerHTML = `O número ${n1} que foi digitado é <strong>PAR!</strong>`
    } else {
        res.innerHTML = `O número ${n1} que foi digitado é <strong>ÍMPAR!</strong>`
    }
}