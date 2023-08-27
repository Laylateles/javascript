function contar(){
    var n1 =Number(window.document.getElementById('n1').value)
    var n2 =Number(window.document.getElementById('n2').value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<h3>Contando de ${n1} até ${n2}</h3>`
    if(n1==n2){
        res.innerHTML +=`<p>Não é possível contar, pois os números são iguais 🏁</p>`
    } else if (n1 < n2){
        for(var c = n1 ; c <= n2 ; c++){
            res.innerHTML += ` ${c} 👉` 
        }res.innerHTML +=`🏁`
    } else {
        for(var c = n1 ; c >= n2 ;c--){
            res.innerHTML += ` ${c} 👉`
        }res.innerHTML +=`🏁`
    }
}