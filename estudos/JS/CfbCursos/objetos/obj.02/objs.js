class Carro{//é como se toda essa informação fosse guardade dentro da classCarro e dps distribuida no obj new
    constructor(nome,tipo){
        this.nome = nome//não da para usar o let,tem q ser o this msm
        switch(tipo){//foi usado para q o cliente digite um número e caia em uma das alternativas
            case 1:
                this.tipo = 'esportivo'
                this.vmax = '200km/h'
                break
            case 2:
                this.tipo = 'trilha'
                this.vmax = '160km/h'
                break
            case 3:
                this.tipo = 'corrida'
                this.vmax = '300km/h'
                break
            default:
                this.tipo = 'dia a dia'
                this.vmax = '100km/h'
                break
        }
    }
    getNome(){//function pegar nome
        return this.nome
    }
    getTipo(){//function pegar tipo
        return this.tipo
    }
    getInfo(){
        return [this.nome,this.tipo]
    }
}

let id1 = new Carro('auldi',1)
console.log(id1)
console.log(id1.getNome())//ele me retorna o nome do objeto
console.log(id1.getTipo())
console.log(id1.getInfo())//me retorna um array 

/*
if(tipo == 1){
            this.tipo = 'esportivo'
        } else if(tipo== 2){
            this.tipo = ''
        }
 */