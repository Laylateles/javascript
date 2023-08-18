//RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1 // o fatorial de 1 é um,por isso retorna 1
    } else {
        return n * fatorial(n-1) //o número n multiplicado pelo número digitado,menos ele mesmo tbm é uma maneira de se calcular o fatorial (5 x 4!)
    }

}

var fat = fatorial(3)
console.log(`O número digitado fatorado é ${fat}`)

// fatorial : 5! = 5 x 4 x 3 x 2 x 1 ou 5! = 5 x 4! oque está sendo feito aq encima