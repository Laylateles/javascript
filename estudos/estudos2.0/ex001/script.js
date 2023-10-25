const caixa_1 = document.querySelector('#cx1')
const caixa_2 = document.querySelector('#cx2')
const botao = document.querySelector('#botao')
const cursos = ['HTML','CSS','JavaScript','PHP','React','C++']

cursos.map((el,i)=>{
    const elementoNovo = document.createElement('div')
    elementoNovo.setAttribute('id','c' + i)
    elementoNovo.setAttribute('class','mini-box')
    elementoNovo.innerHTML = el

    const lixeira = document.createElement('img')
    lixeira.setAttribute('src','remover.png')
    elementoNovo.appendChild(lixeira)
    caixa_1.appendChild(elementoNovo)

})
//terminar amanhã





 /*
 criar as div
 criar class e nome
 colocar elas na div cx1---appendChild
 criar o evento d clicar no botao
 e transferir aas div para caixa 2--
 depois se não estiver clicado no cx2 transferir para cx1
 
 */