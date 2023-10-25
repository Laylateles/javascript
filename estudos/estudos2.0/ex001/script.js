const caixa_1 = document.querySelector('#cx1')
const caixa_2 = document.querySelector('#cx2')
const botao = document.querySelector('#botao')
const cursos = ['HTML','CSS','JavaScript','PHP','React','C++']

cursos.map((el,i)=>{
    const elementoNovo = document.createElement('div')
    elementoNovo.setAttribute('id','c' + i)
    elementoNovo.setAttribute('class','mini-box')
    elementoNovo.innerHTML = el
    caixa_1.appendChild(elementoNovo)

    elementoNovo.addEventListener('click',(evt)=>{
        let add = evt.target
        add.classList.toggle('selecionado')
    })
    
})
    botao.addEventListener('click',()=>{
    let cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    let cursosNaoSelecionados=[...document.querySelectorAll('.mini-box:not(.selecionado)')]
    cursosSelecionados.map((el)=>{
        caixa_2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa_1.appendChild(el)
    })
})
    
//parece q vai dar tudo errado mais no fim da certo!
//n desista layla,vc sabe q ama essa merda aq 