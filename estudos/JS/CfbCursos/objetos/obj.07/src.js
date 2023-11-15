const nome = document.querySelector('#nome')
const porta = document.querySelector('#num1')
const blindagem = document.querySelector('#num2')
const municao = document.querySelector('#num3')
const radi_militar = document.querySelector('#mili')
const radi_normal = document.querySelector('#norm')
const botao_adici=document.querySelector('#botão_adc')
const botao_exc=document.querySelector('#botão_exc')  
const resultado = document.querySelector('#res')

radi_militar.addEventListener('click',()=>{
    blindagem.value = 0
    municao.value = 0
    nome.value = ''
    porta.value = 0
    blindagem.removeAttribute('disabled')//quando for clicado vai remover a propriedade desabilitada
    municao.removeAttribute('disabled')
})

radi_normal.addEventListener('click',()=>{
    blindagem.setAttribute('disabled',true)//quando for clicado vai ser colocado o atributo disabled
    municao.setAttribute('disabled',true)//o true é usado para mostrar que o disabled está ativo
    porta.value = 0
    nome.value = ''
    blindagem.value = 0//é usado o value pq é número
    municao.value = 0
})
//---------------------------------------------------------------------
class Carro{//classe pai
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
    }
}
class Militar extends Carro{//classe filho
    constructor(nome,portas,blindagem,munição){
        super(nome,portas)
        this.blind = blindagem
        this.muni = munição
    }
}
// ------------------------------------------------------------------
let carros = []

function gerenciarCarros(){
    resultado.innerHTML = ''
    carros.forEach((el)=>{
    const div = document.createElement('p')
    div.setAttribute('class','carro')
    div.addEventListener('click',(evt)=>{
        const car = evt.target
        car.classList.toggle('selecionado')
    })
    div.innerHTML +=`Nome:${el.nome}<br>Portas:${el.portas}<br>Blindagem:${el.blind}<br>Munição:${el.muni}`
    resultado.appendChild(div)
   })
}

botao_exc.addEventListener('click',()=>{
    console.log('remover')
})

botao_adici.addEventListener('click',()=>{
    // dessa vez a class precisa estar fora pois vamos usar a herança dela em outro objeto
    if(radi_normal.checked){
        const c1 = new Carro(nome.value,porta.value)
        carros.push(c1)
    } else{
        const c2 = new Militar(nome.value,porta.value,blindagem.value,municao.value)
        carros.push(c2)
    }
    console.log(carros)
    gerenciarCarros()
})

// quase completp,termino amanhã

