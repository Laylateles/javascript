var num =document.querySelector('input#n')
var lista = document.querySelector('select#list')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar() {
    var num =document.querySelector('input#n')
    var lista = document.querySelector('select#list')
    var res = document.querySelector('div#res')
    if(isNumero(num.value) && !inLista(num.value, valores)) { 
       valores.push(Number(num.value))
       var item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
} 

function finalizar(){
    var res = document.querySelector('div#res')
   if(valores.length == 0){
    window.alert('Digite algum valor antes de finalizar!')
   } else{
    var total = valores.length//pra saber a quantidade d números
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
    for(var pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / valores.length//consegui sozinha!!
    res.innerHTML = '' // zerar o valor
    res.innerHTML += `<p>Ao todo foram <strong>${total}</strong> números cadastrados</p>`
    res.innerHTML += `<p> O maior valor informado foi <strong>${maior}</strong> </p>`
    res.innerHTML += `<p>O menor valor informado foi <strong>${menor} </strong></p>`
    res.innerHTML += `<p>A soma dos números cadastrados foi <strong>${soma}</strong> </p>`
    res.innerHTML += `<p>A média dos número é <strong>${media.toFixed(2)}</strong></p>`
   }
}








