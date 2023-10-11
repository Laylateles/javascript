function isEven(n){
    if(n % 2 == 0){
        return true
    } else if (n % 2 == 1){
        return false
    } else{ 
       return isEven(-n) //feito para retornar a function n negativo
    }
}
console.log(isEven(-1)) //esse foi o meu código que funciona mas não como o exercicio foi proposto

function isEven(n) {
    if (n == 0) { 
        return true
    } else if (n == 1){
     return false;
    } else if (n < 0) {
    return isEven(-n);
    } else{
    return isEven(n - 2) // isso é feito para o valor que for digitado verificar se é par ou ímpar
   }
  }
  console.log(isEven(25))

//feito,mas ainda prefiro o meu código!!