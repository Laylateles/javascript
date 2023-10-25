const cx2 = document.querySelector('#cx2')
// const adicionar = document.querySelector('#adi')
const remover = document.querySelector('#remov')
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

function cursoSeleci(){//criada para dps ser chamada para n ficar duplicando cód
    const todosRadios =[...document.querySelectorAll('input[type=radio]')]
    const radioSeleci = todosRadios.filter((el)=>{
        return el.checked
    })
    return radioSeleci[0]
}

cursosSelecionados.addEventListener('click',(evt)=>{
    const radioSeleci = cursoSeleci()
    // if(radioSeleci == undefined){ duas maneiras de se fazer
    //     alert('Selecione um curso')
    // }
    if(radioSeleci != undefined){//se radioSeleci não for undefined:
       const cursos2 = radioSeleci.parentNode.previousSibling.textContent// **2
       window.alert(cursos2)
    } else{//se for:
        alert('Selecione um curso')
    }
    
})

remover.addEventListener('click',()=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){
        const cursos2 = radioSeleci.parentNode.parentNode
        cx2.removeChild(cursos2)
    } else{
        alert('Selecione um curso')
    }
    //cursos2.remove()
   // cx2.removeChild(cursos2)//duas maneiras de remover um elemento
})




// previousSibling---irmão anterior
 //const cursos2 = radioSeleci.parentNode.parentNode.firstChild.textContent
/*
**1--é o cursos 2 pois vai mostrar o avô do radio que esta selecionado q no caso é a div q está
**2--invés de colocar todo aquele código,foi criado uma função para ser mais facil de se usar,a função foi colocado dentro de uma const para ser usada,e colocada no inicio de cursos2;pois a função busca achar o radio q foi selecionado e depois de achá-lo buscar qual div que possui o texto foi selecionado por isso todo esse caminho

*/