function Pessoa(nome,idade){
    this.nome = nome,//precisa-se de virgula
    this.idade = idade,
    this.getNome = function(){//função anônima
      return  this.nome //precisa de virgula
    },
    this.getIdade= function(){//tem q se colocar o this,para não ser criada uma var e fazer menção ao obj
       return this.idade
    }
}


const res = document.querySelector('#res')
const botao = document.querySelector('#botão')

let pessoas =[]


