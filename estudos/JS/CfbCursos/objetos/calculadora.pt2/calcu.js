const div_teclas = document.querySelector('#div_teclas')
const array_teclas = [7,8,9,'+',4,5,6,'-',1,2,3,'x',0,',','/','=']
array_teclas.forEach((el,i)=>{
    const button = document.createElement('button')
    button.setAttribute('id',i)
    button.setAttribute('class','tecla')
    button.innerHTML = el
    div_teclas.appendChild(button)
})


