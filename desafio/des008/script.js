function calcular() {
   var prod =window.prompt('Qual o produto que você está comprando?')
   var preço =Number (window.prompt(`Qual é o preço de ${prod}?`))
   var desc = preço * 0.1
   var sub = preço - desc
   var res = window.document.getElementById('res')
   res.innerHTML  = `<h1>Calculando desconto de 10% para ${prod}</h1>`
   res.innerHTML += `O preço original era de R$${preço.toFixed(2)}`
   res.innerHTML += `<p>O valor do desconto foi de R$${desc.toFixed(2)}</p>`
   res.innerHTML += `<p>Você irá pagar R$${sub.toFixed(2)}</p>`
}


//CONSEGUI FAZER SOZINHA AAAAAAAAAAA GLÓRIA (19/08/2023)


//R$${desc.toFixed(2)}---dentro do ${}