function parimp(n){ // o 'n' aq vai ser substituido pelo paramentro escrito na chamada!
    if(n % 2 == 0) { // para verificar se o número é par ou impar.
        return 'par' // o n dividido por 2 e da resto 0 ent é par,se der algum resto é ímpar!
    } else {
        return 'ímpar' 
    }
}
var num = parimp(8) // o número escrito aqui é o meu parâmetro
 // chamada tem que estar dentro d uma variável.
console.log(`O número digitado é ${num}`)