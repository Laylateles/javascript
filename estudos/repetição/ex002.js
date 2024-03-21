for(var a = 1; a <= 10 ;a++){
    console.log(`Fazendo testes,número:${a}`)
}

var i = 1
for(var c = i;c < 10 ;c++){
    console.log(`O número ${c},é um bom número!`)
}
//quando se é criada outra var,usa-se ela para os incrementos e teste lógico

var b = 1
var c = 2
if(c > b){
    for(var d = b;d < 10;d++){
        console.log(`O número ${b} é menor do que ${d}.`)
    }
} else { // b > c 
    for(var a = b; a < 10; a++) {
        console.log(`O número ${c} é menor que ${a}`)
    }
}