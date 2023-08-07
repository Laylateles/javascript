function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var mensagem = window.document.getElementById('mensa')
    var img = window.document.createElement('img')
    img.setAttribute('id','foto')
    mensagem.innerHTML= `Olá seu horário é ${hora} horas.`
}