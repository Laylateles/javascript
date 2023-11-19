function Nave(energia){
    this.energia = energia
    this.disparo = 12
}

const n1 = new Nave(200)


Nave.prototype.vidas = 3//adicionado no prototype dele,mas não aparece no console
Nave.prototype.disparar = function(){//só funciona dessa maneira
     if(this.disparo > 0){
        this.disparo--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
//Nave.vidas = 3//não adiciona
console.log(n1.vidas)//ele aparece nas propriedades
console.log(n1)