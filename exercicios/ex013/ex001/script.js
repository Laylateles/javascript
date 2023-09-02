function adicionar(){
    var n = [Number(window.document.getElementById('n').value)]
    var res = window.document.getElementById('res')
    if(n == 0 || n > 100){
        window.alert('[ERRO] digite um número válido!')
    } else {
    for(var c = n - 1 ; c < n ;c++){
        res.innerHTML += `<p>Valor ${n} adicionado</p>`
    }
    } 

} 







