var teste = [2,3,4]// posição sempre se começa no 0
teste[3] = 8 // o número entre chaves é a posição e o número dps do recebe é o valor
teste[4] = 1
teste.length // mostra o comprimento / quantas posições tem
teste.sort() // colocar em ordem crescente
teste.push(10)  // coloca o número entre parêntese na ultima posição
//var num = teste.indexOf(5)--- se colocar um valor q n tem ent ele vai mostrar um valor negativo como resposta, e deve estar em uma var
var num = teste.indexOf(3)
console.log(`O número 3 está na posição ${num}`)
console.log(`${teste}`)
console.log(`possui ${teste.length} posições`)
console.log(`posso mostrar separadamente ${teste[0]}`) // para mostrar separadamente: var[posição]