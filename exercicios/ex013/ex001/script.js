var num =window.document.getElementById('n')
var teste = Number(num.value)
var lista = window.document.getElementById('list')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n){
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
    if(isNumero(teste) && !inLista(teste, valores)) { 
        valores.push(teste)
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
} 


/*for(var c = 0; c < num.length;c++){
    res.innerHTML += `<p>Valor ${num} adicionado</p>`
}
function finalizar(){
   // res.innerHTML += `Ao todo,temos ${num.length} números cadastrados`
}*/








