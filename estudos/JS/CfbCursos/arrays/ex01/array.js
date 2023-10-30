const valores = [2,3,6]
const iterarValores =valores[Symbol.iterator]()

const textos ='youtube'
const iterarTextos =textos[Symbol.iterator]()

console.log(iterarTextos.next())
console.log(iterarTextos.next())
console.log(iterarTextos.next())
console.log(iterarTextos.next())
console.log(iterarTextos.next())
console.log(iterarTextos.next())
console.log(iterarTextos.next())
console.log(iterarTextos.next())

console.log(iterarValores.next())
//{ value: 2, done: false }//quando o done retorna false quer dizer q n acabou
console.log(iterarValores.next())
//{ value: 3, done: false }
console.log(iterarValores.next())
//{ value: 6, done: false }
console.log(iterarValores.next())
//{ value: undefined, done: true }//quando retorna true quer dizer q acabou