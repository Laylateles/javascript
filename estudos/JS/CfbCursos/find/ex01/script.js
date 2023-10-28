const array = document.querySelector('#array')
const text = document.querySelector('#texto')
const botaoPesq = document.querySelector('#pesq')
const resultado = document.querySelector('#res')

const elementos_array = ['html','css','java','php','react']
array.innerHTML = elementos_array


botaoPesq.addEventListener('click',(evt)=>{
    resultado.innerHTML = `String não encontrada`//para caso o valor não for encontrado
    const ret = elementos_array.find((el,i)=>{
        if(el.toUpperCase() == text.value.toUpperCase()){//para aceitar a pesquisa em letras maiúsulas
            resultado.innerHTML = `A string procurada foi : ${el} e está na posição ${i}`
            return true
        }
    })
})


/* PARA O CASO DO ARRAY SENDO NÚMERO
const elementos_array = [2,3,6,7,9,12,15,23,26]
array.innerHTML = elementos_array //mostra o array

function pesq(el,i){
    if(el == text.value){//se o elemento for igual ao número digitado
        resultado.innerHTML = `O número encontrado ${el} na posição ${i}`
        return true// se retornar true ele encontrou 
    } 
}

botaoPesq.addEventListener('click',(evt)=>{
  resultado.innerHTML = `Valor não encontrado`//para caso o valor não for encontrado
  const ret = elementos_array.find(pesq)//dá pra usar uma arrow function como no botaoPesq
  console.log(ret)
})
*/

