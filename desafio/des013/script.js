function clicar(){
    var nome =window.prompt('Qual é o nome do aluno?')
    var n1 =Number(window.prompt(`Primeira nota de ${nome}:`))
    var n2 =Number(window.prompt(`Segunda nota de ${nome}:`))
    var media = (n1 + n2) / 2
    var res = window.document.getElementById('res')
    res.innerHTML = `<h2>Analisando a situação de ${nome} </h2>`
    res.innerHTML += `Com as notas ${n1.toFixed(2).replace('.',',')} e ${n2.toFixed(2).replace('.',',')},<strong> a média é ${media.toFixed(2).replace('.',',')}</strong>.`
    if(media < 3) {
        res.innerHTML += `<p>Com a média abaixo de 3,0,o aluno está <strong>REPROVADO</strong></p>`
    } else if(media >= 3 || media < 6) {
        res.innerHTML += `<p>Com a média entre 3,0 e 6,0,o aluno está de <strong>RECUPERAÇÃO</strong></p>`
    } else {
        res.innerHTML += `<p>Com a média acima de 6,0,o aluno está <strong>APROVADO</strong></p>`
    } // esse res n está funcionando!!
}