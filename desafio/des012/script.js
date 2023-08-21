function verificar() {
    var n1 =Number(window.prompt('Qual era o preço anterior do produto?'))
    var n2 =Number(window.prompt('Qual o valor do produto agora?'))
    var res = window.document.getElementById('res')
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    if(n1 < n2) {
        var sub = n2 - n1
        var porc =  sub * 100 / n1
        res.innerHTML += `<p>O produto custava <strong>${n1.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}</strong> e agora custa <strong>${n2.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}. </strong></p>`
        res.innerHTML += `Hoje o produto está mais caro.`
        res.innerHTML += `<p>O valor subiu <strong>${sub.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}</strong> em relação ao preço anterior.</p>`
        res.innerHTML += `Uma variação de <strong>${porc.toFixed(1).replace('.' , ',')}%</strong> pra cima.`
    } else {
        var som = n1 - n2
        var porc = som * 100 / n1
        res.innerHTML += `<p>O produto custava <strong>${n1.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}</strong> e agora custa <strong>${n2.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}. </strong></p>`
        res.innerHTML += `Hoje o produto está mais barato.`
        res.innerHTML += `<p>O valor caiu <strong>${som.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}</strong> em relação ao preço anterior.</p>`
        res.innerHTML += `Uma variação de <strong>${porc.toFixed(1).replace('.' , ',')}%</strong> pra baixo.`
    }
}