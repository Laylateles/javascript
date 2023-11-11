let carro = []
function adicionarCarro(modelo,cor,ano){//1°
    class Carro {
        constructor(modelo,cor,ano){//2°
            this.model = modelo
            this.cor = cor
            this.ano = ano
        }
    }    
    const novoCarro = new Carro(modelo,cor,ano)//3°
    carro.push(novoCarro)
}
let a =adicionarCarro('civic','rosa',2023)//esses parâmetros vão ser passados nos três lugares
let b =adicionarCarro('celta','preto',1990)//está sendo adicionado no array
let d =adicionarCarro('audi','prata',2022)
console.log(carro)//o obj dentro do array
console.log(`----------------------------`)

function mediaCarro(carro){
    if(carro.length === 0){//se o array estiver vazio
        return 0
    }
    const somaAno = carro.reduce((soma,carro)=> soma + carro.ano,0)//soma se inicializa em 0,ele cria uma function q recebe o soma e o carro,soma se inicializa com 0 e percorre o ano do array carro e o acumula
    return somaAno / carro.length
}
let c = mediaCarro(carro)//a maneira de chamar é usando o próprio array
console.log(`Média dos anos dos carros:${c}`)
console.log(`----------------------------`)

function informCarros(carro){//o array carro
    carro.map((el)=>{
        console.log(`Modelo do carro:${el.model}\nCor:${el.cor}\nAno:${el.ano}`)//tem q ser o mesmo do objeto la encima no this,this.nome,this.idade,entendeu?
        console.log('---------------------------')
    })
}
informCarros(carro)//não esquecer de chamar a função