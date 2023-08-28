function interagir() {
    var hora = new Date()
    var data =String(hora.getMonth())
    var res = window.document.getElementById('res')
    res.innerHTML = `O que eu recebi do sistema foi ${data}`
}