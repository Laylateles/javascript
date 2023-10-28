const cx2 = document.querySelector('#cx2')
const adiAnt = document.querySelector('#adiAntes')
const adiDep = document.querySelector('#adiDepois')
const remover = document.querySelector('#remov')
const cursosSelecionados = document.querySelector('#selec')
const texto = document.querySelector('#itexto')
const cursos = ['HTML','CSS','JavaScript','Angular','React','PHP']

let indice = 0

function tirarSelecionado(){
    const cursosSelecionados =[...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}


function criarNovoCurso(curso){
    const novoElement =document.createElement('div')
    novoElement.setAttribute('id','c' + indice)
    novoElement.setAttribute('class','border')
    novoElement.innerHTML = curso
    novoElement.addEventListener('click',(evt)=>{
        tirarSelecionado()//está chamando a função
        const evento = evt.target
        evento.classList.toggle('selecionado')
    })
    return novoElement
 
    // const comandos = document.createElement('div')
    // comandos.setAttribute('class','comandos')
    // const radio = document.createElement('input')
    // radio.setAttribute('type','radio')
    // radio.setAttribute('name','radio_curso')
    // comandos.appendChild(radio)
    // novoElement.appendChild(comandos)----- essas linhas foram apagdas pois o código vai ser modificado
}

cursos.map((el,i)=>{
    const novoElement = criarNovoCurso(el)
    cx2.appendChild(novoElement)
    indice++
})

function cursoSeleci(){
    const todosCursos =[...document.querySelectorAll('.selecionado')]
    return todosCursos[0]//retorno diretamente o curso selecionado
}

cursosSelecionados.addEventListener('click',(evt)=>{
    const todosCursos = cursoSeleci()
    if(todosCursos != undefined){
       const cursos2 = todosCursos.textContent
       window.alert(`Cursos selecionado: ${cursos2}`)
    } else{
        alert('Selecione um curso')
    }
    
})

remover.addEventListener('click',()=>{
    if(cursoSeleci()!= undefined){
        const cursos2 = cursoSeleci()//somente esse pois ja me retorna a div q eu quero
        cx2.removeChild(cursos2)
    } else{
        alert('Selecione um curso')
    }
   
})

adiAnt.addEventListener('click',(evt)=>{
    if(cursoSeleci() != undefined){
        if(texto.value != ''){
       const cursos2 = cursoSeleci()
       const novoCurso = criarNovoCurso(texto.value)// const novoElement = criarNovoCurso(el)
       cx2.insertBefore(novoCurso,cursos2)//adiciona o novo curso antes do curso selecionado
    }else{
        alert('Digite um curso')
    }
    }else{
        alert('Selecione um curso')
    }
})

adiDep.addEventListener('click',(evt)=>{
    if( cursoSeleci() != undefined){
        if(texto.value != ''){
       const cursos2 =  cursoSeleci()
       const novoCurso = criarNovoCurso(texto.value)
       cx2.insertBefore(novoCurso,cursos2.nextSibling)
    } else{
        alert('Digite um curso')
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