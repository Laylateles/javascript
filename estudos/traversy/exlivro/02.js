for(var n1 = 1;n1 <= 100;n1+=1){
     if(n1 % 3 == 0){
        console.log('Fizz')
    } else if (n1 % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(`${n1}`)
    }
      if(n1 % 5 == 0 && n1 % 3 == 0){
        console.log('FizzBuzz')
    } //teve q ser feito por fora pois não faz parte da condicional anterior
}

// segundo exercicio concluido!