const nome = document.querySelector('#nome')
const porta = document.querySelector('#num1')
const blindagem = document.querySelector('#num2')
const municao = document.querySelector('#num3')
const radi_militar = document.querySelector('#mili')
const radi_normal = document.querySelector('#norm')
const botao_adici = document.querySelector('#botão_adc')  
const resultado = document.querySelector('#res')

radi_militar.addEventListener('click', () => {
    blindagem.value = 0
    municao.value = 0
    nome.value = ''
    porta.value = 0
    blindagem.removeAttribute('disabled')//*1
    municao.removeAttribute('disabled')
})
radi_normal.addEventListener('click', () => {
    porta.value = 0
    nome.value = ''
    blindagem.value = 0 //*2
    municao.value = 0
    blindagem.setAttribute('disabled', true)//*3
    municao.setAttribute('disabled', true)
})


//---------------------------------------------------------------------
class Carro {//classe pai
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
    }
}
class Militar extends Carro {//classe filho
    constructor(nome,portas,blindagem,munição) {
        super(nome, portas)
        this.blind = blindagem
        this.muni = munição
    }
}
// ------------------------------------------------------------------


let carros = []
function gerenciarCarros() {
    resultado.innerHTML = ''
    carros.forEach((el, i) => {
        const div = document.createElement('p')
        div.setAttribute('class', 'carro')
        div.setAttribute('id', i)//*5

        //--------------------------------------------------
        const botao_exc = document.createElement('button')
        botao_exc.setAttribute('class', 'btn cx1')
        botao_exc.innerHTML = 'Excluir'

        //--------------------------------------------------
        botao_exc.addEventListener('click', (evt) => {
            const remover = evt.target.parentNode.id//*6
            removerCarro(remover)
            gerenciarCarros()

        })
        div.innerHTML += `Nome:${el.nome}<br>Portas:${el.portas}<br>Blindagem:${el.blind}<br>Munição:${el.muni}`

        div.appendChild(botao_exc)
        resultado.appendChild(div)
    })
}

function removerCarro(quem) {
    carros = carros.filter((el, i) => {//*8
        return (i != quem)//*9
})
}

//-------------------------------------------------------------------------

botao_adici.addEventListener('click', () => {
    if(nome.value == '' || porta.value == 0){
        alert('Por favor digite valores válidos!')
    }else{
        if (radi_normal.checked) {
            const c1 = new Carro(nome.value, porta.value)
            carros.push(c1)
        } else {
            const c2 = new Militar(nome.value, porta.value, blindagem.value, municao.value)
            carros.push(c2)
        }
    }
    // dessa vez a class precisa estar fora pois vamos usar a herança dela em outro objeto
    gerenciarCarros()
})



/*
*1--quando for clicado vai remover a propriedade desabilitada
*2--é usado o value pq é número
*3--quando for clicado vai ser colocado o atributo disabled,o true é usado para mostrar que o disabled está ativo
*4--div.setAttribute('data-nome',el.nome)//uma maneira de manipular pelo nome digitado
*5--eu fiz essa modificação,pois quando apagava um carro que tinha o mesmo nome ele apagava os dois
*6--aqui ele pega o id do parentNode
*7-- // console.log(evt.target.parentNode.dataset.nome)//me retorna o nome do cara que eu quero remover
*8--o array carros vai receber o valor dessa filtragem
*9--se for verdadeiro ele vai ser adicionado no novo array de carros,i for diferente do quem ele vai adicionar no novo array,se for igual ele retira
*10--método filter cria um novo array que passarm no teste lógico dele
*/