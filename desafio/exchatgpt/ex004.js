function calcularMedia(nota1=0, nota2=0 , nota3=0){
    return nota1 + nota2 + nota3 / 3
}
var a = calcularMedia(8,20,22)
console.log(`${a.toFixed(2)}`)