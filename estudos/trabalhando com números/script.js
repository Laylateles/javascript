window.alert('Seja bem-vindo(a) ao meu site!')
function clicar(){
    var n = Number(window.prompt('Digite um número:'))
    var d = n * 2
    var m = n / 2
    var res = window.document.getElementById('res')
    res.innerHTML = `O dobro de ${n} é ${d} e a metade é ${m}`
}