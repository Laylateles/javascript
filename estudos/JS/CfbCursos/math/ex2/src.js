const olho =[...document.querySelectorAll('.olho')]
//const olho_pup =[...document.querySelectorAll('.pup')]
//const olho_ponto =[...document.querySelectorAll('.ponto')]

let posi_x = 0
let posi_y = 0


window.addEventListener('mousemove',(evt)=>{
    posi_x = evt.clientX //retorna a posição x do mouse(numero)
    posi_y = evt.clientY
    const rot =(Math.atan2(posi_y,posi_x)*180)/Math.PI //retorna o angulo de dois coeficientes em radianos//a ordem aqui importa,primeiro y dps x,o 180 e o pi foi para converter radiano em graus
    console.log(rot)
    olho.forEach((o)=>{
        o.style.transform ='rotate('+rot+'deg)'//assim rotaciona os dois,tem q ser assim para botar uma variavel
    })
})

//olho.style.transform ='rotate(180deg)'//rotaciona o olho