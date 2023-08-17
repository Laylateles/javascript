var teste = [5,3,4,2]
teste[3] = 8
teste[4] = 1
teste.sort()
teste.push(12)

for(var pos in teste) {
    console.log(`A posição ${pos} possui o valor : ${teste[pos]}`)
}
//for(var pos in teste)--versão mais simplificada,só coloca-se a variável e dps o nome da variável ja feita com os vetores


/*for(var pos = 0 ; pos < teste.length; pos++){
   console.log(`A posição ${pos} possui o valor : ${teste[pos]}`)
    //console.log(teste[pos])
 }
 */
//a variável pos é a posição
//for(var pos = 0 ; pos < teste.length; pos++),variável pos se inicia na posição 0,enquanto o pos for menor que o comprimento da variável teste,então soma-se mais 1 posição