const data = new Date()

const mes = data.getMonth()
//console.log(mes)
let test = ''
switch (mes) {//vou trabalhar com o mes que vai ser recebido
    case 0:
        test = '01'
        //console.log(`0${data.getDate()}/Janeiro/${data.getFullYear()}`),maneira mais dificil
        break
    case 1:
        test = '02'
        //console.log(`0${data.getDate()}/Fevereiro/${data.getFullYear()}`)
        break
    case 2:
        test = '03'
        //console.log(`0${data.getDate()}/Março/${data.getFullYear()}`)
        break
    case 3:
        test = '04'
        //console.log(`0${data.getDate()}/Abril/${data.getFullYear()}`)
        break
    case 4:
        test = '05'
        //console.log(`0${data.getDate()}/Maio/${data.getFullYear()}`)
        break
    case 5:
        test = '06'
        //console.log(`0${data.getDate()}/Junho/${data.getFullYear()}`)
        break
    case 6:
        test = '07'
        //console.log(`0${data.getDate()}/Julho/${data.getFullYear()}`)
        break
    case 7:
        test = '08'
        //console.log(`0${data.getDate()}/Agosto/${data.getFullYear()}`)
        break
    case 8:
        test = '09'
        //console.log(`0${data.getDate()}/Setembro/${data.getFullYear()}`)
        break
    case 9:
        test = '10'
        //console.log(`0${data.getDate()}/Outubro/${data.getFullYear()}`)
        break
    case 10:
        test = '11'
        //console.log(`0${data.getDate()}/Novembro/${data.getFullYear()}`)
        break
    case 11:
        test = '12'
        break
    default:
        console.log('Nenhum mês')
        break
}
console.log(`${(data.getDate()<10 ? '0'+data.getDate() : data.getDate())}/${test}/${data.getFullYear()}`)//operação ternária para verificar se o dia for menor que 10 para que seja adicionado o 0 antes
//console.log(Date.now())//Timestamp

//console.log(data.getMonth())

/*todos que podemos usar
->getDate() = Dia do mês
->getDay() = Dia da semana(numero)
->getFullYear() = ano com 4 digitos
->getHours() = horas
->getMiliseconds() = milisegundos
->getMinutes() = minutos
->getMonth() = mês//o mês se inicia no 0=janeiro
->getSeconds() = segundos
->getTime() = timestamp(milisegundos desde 1 de janeiro de 1970,00:00:00 UTC)
->Date.now() = timestamp(milisegundos desde 1 de janeiro de 1970,00:00:00 UTC)
->getTimezoneOFFset() = timezone da localidade
->setDate() = Define um dia do mês para a data
->setMonth() = Define um mês para a data
->setFullYear() = Define um ano par a data
->setHours() = Define horas
->setMinutes() = Define minutos
->setSeconds() = Define segundos
->setMiliseconds() = Define milisegundos
->toDateString() = retorna somente a data
*/
