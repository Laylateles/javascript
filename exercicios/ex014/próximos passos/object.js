var amigo = {nome:'José' ,
sexo: 'M' ,
peso: 89,
engordar(p){ // função dentro de variável!
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)