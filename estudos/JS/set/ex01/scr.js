const caixa  = document.querySelector('#cx1')

let musicas = new Set(['teste','teste1','teste','lero','lerolero','teste1'])//ele não leva em conta o segundo elemento repitido q no caso aq é o 'teste',ele não imprime no console o segundo elemento,somente o primeiro
musicas.add('legal')//para adicionar um elemento
musicas.forEach((el)=>{//para percorrer a var musicas
    //caixa.innerHTML += " " + el//para dar um espaço antes
})
console.log(musicas)




//Uso de Template Strings
// const teste = 'teste'
// const nome = 'layla'
// const frase = `Eu sou a ${nome}
//  e estou fazendo um 
//  ${teste}`

// caixa.innerText = frase
// console.log(frase)

