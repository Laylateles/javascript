class Npc{
    static alerta = false//coloca um alerta parea a class
    constructor(energia){
        this.energia = energia
    }
    info(){
        console.log(`Energia:${this.energia}\nAlerta:${(Npc.alerta ? 'Sim' : 'Não')}`)//a class Npc com o alerta
        console.log('------------------------')
    }
    static alertar(){//ele não faz parte da instancia e sim da class
        Npc.alerta = true
    }
}

// o static é uma maneira de mudar o atrtibuto de vários objetos sem ter que modificar um por um

const Npc1 = new Npc(100)
const Npc2 = new Npc(200) 
const Npc3 = new Npc(40) 

Npc.alertar()
//Npc1.alertar()//ele não vai pq não da para instanciar,ele é da class
//Npc.alerta = true//assim q eu mudo o alerta da class Npc,todos os alertas mudam
Npc1.info()
Npc2.info()
Npc3.info()

//Npc1.alerta = true//o valor do alerta dele muda,somente ele
//mesmo que aqui esteja verdadeiro na class está na static como false,ent ele sobrepõe sobre esse
// console.log(Npc1.energia)
// console.log(Npc2.energia)//cada um tem sua propriedade energia individual
// console.log(Npc3.energia)//valores diferentes
