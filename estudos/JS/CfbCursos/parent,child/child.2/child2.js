const cx1 =document.querySelector('#cx1')
const cursos = document.querySelectorAll('.border')
const arraiCursos = ['HTML','CSS','JS','MYSQL','JAVA','PHP','ANGULAR']

arraiCursos.map((el,i)=>{
    const novoElement = document.createElement('div') 
    novoElement.setAttribute('id',i)//coloca a posição do elemento como id
    novoElement.setAttribute('class','border')
    novoElement.innerHTML = el
    cx1.appendChild(novoElement)  
    //---------------------------------------------------------------------------
    const botao =document.createElement('img')
    botao.setAttribute('src','lixeira2.png')
    botao.style.cursor='pointer'
    novoElement.appendChild(botao)
    botao.addEventListener('click',(evt)=>{//o evt vai retornar o elemento clicado assim removendo-o
      cx1.removeChild(novoElement)
    })  
})
// const novoElement = document.createElement('div') //ele vai criar um elemento
// novoElement.setAttribute('id','test7')
// novoElement.setAttribute('class','border')//eu falo o atributo e o valor desse atributo
// novoElement.innerHTML = `teste`
//cx1.appendChild(novoElement)//append-->fixar filho


