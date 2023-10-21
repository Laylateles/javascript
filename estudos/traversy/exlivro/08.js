function reverseArray(reverse){
    let test =[]
    reverse.map((el)=>{
        test.unshift(el)
    })
    return test
}

let rever = reverseArray([2,7,5,8,9,11])
//console.log(rever)
//1/2 completado

function reverseArrayInPlace(revert){
    for(let i = 0; i < Math.floor(revert.length / 2); i++){
        let a = revert[i]
          revert[i] =revert[revert.length - 1 - i]
          revert[revert.length - 1 - i] = a
    }
    return revert
}
let b = reverseArrayInPlace([2,3,4,5,6,7])
console.log(b)

//2/2 completado,foi mais dificil esse segundo
/*
-->funciona da mesma forma que o método reverse ,invertendo os elementos do próprio array que foi fornecido como argumento
-->AMBAS AS FUNÇÕES NÃO DEVEM USAR O MÉTODO REVERSE(ME FUDI!)
-->o truque é inverter o primeiro e o último elemento,depois o segundo e o penúltim
*/