function calcular(){
    var data = new Date
    var ano = data.getFullYear()
    var num = Number(window.prompt('Digite sua idade:'))
    var nasci = ano - num
    var res = window.document.getElementById('res')
    res.innerHTML = `Sua idade é ${num} anos e nasceu em ${nasci}`
}
//a poha da ordem q você faz o código importa!!!!!
//faz-se na ordem em q vai ser executada!!!