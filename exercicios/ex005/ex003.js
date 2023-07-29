var agora = new Date()
var diasem = agora.getDay()

// Os dias da semana pro JS:
// 0-  Domingo
// 1- Segunda-feira
// 2- Terça-feira
// 3- Quarta-feira
// 4- Quinta-feira
// 5- Sexta-feira
// 6- Sábado
// console.log(diasem)

switch(diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default :
    console.log('Dia inválido')
    break
}