const curso = ['html','css','java','php','react']
let c = curso.map((el,i)=>{
    return el
})

console.log(`${c}`)

const convertInt = (e) => parseInt(e)//ele converte a string para números
let dobrar = (e) => e*2
//let num = ['1','2','3','4'].map(convertInt)//conversão de cada string emm num e armaz em um array
let num = ['1','2','3','4'].map(dobrar)
console.log(num)