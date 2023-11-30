//criação das teclas
const div_teclas = document.querySelector('#div_teclas')
const array_teclas = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', 0, ',', '/', '=', '(', ')', 'lig/des', 'limpar']
array_teclas.forEach((el, i) => {
    const button = document.createElement('button')
    button.setAttribute('id', i)
    button.setAttribute('class', 'tecla')
    button.innerHTML = el
    div_teclas.appendChild(button)

    switch (el) {
        case ',':
        case '(':
        case ')':
            button.classList.remove('op')
            button.classList.add('num')
            break
        case '=':
            button.classList.add('res')
            break
        case 'lig/des':
            button.classList.remove('op')//para remover uma class
            button.classList.add('lig')
            break
        case 'limpar':
            button.classList.add('limp')
            button.classList.remove('op')
            break
        default:
            if (typeof el === 'number') { //se o tipo do elemento for um numero ele adiciona
                button.classList.add('num')//para ser adicionado a class ja criada
            } else {
                button.classList.add('simb')
                button.classList.add('op')
            }
            break
    }

})


const display = document.querySelector('#display')
const teclaLimp = document.querySelector('.limp')
const teclasNum = [...document.querySelectorAll('.num')]
const teclasSimb = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')

let sinal = false//não tem nenhum sinal inicialmente
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true
                if(display.innerHTML ==''){
                    display.innerHTML = '0,'
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
        display.innerHTML += evt.target.innerHTML
    }

    })
})//tento terminar amanhã

teclasSimb.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {//se não tiver sinal 
            sinal = true
            decimal = false
            if (evt.target.innerHTML == 'x') {
                display.innerHTML += '*'
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaLimp.addEventListener('click', (evt) => {
    decimal = false
    sinal = false
    display.innerHTML = ''
})

teclaRes.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res //preciso converter a virgula em ponto!
})

// teclaLig.addEventListener('click',(evt)=>{

/*
if (evt.target.innerHTML == ',') {//ate aq ta certo
            if (!decimal) {
                decimal = true
                display.innerHTML += evt.target.innerHTML
            }
        }else{
        display.innerHTML += evt.target.innerHTML
    }
*/
















/*
uma maneira de se fazer:
if(el=== ',' || el === '(' || el === ')'){
        button.classList.remove('op')
        button.classList.add('num')
    }
    if(el === '='){
        button.classList.add('res')
    }//para adicionar uma class a um elemento especifico
    if(el === 'lig/des'){
        button.classList.remove('op')//para remover uma class
        button.classList.add('lig')
    }
    if(el === 'limpar'){
        button.classList.remove('op')
    }
// const numeros = array_teclas.filter(item => typeof item === 'number') uma maneira de ver se ele é um número ou uma string
// const strings = array_teclas.filter(item => typeof item === 'string' && isNaN(item))


*/



