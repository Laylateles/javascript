function range(ini,fim,incr){
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



function sum(cont){
    let total = 0
    for(let a of cont){ //a var a vai percorrer o array e ver os números
        total += a
    }
    // for(let a = 0 ; a < cont.length; a++ ){  duas maneiras de percorrer o array
    //     total += cont[a]
    // }
    return total
} 

var res = sum(range(2,3,2)) //a função sum depende da função range pois recebe o array dele como parâ
console.log(`${res}`)

//EXERCICIO TERMINADO!!!