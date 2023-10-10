function sortear(){
    let cor =Number(window.prompt('Digite um número de 1 à 5'))
    let res = window.document.getElementById('res')
    if(cor == 0){
        window.alert('Por favor digite um número válido!')
    } else if(cor > 5){
        window.alert('Por favor digite um número entre 1 e 5')
    } else{
        switch(cor){
            case 1:
                res.innerHTML = `Rosa`
                res.style.color = `rgb(182, 36, 85)`
                break
            case 2 :
                res.innerHTML = `Vermelho`
                res.style.color = `red`
                break
            case 3 :
                res.innerHTML = `Roxo`
                res.style.color = `purple`
                break 
            case 4 :
                res.innerHTML = `Verde`
                res.style.color = `green`
                break
            case 5 :
                res.innerHTML = `Azul`
                res.style.color = `blue`
                break
            default :
            res.innerHTML += `Nenhuma cor escolhida`
            break   
        }
    }
}