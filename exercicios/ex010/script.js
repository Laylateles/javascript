function gerar() {
    var numero = window.document.getElementById('inum')
    var selc = window.document.getElementById('select')
    if (numero.value.length == 0){
       window.alert('Por favor digite um número!')
    } else {
        var n =Number(numero.value)
        var c = 1
        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `selc${c}` //importante pro php
            selc.appendChild(item)
            c++
        }
    }
}

function limpar() {
    var selc = window.document.getElementById('select')
    selc.innerHTML = ''//para assim poder limpar e começar vazio a tabuada
}


/*
var item = document.createElement('option')----- criando elemento option
item.text = `${n} x ${c} = ${n*c} `---- o text é para mostrar oq vai escrito na var item
selc.appendChild(item)---mostrar elemento filho q no caso é o item,item q é filho do select
 while(c <= 10)---- o número q vai ser múltiplicado ao número q foi digitado ele vai até 10



*/