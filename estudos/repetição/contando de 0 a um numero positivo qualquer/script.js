function contar(){
    var n =Number(window.document.getElementById('inum').value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<h3>Contando de 0 até ${n}<h3>`
    for(var c = 0 ;n >= c; c++){
    res.innerHTML += `${c}➡`
    } res.innerHTML +=`❤`
} // TO TAO FELIZ QUE CONSEGUIIIII