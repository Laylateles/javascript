function arrayToList(lista){
    let minhaLista = null
     for(let i = lista.length-1; i >=0; i--){
       minhaLista = {value:lista[i],next:minhaLista}
     } 
    return minhaLista
}
 let res = arrayToList([8,9,2,3,5,1])
 console.log(res)

//sem progressos por enquanto

/*
-->constrói uma estrutura similar a do livro quando fornecido [1,2,3]
-->construir uma lista é mais fácil de ser construida ser for feita de trás pra frente
-->vai percorrer o array de trás pra frente??????olhar ex08 e chat
-->e para cada elemento adicionar um obj a lista
-->usar uma var local para armazenar a parte da lista que foi criada e usar um padrão parecido com :
list = {value:x,rest:list} para adicionar um elemento
-->fazer parecido com o ex 08 e no local do length-1-i colocar esse negócio acima
-->
-->
*/

function listToArray(){
    
}
//console.log(listToArray(arrayToList([10,20]))) vai receber a lsiat produzida pela função de cima
//essa function depende da outra

/*
-->produz um array a partir de uma lista
-->para percorrer uma lista o seguinte loop for pode ser usado:
for(var i = list; i ; i= i.rest){}
-->
*/

function prepend(el,list){//função auxiliar

}
//console.log(prepend(10,prepend(20,null)))

/*
-->criar uma nova lista com esse novo elemento adicionado ao inicio da lista original
-->
*/


function nth(li,n){

}
//console.log(nth(arrayToList([10,20]),1))//tbm depende da primeira function

/*
-->para percorrer uma lista o seguinte loop for pode ser usado:
for(var i = list; i ; i= i.rest){}
-->retorna o elemento que está na posição informada pelo número ou undefined caso não exista elemento em tal posição
-->olha para uma parte ainda menor do final da lista
-->
-->
-->
-->

*/

