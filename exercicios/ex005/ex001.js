var idade = 17
console.log(`Você tem ${idade} anos`)
 if (idade < 16){
    console.log('Não vota')
} else  if (idade < 18 || idade >= 67) {
        console.log('Voto opcional')
    } else {
        console.log('Vota')
    }


// vou ler cada linha em uma linguagem mais informal
// se a idade for menos que 16 não vota,o que é vdd
// se não então,se a idade for maior ou igual a 16 e idade menor que 18 então voto opcional
// funciona sem o idade maior e igual que 16,pois se todos abaixo de 16 não votam então menor que 18 só é 16 e 17 e o js ja entende isso logicamente
// se não então voto obrigatório que é o restante que não se encaixa nessas condições!