function fatorar(){
    var n =Number(window.document.getElementById('num').value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<h3>Calculando ${n}!</h3>`
    var c = n
    var fat = 1
    while(c > 1){
        res.innerHTML +=`${c} x `
        fat *= c //  Correspondente ao cálculo fat = fat * c
        c--
    } res.innerHTML +=` 1 = <strong>${fat}</strong>`
}