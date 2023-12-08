const data_mes = document.querySelector('.div_data')
const data = new Date()
const mes = data.getMonth()
let test = ''
switch (mes) {
    case 0:
        test = '01'
        break
    case 1:
        test = '02'
        break
    case 2:
        test = '03'
        break
    case 3:
        test = '04'
        break
    case 4:
        test = '05'
        break
    case 5:
        test = '06'
        break
    case 6:
        test = '07'
        break
    case 7:
        test = '08'
        break
    case 8:
        test = '09'
        break
    case 9:
        test = '10'
        break
    case 10:
        test = '11'
        break
    case 11:
        test = '12'
        break
    default:
        console.log('Nenhum mês')
        break
}
data_mes.innerHTML = `${(data.getDate()<10 ? '0'+data.getDate() : data.getDate())}/${test}/${data.getFullYear()}`

const relogio = document.querySelector('.div_relogio')
function rel(){
    const data = new Date()
    let hora = data.getHours()//tem q ser uma variavel pois o valor vai mudar
    hora = hora < 10 ? '0'+ hora : hora
    let minuto = data.getMinutes() 
    minuto = minuto < 10 ? '0'+ minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? '0'+ segundo : segundo
    //se hora for menor que 10 ele adiciona o 0 se não ele só mostra a hora
    relogio.innerHTML = `${hora}:${minuto}:${segundo}`
}
const intervalo = setInterval(rel,1000)
//é como se ele estivesse em tempo real
//a cada 1000ms(1segundo),ele chama a função rel
//chama uma outra função,um time
rel()