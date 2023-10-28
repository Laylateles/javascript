function countBs(palavra){
    let i = 0 // é o contador da letra 'B'
    for(let cont = 0;cont < palavra.length; cont++){
        if(palavra[cont] === 'B'){ // vai procurar na posição dentro da palavra se tem alguma letra indêntica a letra 'B'
            i++
        }
    } 
    return i //tem q ser posto aq para não fazer parte do lopping 
}
let res = countBs('BarBeiro')  // tem q ser posto dentro de um let para poder ter o valor retornado da função,sem ele o código vai dar erro por questão de escopo
console.log(res)

 function countChar(palavra,letra){
    let cont = 0
    for(let i = 0; i < palavra.length;i++){
        if(palavra[i] === letra){
            cont++
        }
    }
    return cont
}

let num = countChar('amakanjasaaab','b')
console.log(num)

//exercicio concluido!!! Muito felizzz
