const idade = [1,2,6,23,13,66,28,10]
const maior = idade.filter((value)=>{//recebe os mesmos parametros
    if(value >= 18){      
         return value   
      }
})
const menor = idade.filter((value)=>{//recebe os mesmos parametros
    if(value < 18){      
         return value   
      }
})
console.log(maior)
console.log(menor)






// const idade = [1,2,6,23,13,66,28,10]
// const maior = idade.filter(idadeMaior18)//ele retorna um novo array filtrado por uma condição
//essa const maior é usado para armazenar o valor retornado de idade.filter

//function idadeMaior18(value,indice,array){//posso usar essa função como parâmetro
// function idadeMaior18(value){
//     if(value >= 18){    // o value vai ser dado por 'idade que é um array'; que vai ser retornado
//         return value    // filtrado com uma condição
//     }
// }
//console.log(maior)//o console é nessa const pois é ela que está recebendo o valor dessa function
/*
por padrão o filter passa pra function que ele está operando o valor,a posição desse valor,e o array
não precisa usar os 3 parâmetros


*/