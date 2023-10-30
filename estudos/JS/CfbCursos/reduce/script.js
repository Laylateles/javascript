const text_array = document.querySelector('#array')
const reduzir = document.querySelector('#reduz')
const res = document.querySelector('#res')

const elementos_array = [1,2,3,4,5,6]
let ant = []
let atu = []
text_array.innerHTML = elementos_array

reduzir.addEventListener('click',(evt)=>{
   res.innerHTML= elementos_array.reduce((anterior,atual,i,arr)=>{
        ant.push(anterior)//não é o numeral anterior,é o retorno
        atu.push(atual)
        return  atual - anterior//res = 3
        // return  anterior - atual// res= -19 nesse caso a ordem importa
    })
    res.innerHTML+= '<br>' + ant
    res.innerHTML+= '<br>' + atu
})
