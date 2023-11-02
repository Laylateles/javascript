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
    (val)=>{
        let res = 0
         for(let v of val){
             res+= Number(v.value)//ele percorre o input e converte as strings para números
         }
         return res
        },
    ()=>{
       let res =null //não sei por onde iniciae
       for(v of valores){
        res -= Number(v.value)
       }
       return res
    },
    ()=>{
        let res = 1
         for(let v of valores){
             res *= Number(v.value)//ele percorre o input e converte as strings para números
        }
         return res
    },
    (val)=>{
        let res = null  //não sei por onde iniciae
         for(let v of val){
            res/= Number(v.value)//ele percorre o input e converte as strings para números
        }
            return res
    }
]
soma.addEventListener('click',()=>{
    let resu = op[0](valores)
    resultado.innerHTML += resu
})
sub.addEventListener('click',()=>{
    let resu = op[1](valores)
    resultado.innerHTML += resu
})
multi.addEventListener('click',()=>{
    let resu = op[2](valores)
    resultado.innerHTML += resu
})
divi.addEventListener('click',()=>{
    let resu = op[3](valores)
    resultado.innerHTML += resu
})


limpar.addEventListener('click',()=>{
    resultado.innerHTML =`Resultado:` + ''
})

//calcu simples,dois campos de texto
//um campo para entrada dos valores
//executar aas funções apartir desse valores
//vai ter o botão de :soma,sub,multi,divi
//adicionar as funções da calculadora dentro d um array 
// soma.addEventListener('click',(val)=>{//o valo n pode ser o msm val do outro script pq esse val vai estar recebendo o elemento
/*
pq não convertemos o n1 e n2 = n1 e n2 já são referências a elementos HTML (<input>), e ao acessar a propriedade value deles, obtemos o valor como uma string.

*/


/*
 let res = null // não consegui pensar por qual número o res pode inicializar
         for(let v of valores){
           res -= Number(v.value)//ele percorre o input e converte as strings para números
        }
        return res
*/