function calcular() {
   var prod = window.prompt('Qual o produto que você está comprando?')
   var preço = window.prompt(`Qual é o preço de ${prod}?`)
   var porcent =Number(preço.value)
   var div = porcent / 10
   var sub = porcent - div
   var res = window.document.getElementById('res')
   res.innerHTML = `O valor do desconto foi de ${div}`
}