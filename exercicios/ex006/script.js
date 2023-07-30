function carregar() {
    var men = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var corpo = window.document.getElementById('principal')
    var data = new Date()
    var hora = data.getHours()
    men.innerHTML = `Olá o seu horário é ${hora} horas`

    if (hora < 12){
       //Bom dia
       img.src = 'dia-pq.jpeg'
       document.body.style.backgroundColor = '#FDCB46'
    } else if (hora >= 12  && hora <= 18) {
        //boa tarde
        img.src = 'tarde-pq.jpeg'
        document.body.style.backgroundColor = '#E0863F'
    } else {
        //boa noite
        img.src = 'noite-pq.jpeg'
        document.body.style.backgroundColor = '#322119'
    }
}

