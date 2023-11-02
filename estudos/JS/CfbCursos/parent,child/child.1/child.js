const cx1 =document.querySelector('#cx1')
const cursos = document.querySelectorAll('.border')

console.log(cx1.firstElementChild.innerHTML = 'testando')//interagi diretamente com um elemento especifico
console.log(cx1.children[3].innerHTML = 'testando')//aqui o children me da a lista de filhos ai eu aponto qual filho eu quero modificar

//console.log(cursos[5].children.length > 0 ? 'Possui filhos' :'Não possui filhos')//uma condição ternária para verificar se o cx1 possui filhos ou não
//console.log(cx1.hasChildNodes())//para saber se o elemento possui filhos,ele retorna text tbm
// console.log(cx1.children)
// console.log(cx1.children[1])
// console.log(cx1.firstElementChild)//retorna o primeiro filho
// console.log(cx1.lastElementChild)//retorna o último filho
// console.log(document.getRootNode())//retorna o nó raiz
