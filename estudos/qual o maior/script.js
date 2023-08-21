function clicar() {
    var n1 =Number(window.prompt('Digite um número:'))
    var n2 =Number(window.prompt('Digite outro número:'))
    var res = window.document.getElementById('res')
    if(n1 > n2) {
    res.innerHTML = `Analisando os valores ${n1} e ${n2},o maior valor é <strong>${n1}</strong>`
    } else if (n1 == n2) {
     res.innerHTML = `Analisando os valores ${n1} e ${n2},os valores são <strong>IGUAIS</strong>`
    } else {
        res.innerHTML = `Analisando os valores ${n1} e ${n2},o maior valor é <strong>${n2}</strong>`
    }
}