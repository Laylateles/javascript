const caixa = document.querySelector('.caixa')

let cores = ['rosa','verde','roxo',['claro','escuro','medio']]
//aqui temos mais um arr dentro d um arr

let cursos = ['HTML','CSS','Javascript',cores]//array dentro do array

console.log(cursos[3][3][1])
//primeiro indice chama o array cores inteiro contando com o outro array,o array tbm está na posição 3 assim chamando ele tbm,se eu quero algo q está dentro dele eu coloco mais um indice
//se eu quiser alguma coisa especifica desse array dentro do array,eu coloco a posição q o array está e dps coloco o indice doq eu quero
//cursos.pop()//não precisa colocar nada aq dentro pois,ele remove debaixo pra cima

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})

// caixa.innerHTML = cursos