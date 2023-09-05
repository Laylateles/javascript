function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    var num= Number(window.document.getElementById('n').value)
    var valores = []
    var res = window.document.getElementById('res')
    if(isNumero(num) && !inLista(num , valores)){
        window.alert('Tudo ok!')
    } else {
        window.alert('[ERRO] digite um número válido!')
    }
} 
/*for(var c = 0; c < num.length;c++){
    res.innerHTML += `<p>Valor ${num} adicionado</p>`
}
function finalizar(){
   // res.innerHTML += `Ao todo,temos ${num.length} números cadastrados`
}*/








