function iniciar(){
    var dia =new Date()
    var data = dia.getDate()
    var day = dia.getDay()
    var ano = dia.getFullYear()
    var hora = dia.getHours()
    var min = dia.getMinutes()
    var seg = dia.getSeconds()
    var res = window.document.getElementById('res')
    res.innerHTML = `Dia: ${data}`
    res.innerHTML += `<p>Dia da semana: ${day} </p>` // o to string n funciona!!
    res.innerHTML += `<p>Ano: ${ano}</p>`
    res.innerHTML += `<p>Hora: ${hora}</p>`
    res.innerHTML += `<p>Minutos: ${min}</p>`
    res.innerHTML += `<p>Segundos: ${seg}</p>`
    /*
    if(day == 0) {
        res.innerHTML += `<p>Dia da semana:Domingo</p>`
    } else if (day == 1) {
        res.innerHTML += `<p>Dia da semana:Segunda</p>`
    } else if (day == 2){
        res.innerHTML += `<p>Dia da semana:Terça-Feira</p>`
    } else if (day == 3){
        res.innerHTML += `<p>Dia da semana:Quarta-Feira</p>`
    } else if(day == 4) {
        res.innerHTML += `<p>Dia da semana:Quinta-Feira</p>`
    } else if(day == 5) {
        res.innerHTML += `<p>Dia da semana:Sexta-Feira</p>`
    } else {
        res.innerHTML += `<p>Dia da semana:Sábado</p>`
    }
    */
}

// quase completo!!!