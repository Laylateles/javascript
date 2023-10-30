const text_array = document.querySelector('#array')
const verificar = document.querySelector('#verifi')
const res = document.querySelector('#res')

const elementos_array = [12,15,11,17,16,2,20,21]
text_array.innerHTML = elementos_array

verificar.addEventListener('click',(evt)=>{
    const ret = elementos_array.some((el,i,arr)=>{
        if(el >= 18){
            res.innerHTML = `O número está em conformidade é o número ${el} que está na posição ${i}`
        }
        return el >= 18//como no array tem pelo menos um número que condiz com essa regra ent ele está em conformidade
    })
    if(!ret){
        res.innerHTML = `Array não conforme!`
    }
})

//EVERY
// verificar.addEventListener('click',(evt)=>{
//     const ret = elementos_array.every((el,i,arr)=>{
//         if(el >= 18){
//            return el
//         } else{
//             res.innerHTML = `O número que não está em conformidade é o número ${el} que está na posição ${i}`
//         }
//     })
//     if(ret){
//         res.innerHTML = `Tudo ok!`
//     }
// })
