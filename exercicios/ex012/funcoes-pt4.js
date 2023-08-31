function fator(n) {
    var fat = 1
    for(var c = n ; c > 1 ;c--){
        fat *= c // fat = fat * c
    }
    return fat
}

var res = fator(6)
console.log(`O fatorial do número digitado é ${res}`)
