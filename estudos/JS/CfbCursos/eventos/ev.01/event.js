const c1 = document.querySelector('#test1')
const cursos =[...document.querySelectorAll('.border')]//transformar em um array para ser interativo

cursos.map((el)=>{//percorre os elementos do array
    el.addEventListener('click',()=>{//para adicionar o evento clicar em todos os elementos
        el.classList.add('destaque')//adiciona o destaque em todos os elementos
    })
})


//function msg(){
//   alert('clicou!')
//}

//const msg =()=>{
//    alert('clicou')
//}

//c1.addEventListener('click',msg) // aqui deve ser escrito dps da função,meio que esta chamando ela
//c1.addEventListener('click',()=>{ //aqui estou usando uma arrow function
//    alert('clicou')              //ela possui nenhum parâmetro por isso os parênteses
//})

c1.addEventListener('click',(evt)=>{//esse evt é para capturar quem disparou o evento
    // console.log(evt.target) //o target mostra o evento que disparou o evento
      const el = evt.target
      el.classList.add('destaque') // adiciona a class na const el
  })




