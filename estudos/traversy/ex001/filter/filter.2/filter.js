const cx2 = document.querySelector('#cx2')
const adiAnt = document.querySelector('#adiAntes')
const adiDep = document.querySelector('#adiDepois')
const remover = document.querySelector('#remov')
const cursosSelecionados = document.querySelector('#selec')
const texto = document.querySelector('#itexto')
const cursos = ['HTML','CSS','JavaScript','Angular','React','PHP']

let indice = 0
function criarNovoCurso(curso){
    const novoElement = document.createElement('div')
    novoElement.setAttribute('id','c' + indice)
    novoElement.setAttribute('class','border')
    novoElement.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','radio_curso')

    comandos.appendChild(radio)
    novoElement.appendChild(comandos)

    return novoElement
}



cursos.map((el,i)=>{
    const novoElement = criarNovoCurso(el)
    cx2.appendChild(novoElement)
    indice++
    
})



function cursoSeleci(){
    const todosRadios =[...document.querySelectorAll('input[type=radio]')]
    const radioSeleci = todosRadios.filter((el)=>{
        return el.checked
    })
    return radioSeleci[0]
}



cursosSelecionados.addEventListener('click',(evt)=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){
       const cursos2 = radioSeleci.parentNode.previousSibling// **2
       console.log(cursos2)
       window.alert(cursos2)
    } else{
        alert('Selecione um curso')
    }
    
})



remover.addEventListener('click',()=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){
        const cursos2 = radioSeleci.parentNode.parentNode
        console.log(cursos2)
        cx2.removeChild(cursos2)
    } else{
        alert('Selecione um curso')
    }
   
})



adiAnt.addEventListener('click',(evt)=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){
        if(texto.value != ''){
       const cursos2 = radioSeleci.parentNode.parentNode
       const novoCurso = criarNovoCurso(texto.value)// const novoElement = criarNovoCurso(el)
       cx2.insertBefore(novoCurso,cursos2)//adiciona o novo curso antes do curso selecionado
    }else{
        alert('Curso não digitado')
    }
    }else{
        alert('Selecione um curso')
    }
})

adiDep.addEventListener('click',(evt)=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){
        if(texto.value != ''){
       const cursos2 = radioSeleci.parentNode.parentNode
       const novoCurso = criarNovoCurso(texto.value)// const novoElement = criarNovoCurso(el)
       cx2.insertBefore(novoCurso,cursos2.nextSibling)//uma gambiarra **3
       console.log(cursos2)
    } else{
        alert('Curso não digitado')
    }
    } else{
        alert('Selecione um curso')
    }
})


// previousSibling---irmão anterior
 //const cursos2 = radioSeleci.parentNode.parentNode.firstChild.textContent
/*
**1--é o cursos 2 pois vai mostrar o avô do radio que esta selecionado q no caso é a div q está
**2--invés de colocar todo aquele código,foi criado uma função para ser mais facil de se usar,a função foi colocado dentro de uma const para ser usada,e colocada no inicio de cursos2;pois a função busca achar o radio q foi selecionado e depois de achá-lo buscar qual div que possui o texto foi selecionado por isso todo esse caminho
**3--ele é colocado antes do irmão dele,consequentemente sendo a frente dele
 //cursos2.remove()
   // cx2.removeChild(cursos2)//duas maneiras de remover um elemento
*/