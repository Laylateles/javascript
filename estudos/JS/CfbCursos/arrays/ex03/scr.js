let valores = [1,2]

const op = [//posso criar essas funções fora e colocar elas normal
    (val)=>{//arrow function//op[0]
        let res = 0
        for(v of val){//o v vai percorrer o val
            res+=v
        }
        return res
    },//tem q ser colocado a vírgula pois está dentro d um array
    (val)=>{//op[1]
        let res = 1
        for(v of val){//o v vai percorrer o val
            res*=v
        }
        return res
    },
    (val)=>{//op[2]
        for(v of val){//o v vai percorrer o val
            console.log(v)// faz a impressão dos número do array
        }
    }
]
console.log(op[0](valores))
/*
é como se fosse um array normal,vc chama o array e coloca qual a posição q está a função q vc quer executar, e para dar um parâmetro para ela basta vc colocar um parêntese e um array já existente,tem q ser ja existente se n ele n dá certo

 */
