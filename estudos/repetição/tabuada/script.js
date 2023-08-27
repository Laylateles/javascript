function contar() {
    var n =Number(window.document.getElementById('cal').value)
    var res = window.document.getElementById('res')
    res.innerHTML =`<h3>Tabuada de ${n}</h3>`
    var c = 1
    while(c <= 10){
        res.innerHTML += `<p>${n} x ${c} = <strong>${n * c}</strong></p>`
        c++ 
    }
}
