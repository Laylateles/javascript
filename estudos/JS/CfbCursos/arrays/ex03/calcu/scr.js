const n1 =Number(document.querySelector('#num1').value)
const n2 =Number(document.querySelector('#num2').value)
const resu = document.querySelector('#resu')
const soma = document.querySelector('#soma')
const sub = document.querySelector('#sub')
const dividir = document.querySelector('#divi')
const multi = document.querySelector('#multi')


let valores = [n1,n2]

const op =[
    (val)=>{
       let res = 0
        for(v of val){
            res+=v
        }
        return res
    },
//     sub.addEventListener('click',(val)=>{
//     res = 0
//     for(v of val){
//         res-=v
//     }
//     return res
//    })
]

console.log(op[0](valores))

//calcu simples,dois campos de texto
//um campo para entrada dos valores
//executar aas funções apartir desse valores
//vai ter o botão de :soma,sub,multi,divi
//adicionar as funções da calculadora dentro d um array 
// soma.addEventListener('click',(val)=>{//o valo n pode ser o msm val do outro script pq esse val vai estar recebendo o elemento
//     res = 0
//     for(v of val){
//         res+=v
//     }
//     return res
//    })