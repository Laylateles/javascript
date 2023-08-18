function fator(n) {
    var fat = 1
    for(var c = n ; c > 1 ; c--) { // se inicia em n ; enquanto c for maior q 1 ; ele perde um n°
        fat *= c // 
        // o fatorial vezes o contador
    }
    return fat
}

var res = fator(5)
console.log(`O fatorial do número digitado é ${res}`)
