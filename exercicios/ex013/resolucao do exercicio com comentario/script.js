var num =document.querySelector('input#n')//input number
var lista = document.querySelector('select#list')//select q vai aparecer os números
var res = document.querySelector('div#res')//que vai aparecer a soma e tudo mais
var valores = []//array aonde os números vão ser armazenados

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
/* 
  inLista(n , l) procura se o valor n está na lista l
se a posição do número digitado no array for diferente de -1 então retorna verdadeiro se não se ele tiver a posição -1 retorna falso
*/

function adicionar() { // função onclick
    var num =document.querySelector('input#n')
    var lista = document.querySelector('select#list')
    var res = document.querySelector('div#res')
    if(isNumero(num.value) && !inLista(num.value, valores)) { 
    valores.push(Number(num.value))//para adicionar os números no vetor(valores)
    var item = document.createElement('option')//criou o elemento option dentro de lista
    item.text = `Valor ${num.value} adicionado`//a forma q vai mostrar é um text e vai mostrar o num
    lista.appendChild(item)//aqui é para a option ser adicionado dentro de lista
    res.innerHTML = ''//aqui é para ser apagado automatico
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''//para apagar o número digitado
    num.focus()//e mostrar o cursor no input
} 
/*--!inLista(num.value, valores),Esta função verifica se o valor já está na lista. O operador ! nega a condição, então a condição é verdadeira se o valor NÃO estiver na lista.
--O isNumero é uma função que vai validar o número que foi digitado de uma maneira mais fácil,o (num) é a variável por onde o número vai ser digitado;
--O !inLista quer dizer que um número que não esteja na lista,o (num,valores) é por onde vai entrar o número e aonde vai ser colocado os números q no caso navariável composta.
--O num.value foi colocado pq foi melhor para ser convertido dentro da função,e as variaveis mesmo fora da function ainda foi preciso colocar elas dentro pois o código n tava funcionando sem ser assim.
*/

function finalizar(){//função finalizar
    var res = document.querySelector('div#res')
   if(valores.length == 0){
    window.alert('Digite algum valor antes de finalizar!')
   } else{
    var total = valores.length//pra saber a quantidade d números
    var maior = valores[0]//posição 0
    var menor = valores[0]
    var soma = 0
    var media = 0
    for(var pos in valores){
        soma += valores[pos]//para fazer um looping e somar os números
        if(valores[pos] > maior){//se valores[pos] for maior que maior ent maior é o valores[pos]
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / valores.length//consegui sozinha!!//fora do for pois n precisa do lopping
    res.innerHTML = '' // zerar o valor
    res.innerHTML += `<p>Ao todo foram <strong>${total}</strong> números cadastrados</p>`
    res.innerHTML += `<p> O maior valor informado foi <strong>${maior}</strong> </p>`
    res.innerHTML += `<p>O menor valor informado foi <strong>${menor} </strong></p>`
    res.innerHTML += `<p>A soma dos números cadastrados foi <strong>${soma}</strong> </p>`
    res.innerHTML += `<p>A média dos número é <strong>${media.toFixed(2)}</strong></p>`
   }
}
/*
valores[pos] > maior){: Verifica se o valor atual é maior que o valor armazenado na variável maior. Se for, atualiza maior */









