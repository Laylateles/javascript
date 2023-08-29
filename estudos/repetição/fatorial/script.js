function fatorar(){
    var n =Number(window.document.getElementById('num').value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<h3>Calculando ${n}!</h3>`
    for(var c = n; c <= 20 ;c--){
    res.innerHTML +=`${n}x${c} = `
    }
}// termino amanhã