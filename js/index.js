//7) Crie um aplicativo de conversão entre as temperaturas Celsius 
//e Farenheit.
//Primeiro o usuário deve escolher se vai entrar com a temperatura 
//em Célsius ou Farenheit.
//Se C é a temperatura em Célsius e F em farenheit, as fórmulas de 
//conversão são:
//C= 5.(F-32)/9
//F= (9.C/5) + 32
var Cresult = 0;
var Fresult = 0;



function temp(event) {
    var user = prompt("Digite (C) para converter Célsius em Farenheit ou digite (F) para converter Farenheit em Célsius");
    if(user === "c" || "C"){
        var C = parseInt(prompt("Digite o valor para fazer a converção:"));
            if (C >= 0) {
                Fresult = (9 * C / 5 ) + 32;
                return document.body.append("A conversão em Farenheit é: " + Fresult);
            }
    }
    if(user === "f" || "F") {
        var F = parseInt(prompt("Digite o valor para fazer a converção:"));
        if(F >= 0) {
            Cresult = 5 * (F - 32) / 9;
            return document.body.append("A conversão em Célsius é " + Cresult);

        }
    }

}
temp(event)







