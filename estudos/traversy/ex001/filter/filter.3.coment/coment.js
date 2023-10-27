const cx2 = document.querySelector('#cx2')
const adiAnt = document.querySelector('#adiAntes')
const adiDep = document.querySelector('#adiDepois')
const remover = document.querySelector('#remov')
const cursosSelecionados = document.querySelector('#selec')
const texto = document.querySelector('#itexto')
//--todos essas const: Essa linha cria uma constante chamada cx2 que representa um elemento do DOM com o ID cx2
const cursos = ['HTML','CSS','JavaScript','Angular','React','PHP']
//: Cria uma constante cursos que é um array contendo strings de diferentes cursos.

let indice = 0//:Essa variável é utilizada para criar identificadores únicos para os novos elementos criados dentro da função criarNovoCurso.

function criarNovoCurso(curso){
    const novoElement = document.createElement('div')
    novoElement.setAttribute('id','c' + indice)
    novoElement.setAttribute('class','border')
    novoElement.innerHTML = curso//o curso q ele receber vai ser escrito

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','radio_curso')

    comandos.appendChild(radio)
    novoElement.appendChild(comandos)

    return novoElement// Isso significa que quando você chama a função criarNovoCurso, ela executa todas as operações dentro dela (como criar elementos, definir atributos, etc.) e, em seguida, retorna o elemento resultante.
}

/*
basicamente essa função vai ser criada como base para criar outros elementos html do mesmo estilo,ent todos as vezes que for digitado um novo elemento no input texto ele vai ser criado com essa mesma estrutura,ao invés de ficar copiando e colando esse código várias vezes é mais fácil automatizar isso.
 */


cursos.map((el,i)=>{
    const novoElement = criarNovoCurso(el)
    cx2.appendChild(novoElement)
    indice++
})

/*
 ele percorre o array cursos e retorna o elemento.Vai ser utilizado essa const para chamar a função criarNovoCurso com o parâmetro elemento do array,assim adicionando os elementos da função no cx2 e o indice++ é utilizado para q cada vez q for adicionado um novoElement no cx2 vai incrementar +1 no indice que foi usado na function:novoElement.setAttribute('id','c' + indice)
 */


function cursoSeleci(){
    const todosRadios =[...document.querySelectorAll('input[type=radio]')]
    const radioSeleci = todosRadios.filter((el)=>{
        return el.checked
    })
    return radioSeleci[0]//o que vai ser retornado aqui vai ser o input radio que foi selecionado aqui e não diretamente a div com o texto
}

/*
ele vai percorrer todos os elementos que possuirem a propriedade input radio,depois de percorrer ele vai filtrar esses elementos e ver qual deles vai estar checado depois de indentificar qual foi checado ele retorna o resultado na const radioSeleci,depois de filtrar ele retorna o primeiro que foi checado e dado como selecionado por isso o return radioSeleci[0]
 */


cursosSelecionados.addEventListener('click',()=>{
    const radioSeleci = cursoSeleci()//aqui está armazenado a div que foi selecionada
    if(radioSeleci != undefined){//se for diferente de undefined
       const cursos2 = radioSeleci.parentNode.previousSibling.textContent// **2
       window.alert(cursos2)
    } else{
        alert('Selecione um curso')
    }
    
})
/*
--literalmente é :o input selecionado,o pai dele,o irmão anterior do pai dele que no caso é o texto pois o texto tbm conta como um elemento ,e eu quero extrair esse texto(literalmente uma familia) 
radioSeleci: Esta é a variável que armazena o input de rádio que foi selecionado. Ela foi obtida através da função cursoSeleci().
radioSeleci.parentNode:  *parentNode* retorna o *elemento pai* desse input. Ou seja, é o elemento que contém o input de rádio.
previousSibling:retorna o *irmão anterior do elemento*. No contexto deste código, espera-se que o irmão anterior seja o elemento que contém o texto do curso.
textContent: tentando obter o texto do elemento irmão anterior ao elemento pai do radioSeleci

 */


