function calcular(){
    var a =Number(window.prompt('Qual o valor de a?'))
    var b =Number(window.prompt('Qual o valor de b?'))
    var c =Number(window.prompt('Qual o valor de c?'))
    var delta = b**2 - 4 * a * c
    var res = window.document.getElementById('res')
    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    res.innerHTML += `<p>A esquação atual é <strong>${a}x<sup>2</sup> + ${b}x + 2 = 0 </strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>\u0394 = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p></strong>`
    if(delta < 1) {
        res.innerHTML += `<strong>(não existe valor de delta negativo)</strong>`
    } else {
        res.innerHTML += `O valor calculado foi <strong><mark>\u0394 = ${delta}</mark></strong>`
    }
}