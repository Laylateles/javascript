function reajustar() {
    var nome = window.prompt('Qual o nome do funcionário?')
    var salario =Number(window.prompt(`Qual o salário de ${nome}?`))
    var reajuste =Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var porcent = salario * reajuste / 100
    var novo = salario + porcent
    var res =window.document.getElementById('res')
    res.innerHTML = `<h1>${nome} recebeu um aumento salarial!!</h1>`
    res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-br',{style:'currency',currency :'BRL'})}.</p>`
    res.innerHTML += `Com um aumento de ${reajuste}%, o salário vai aumentar ${porcent.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} no próximo mês.`
    res.innerHTML += `<p>E a partir daí,${nome} vai passar a ganhar ${novo.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.</p>`
}