remover.addEventListener('click',()=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){
        const cursos2 = radioSeleci.parentNode.parentNode//**1
        cx2.removeChild(cursos2)
    } else{
        alert('Selecione um curso')
    }
   
})
/*
ele vai remover um dos elementos do cx2,ele vai usar novamente a função cursoSeleci pois apartir dela que vou saber se foi selecionado ou não o input(por isso a importância da function,imagina copiar e colar toda vez aquele código),é usado o parentNode duas vezes para descobrir o avô do radioSeleci que no caso seria a div em que está o pai do radioSeleci e que tbm ta o texto php,por isso foi usado parentNode duas vezes ao invés do usado anteriormente,pode se ser usado o removeChild como usei pois o cursos2 vai receber o avô do parentNode que ja ta dentro de cx2,ou simplesmente pode ser usado cursos2.remove() que vai se auto remover,aliás todos os eventos possuem o if para caso o botão for clicado sem receber nenhuma informação,é uma maneira de lidar com isso

*/


adiAnt.addEventListener('click',()=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){//if pai // se o radio for selecionado executa esse
        if(texto.value != ''){//if filho // se o texto for diferente de vazio executa esse
       const cursos2 = radioSeleci.parentNode.parentNode
       const novoCurso = criarNovoCurso(texto.value)// aqui vai receber o texto do input como argument
       cx2.insertBefore(novoCurso,cursos2)//adiciona o novo curso antes do curso selecionado
    }else{
        alert('Curso não digitado')
    }
    }else{
        alert('Selecione um curso')
    }
})
/*
esse evento é criado para adicionar um novo elemento antes do elemento selecionado,nesse caso iremos usar duas funções,o do cursoSelecionado e o do criarNovoCurso;a const cursoSelecionado é colada aqui novamente para podermos criarmos outra const que já foi criada anteriormente para termos a div avô,a const novoCurso vai receber o valor da função de criarNovoCurso que vai receber o valor do texto do input como valor para ser criado um novo elemento;no cx2.insertBefore é feito para adicionar o novo elemento antes do elemento que eu queira assim sendo:novoCurso que é a constante que receber o novo elemento criado e o cursos2 que é a div avô assim vai adicionar esse elemento antes da div.
Agr explicando os ifs,o if pai é usado para verificar se o curso foi selecionado ou não,já o if filho é feito para verificar se o valor de texto foi escrito ou não 

*/


adiDep.addEventListener('click',()=>{
    const radioSeleci = cursoSeleci()
    if(radioSeleci != undefined){ //if pai
        if(texto.value != ''){//if filho
       const cursos2 = radioSeleci.parentNode.parentNode
       const novoCurso = criarNovoCurso(texto.value)
       cx2.insertBefore(novoCurso,cursos2.nextSibling)//uma gambiarra **3
       console.log(cursos2)
    } else{
        alert('Curso não digitado')
    }
    } else{
        alert('Selecione um curso')
    }
})
/*
esse evento é criado para adicionar um novo elemento depois do elemento selecionado,nesse caso iremos usar duas funções,o do cursoSelecionado e o do criarNovoCurso;a const cursoSelecionado é colada aqui novamente para podermos criarmos outra const que já foi criada anteriormente para termos a div avô,a const novoCurso vai receber o valor da função de criarNovoCurso que vai receber o valor do texto do input como valor para ser criado um novo elemento;Só que não possui o insertAfter então como faremos?Usaremos uma gambiarra que vai ser assim:vamos usar o elemento novo antes do próximo irmão do elemento selecionado,assim ficando entre o elemento selecionado e o irmão dele assim ficando na frente do curso que foi selecionado
Agr explicando os ifs,o if pai é usado para verificar se o curso foi selecionado ou não,já o if filho é feito para verificar se o valor de texto foi escrito ou não 

*/