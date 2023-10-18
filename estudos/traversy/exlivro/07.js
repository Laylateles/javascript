function range(ini,fim){
    if(ini == undefined || fim == undefined){
       return 1
    } else {
        let cont =[]
        for(var a = ini; a <= fim; a++){
         cont.push(a)
         
        } if(ini > fim){
            for(var b = ini ; b >= fim; b--){
                cont.push(b)
            }
        }
        return cont
    }
}
var res = range(10,3)
console.log(`${res}`)

//terminado a primeira parte !!!!!!

/*
se inicializa com um let=[] xxx
método push para adicionar valores xxx
retornar o array no final da função xxx
vai ter um looping xxx
vai ter dois loopings diferentes,um para contar valores crescentes e outro decrescente xxx
retorna um array contendo todos os valores apartir de ini,até o valor fim(concluindo) xxx
----------------------------------------------------------------------------------------------------

-->ex bônus,modificar essa função para aceitar um terceiro argumento,que indica o tamanho do incremento usado para construir o array.

*/

function sum(num){

}

/*
-->ele ai receber um array de números como argumento,e retorna a soma deles
-->
-->

*/