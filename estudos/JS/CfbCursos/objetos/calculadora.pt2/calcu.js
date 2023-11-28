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
            if (typeof el === 'number') {//se o tipo do elemento for um numero ele adiciona
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

let sinal = false
let decimal= false

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal =false
        // display.innerHTML += evt.target.innerHTML//quando eu clicar no número ele vai ser adicionado ao evt e dps vai pegar o innerHTML do evt que no caso é um número
        if(evt.target.innerHTML == ','){
            if(!decimal){
                decimal = true
                if(display.innerHTML == ''){
                    display.innerHTML += '0' + ','
                    //falta essa parte\z
                } 
                else{
                    display.innerHTML += evt.target.innerHTML
                } 
            }
        } else{
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasSimb.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if(!sinal){//se não tiver sinal 
            sinal = true
            if(evt.target.innerHTML =='x'){
                display.innerHTML += '*'
            } else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaLimp.addEventListener('click',(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML = ''
})

teclaRes.addEventListener('click',(evt)=>{
    display.innerHTML += '='
})

// teclaLig.addEventListener('click',(evt)=>{

// })
















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



