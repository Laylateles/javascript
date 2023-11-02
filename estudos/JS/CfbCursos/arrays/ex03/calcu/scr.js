const n1 =document.querySelector('#num1')
const n2 =document.querySelector('#num2')
const resultado =document.querySelector('#resultado')
const soma = document.querySelector('#soma')
const sub = document.querySelector('#sub')
const dividir = document.querySelector('#divi')
const multi = document.querySelector('#multi')
const limpar = document.querySelector('#limpar')

let valores =[n1,n2]//não foi convertido aq pq resultaria no valor de uma string

const op =[
    ()=>{
        return Number(n1.value) + Number(n2.value)
        },
    ()=>{
        resultado.innerHTML += Number(n1.value) - Number(n2.value)
       },
    ()=>{
        resultado.innerHTML += Number(n1.value) * Number(n2.value)
    },
    ()=>{
        resultado.innerHTML += Number(n1.value) / Number(n2.value)
    }
]
soma.addEventListener('click',()=>{
    let resu = op[0](valores)
    resultado.innerHTML += resu //precisa do inner esse para mostrar o resu
})
sub.addEventListener('click',()=>{
    op[1](valores) //não precisa criar um let para chamar
})
multi.addEventListener('click',op[2])//vai chamar o array da posição 2 quando clicar
divi.addEventListener('click',()=>{
    op[3](valores)
})
limpar.addEventListener('click',()=>{
    resultado.innerHTML =`Resultado:` + ''
})


/*
const op =[
    (val)=>{
        return Number(n1.value) + Number(n2.value)
        //resultado.innerHTML += Number(n1.value) + Number(n2.value)
        //3 maneiras de fazer esse código
        // let res = 0
        //  for(let v of val){
        //      res+= Number(v.value)//ele percorre o input e converte as strings para números
        //  }
        //  return res
        },
    ()=>{
        resultado.innerHTML += Number(n1.value) - Number(n2.value)
       },
    ()=>{
        resultado.innerHTML += Number(n1.value) * Number(n2.value)
        // let res = 1
        //  for(let v of valores){
        //      res *= Number(v.value)//ele percorre o input e converte as strings para números
        // }
        //  return res
    },
    (val)=>{
        resultado.innerHTML += Number(n1.value) / Number(n2.value)
    }
]
*/