function clicar(){
    var n1 =Number(window.prompt('Primeiro valor:'))
    var n2 =Number(window.prompt('Segundo valor:'))
    var a = n1 + n2
    var b = n1 - n2
    var c = n1 * n2
    var d = n1 / n2
    var res = window.document.getElementById('res')
    res.innerHTML = `<h3>Calculando...</h3>`
    var opc = window.prompt(`Valores informados ${n1} e ${n2}.
O que vamos fazer?
[1]Somar
[2]Subtrair
[3]Multiplicar
[4]Dividir`)
    if(opc == 0 || opc > 4){
        res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
    
    } else if(opc == 1){
        res.innerHTML += `${n1} + ${n2} = <strong>${a}</strong>`
    } else if(opc == 2){
        res.innerHTML += `${n1} - ${n2} = <strong>${b}</strong>`
    } else if(opc == 3){
        res.innerHTML += `${n1} * ${n2} = <strong>${c}</strong>`
    } else{
        res.innerHTML += `${n1} / ${n2} = <strong>${d}</strong>`
    }
}