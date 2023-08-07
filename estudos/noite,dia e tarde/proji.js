function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var mensagem = window.document.getElementById('mensa')
    var nome = window.prompt('Digite seu nome por favor:')
    var img = window.document.getElementById('imagem')
    mensagem.innerHTML= `Olá seu horário é ${hora} horas.`
    if (hora < 12) {
        img.src = 'dia.jpeg'
        document.body.style.backgroundColor ='#ddb441'
        mensagem.innerHTML += `<p>Olá ${nome}! Bom dia!</p>`
    } else if(hora < 18){
        img.src = 'tarde.jpeg'
        document.body.style.backgroundColor ='#e79b28'
        mensagem.innerHTML += `<p>Olá ${nome}! Boa Tarde!</p>`
    } else {
        img.src = 'noite.jpeg'
        document.body.style.backgroundColor ='#585454'
        mensagem.innerHTML += `<p>Olá ${nome}! Boa Noite!</p>`
    }
}
