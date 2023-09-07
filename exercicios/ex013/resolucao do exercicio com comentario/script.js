function adicionar(){// função onclick
var num =Number(window.document.getElementById('n').value)//input number
var valores = []//variável composta
var res = window.document.getElementById('res')//saída
if(isNumero(num) && !inLista(num , valores)){ 
    window.alert('Tudo ok!')
} else {
    window.alert('[ERRO] digite um número válido!')
}
} 
/* O isNumero é uma função que vai validar o número que foi digitado de uma maneira mais fácil,o (num) é a variável por onde o número vai ser digitado;
O !inLista quer dizer que um número que não esteja na lista,o (num,valores) é por onde vai entrar o número e aonde vai ser colocado os números q no caso na variável composta.
*/

function isNumero(n){//função que recebe n como parâmetro(número)
if(Number(n) >= 1 && Number(n) <= 100){
    return true
} else{
    return false//não aparece na tela
}
}
/* se o número recebido(n) for maior ou igual a 1 e menor ou igual a 100,então vai retornar verdadeiro se não retorna falso
*/
function inLista(n , l){//Função que recebe n como parâmetro e l tbm(número,lista)
if(l.indexOf(Number(n)) != -1){
    return true
} else{
    return false
}
}
/* se a posição do número digitado no array for diferente de -1 então retorna verdadeiro se não se ele tiver a posição -1 retorna falso
*/

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









