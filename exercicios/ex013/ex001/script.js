function adicionar(){
    var n =Number(window.document.getElementById('n').value)
    var res = window.document.getElementById('res')
    if(n == 0 || n > 100){
        window.alert('[ERRO] digite um número válido!')
    } else {
    for(var c = n ; c >= 1; c++){
      var num =[n]
        res.innerHTML = `Valor ${n} adicionado`
    }
    }
}







