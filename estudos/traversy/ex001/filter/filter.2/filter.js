const cx2 = document.querySelector('#cx2')
// const adicionar = document.querySelector('#adi')
// const remover = document.querySelector('#remov')
const cursosSelecionados = document.querySelector('#selec')
const cursos = ['HTML','CSS','JavaScript','Angular','React','PHP']

cursos.map((el,i)=>{
    const novoElement = document.createElement('div')
    novoElement.setAttribute('id','c' + i)
    novoElement.setAttribute('class','border')
    novoElement.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','radio_curso')

    comandos.appendChild(radio)

    novoElement.appendChild(comandos)

    cx2.appendChild(novoElement)
})

cursosSelecionados.addEventListener('click',(evt)=>{
    const todosRadios =[...document.querySelectorAll('input[type=radio]')]
    let radioSeleci = todosRadios.filter((el)=>{
        return el.checked
    })
    radioSeleci = radioSeleci[0]
    //const cursos2 = radioSeleci.parentNode.parentNode.firstChild.textContent
    const cursos2 = radioSeleci.parentNode.previousSibling.textContent
    radioSeleci=radioSeleci[0]
    console.log(cursos2)
})

// previousSibling---irmão anterior