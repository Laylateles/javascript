function verificar(){
    var verifi =Number(window.prompt('Qual o ano que você quer verificar?'))
    var ano = verifi / 4
    var res = window.document.getElementById('res')
    res.innerHTML = `<h2>Analisando o ano de ${verifi}...</h2>`
    if(verifi % 4 == 0){
    res.innerHTML += `O ano de ${verifi} <strong>É BISSEXTO</strong>✔️`
    } else {
    res.innerHTML += `O ano de ${verifi} <strong>NÃO É BISSEXTO</strong>❌`
    }
}