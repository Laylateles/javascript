// const div = [...document.getElementsByTagName("div")]
// const divTodas = [...document.getElementsByClassName("border")]
// const especial =[...document.getElementsByClassName('border')][2]

const queryId = document.querySelector('#test')
const query_div =[...document.querySelectorAll('div')]
const queryClass1 =[...document.querySelectorAll(".border")]
const queryClass2 =[...document.querySelectorAll('.border')][2]

// console.log(divTodas)
// console.log(div)
console.log(queryId)
console.log(queryClass1)
console.log(queryClass2)
console.log(divCursos)

// o query selector vai no documento e pega a primeira div que ele encontrar (só uma!!)
// se for o querySelectorAll ai ele pega todas as divs
// querySelector é mais dinâmico,melhor usar ele,se for pra usar a class especifica que é uma classe,se for um id especifica que é um i