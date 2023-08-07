function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasci = window.document.getElementById('iano')
    var res = window.document.getElementById('res')

    if (nasci.value.length == 0 || nasci.value > ano ) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(nasci.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (sexo[0].checked)  {
            gênero = 'homem'
            if(idade >= 0 && idade <10) {
                //criança

                img.setAttribute('src', 'bebe-homem.jpeg')
            } else if (idade < 20){
                //jovem

                img.setAttribute('src', 'jovem-homem.jpeg')
            } else if (idade < 60){
                //adulto

                img.setAttribute('src', 'adulto-homem.jpeg')
            } else {
                //idoso

                img.setAttribute('src', 'idoso.jpeg')
            }

            } else if (sexo[1].checked) {
            gênero = 'mulher'
            if(idade >= 0 && idade < 10) {
            //criança

            img.setAttribute('src','bebe-mulher.jpeg')
            } else if (idade < 20){
            //jovem

            img.setAttribute('src','jovem-adulta.png')
            } else if (idade < 60){
            //adulto

            img.setAttribute('src','adulta-mulher.jpeg')
            } else {
            //idoso

            img.setAttribute('src','idosa-pq.jpeg')
            }
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Você é ${gênero} e possui ${idade} anos.</p>`
        res.appendChild(img)

        // o appendChild(img) é para colocar o elemento abaixo das coisas escritas

    } 
}
/*var data = new Date()----para pegar a data atual
 var ano = data.getFullYear()-----para pegar o ano atual quatro dígitos
 var nasci = window.document.getElementById('iano')---a caixa de ano nascido
 var res = window.document.getElementById('res')--- o resultado
 nasci.value.length == 0 __ se o valor n for digitado dá erro,o nasci é a variavel 
 || nasci.value > ano ____ ou se o ano digitado for maior q o ano atual
 res.innerHTML = `Seu gênero é ${gênero} e tem ${idade} anos`------ o gênero começou com uma string vazia e quando for colocada para aparecer na frase é sempre a variavel independente das configurações
 var sexo = window.document.getElementsByName('sexo')--o name do input rage pq eles tem o mesmo name
 var idade = ano - Number(nasci.value)--a idade é o ano atual calculado pelo sistema menos o valor digitado na caixa do ano convertido pra número

 ALIAS UMA PARTE TA ESCRITA DENTRO DO ELSE PQ SE CASO FOR DIGITADO CORRETAMENTE É OQ VAI ACONTECER

 sexo[0].checked-- se o sexo primeiro for marcado
 sexo[1].checked---se o segundo for marcado
 var img = window.document.createElement('img')--para criar uma tag entre parêntese é a tag q eu quero criar
 img.setAttribute('id' , 'foto')--para criar um atributo vc digita o atributo e depois o nome dele tipo isso aq: img(id="foto")

    */
   /*
   if(idade >= 0 && idade <= 10) { ----se a idade for igual ou maior q 0 
   //criança
    img.setAttribute('src', 'bebe-homem.jpeg') ---imagem criada no js
   o scr é um parâmetro do img no HTML e a imagem é a imagem da pasta é só escrever ela(elas tem q estar na mesma página q os documentos)
   
   
   
   */