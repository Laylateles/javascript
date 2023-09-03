function adicionar(){
    var n = Number(window.document.getElementById('n').value)
    var num = [n]
    var res = window.document.getElementById('res')
    if( num <= 0 || num > 100){
        window.alert('[ERRO] digite um número válido!')
    } else {
    for(var c = 0 ; c < num.length;c++){
        res.innerHTML += `<p>Valor ${num} adicionado</p>`
    }
    }
} 

/* function finalizar(){
    var n = Number(window.document.getElementById('n').value)
    var num = [n]
    var res = window.document.getElementById('res')
    res.innerHTML += `Ao todo,temos ${num.length} números cadastrados`
} */








