 var size = 8
 var tab = ''

 for(var y = 0;y < size;y++ ){
     for(var x = 0;x < size;x++ ){//x e y são as coordenadas
        if((x + y)% 2 ==0){ //para identificar os lugares que vão ser pretos e espaços
         tab+=' '
        } else{
         tab+='#'
        }
     }
     tab+='\n' //vai concatenar as expressões
 }
 console.log(tab);


// console.log(' # ' + ' # ' + ' # ' + ' #\n') //repetição
// console.log('  # ' + ' #' + '  #' + "  #\n")
//feito mais ou menos,esse foi mais dificl tive q ver o código pois realmente não estava conseguindo fazer!Mas entendi o código e isso que importa!Foco força e fé!!!