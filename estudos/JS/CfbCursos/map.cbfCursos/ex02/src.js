const cx1 = document.querySelector('#cx1')

//na maioria dos métodos usa-se a chave e retorna o valor


let mapa = new Map()
mapa.set('bruno',10)//um objeto
mapa.set(20,'lero')
//20 = chave
//'lero' = valor
//para adicionarmos é só usar o set
console.log(mapa)

if(mapa.has('bruno')){//has para saber se tem na coleção ou não,e coloca a chave
    cx1.innerHTML += `A chave existe na coleção`
} else{
    cx1.innerHTML += 'A chave não está na coleção'
}
// cx1.innerHTML = mapa.get(20)//get == obter o valor da chave 20

//dá para percorrer o map

mapa.forEach((el,i)=>{
    // console.log(i)//o indice são as chaves
    console.log(el)//ele só retorna o valor,e não as chaves
})