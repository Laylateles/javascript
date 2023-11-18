const n1 = {
    nome:'lero',
    idade:17,
    cidade :'zoro',
    amigos:{
        amig1:'joao',
        amig2:'vitor',
        amig3:'erick'
    }
}

const string_n1 = {"nome":"lero","idade":17,"cidade":"zoro","amigos":{"amig1":"joao","amig2":"vitor","amig3":"erick"}}
console.log(string_n1)//a string Json

const s_json = JSON.stringify(n1)//converte o objeto para formato de string Json
console.log(s_json)
const o_json = JSON.parse(s_json)//converte a string em objeto
console.log(o_json)