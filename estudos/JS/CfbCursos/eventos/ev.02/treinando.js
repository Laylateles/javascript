const cx1 = document.querySelector('#cx1')
const cx2 = document.querySelector('#cx2')
const copiar =document.querySelector('#copiar')
const todosCursos = [...document.querySelectorAll('.border')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        curso.classList.toggle('selecionado')//*1
    })
})


copiar.addEventListener('click',()=>{
    const cursosSeleci=[...document.querySelectorAll('.selecionado')]
    const cursosNaoSeleci=[...document.querySelectorAll('.border:not(.selecionado')]//*3
    console.log(cursosNaoSeleci)
    cursosSeleci.map((el)=>{
        cx2.appendChild(el)//*2
    })
    cursosNaoSeleci.map((el)=>{
        cx1.appendChild(el)
    })
})


/*
*1--o elemento tem a classe selecionado?Se tem ele remove a classe selecionado,se não tem ele adiciona a classe.(no HTML)
*2--vai anexar um elemento filho ao caixa 2,ele anexou os elementos de cursosSeleci no cx2
*3--ele lista os elementos que não possuam a classe selecionado(de forma genérica incluindo as tags meta e body),falando é assim: traga pra mim todos da class curso que não possuem a classe selecionado,assim limitando a busca

*/