let nome = prompt("qual o seu nome?")
let pesquisa = prompt("escolha um objeto")

switch (pesquisa) {
  case "limão":
    console.log(`boa tarde ${nome}o limão custa R$2,00`)
    break;
 case "morango":
   console.log (`boa tarde ${nome}o morango custa R$5,00`)
   break;
 case "maçã":
   console.log("a maçã custa R$5,00")
   break;     
 case "melancia":  
   console.log("a melancia custa R$7,00")     
   break;
  case "skate":
     console.log("o skate é de madeira")
  case "bola":
    console.log("a bola é oficial")
    break;
  
        
 default:
   console.log("não existe esta opção");
        
    }




const nota = 3

const resultado = (nota >= 7) ? 'aprovado' : 'reprovado'
