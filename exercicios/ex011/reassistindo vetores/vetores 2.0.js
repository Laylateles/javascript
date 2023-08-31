var num = [2,6,3]
num[3] = 5
num.push(9)
var pos = num.indexOf(6)
console.log(`O valor 6 está na posição ${pos}`)
console.log(`O vetor possui ${num.length} elementos!`)

//coloca-se na ordem em que vai ser executado

for(var pos = 0 ;pos < num.length;pos++ ){
    //console.log(`${num[c]}`)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//a posição é o ${c} pois é o valor que vai ser repetido,entendeu?
//e o valor é o ${num[c]} pois vai mostrar o valor correspondente a posição que foi repetida!
//enquanto a variável c for menor que o comprimeto do array vai ser somado mais um

for(var pos in num ){
  //  console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//${num[pos]}===tipo qual número que é do posição 0 tlgd?;;
//a posição dentro do array num