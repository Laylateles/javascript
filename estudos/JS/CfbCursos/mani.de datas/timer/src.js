//teve q ser colocado aq pois tava dando erro de inicialização
let ts_atual = null
let ts_alarme = null
let alarme_ativado = false 
let alarme_tocando = false

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

    if(alarme_ativado && !alarme_tocando){//se o alarme for igual a true e o alarme tocando for igual a false//não estiver tocando
        if(data.getTime() >= ts_alarme){//ele pega o timestamp atual e verifica se ele for maior que o timestamp do alarme 
            alarme_tocando = true
            //som_alarme.play(),ele aciona o som do alarme
            timer.classList.add('alarme')
        }
    }
}
const intervalo = setInterval(rel,1000)
//é como se ele estivesse em tempo real
//a cada 1000ms(1segundo),ele chama a função rel
//chama uma outra função,um time
rel()

const timer = document.querySelector('.timer')
const tempo_alarme = document.querySelector('#tempo_alarme')
const hora_alarme = document.querySelector('#hora_alarme')
const botao_ativar = document.querySelector('#botao_ativar')
const botao_parar = document.querySelector('#botao_parar')

//const som_alarme = new Audio('') aqui se direciona para o arquivo de aúdio
//som_alarme.loop = 3//um looping



botao_ativar.addEventListener('click',()=>{
    ts_atual = Date.now()//obtém o timestamp atual( é o que se passou em milissegundos desde 1 de janeiro de 1970)
    ts_alarme = ts_atual + (tempo_alarme.value*1000)//recebe o valor do timestamp atual mais o valor dado no timer vezes mil para transformar em milisegundos
    alarme_ativado = true//ativa o alarma
    const dt_alarme = new Date(ts_alarme)//aqui estou passando o timestamp do alarme e quando colocado no construtor new Date() ele é convertido para a hora do timestamp
    hora_alarme.innerHTML = 
    `Hora do Alarme:${(dt_alarme.getHours()<10?'0'+dt_alarme.getHours():dt_alarme.getHours())}:
    ${(dt_alarme.getMinutes()<10 ? '0'+dt_alarme.getMinutes() : dt_alarme.getMinutes())}:
    ${(dt_alarme.getSeconds()<10 ? '0'+dt_alarme.getSeconds() : dt_alarme.getSeconds())}`
    
})

botao_parar.addEventListener('click',()=>{
    alarme_ativado = false//o alarme desative
    alarme_tocando = false//o alarme para de tocar
    hora_alarme.innerHTML = `Hora do Alarme:`//reinicia o inner do horario
    tempo_alarme.value = 0//e zera o valor do input dado
    timer.classList.remove('alarme')//remove a class alarme do timer
    //som_alarme.pause()//para caso tiver o audio,ele pausa o audio
    //som_alarme.currentTime = 0//ele rebobina o audio
})
