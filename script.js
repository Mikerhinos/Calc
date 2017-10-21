 var operateur = "";
 var n1 = "";
 var n2 = "0";
 var result;
 
 function pressed(key){
    var lcd = document.getElementById("lcd");
    if (!Number.isInteger(Number(key))){ // si la touche n'est pas un chiffre
        switch (key){ // si c'est un opérateur
            case "+" :
            case "-" :
            case "*" :
            case "/" :
                operateur = key; // stockage de l'opérateur
                n2 = n1; // sauvegarde de n1 dans n2
                lcd.innerHTML = n2 + key; // affichage de n2 et de l'opérateur sur la calculatrice
                n1 = ""; // remise à zéro de n1
                break;
            case "." :
                //n1 = String(n1);
                n1 += ".";
                lcd.innerHTML = n2;
                break;
            case "=" : // si l'utilisateur demande le résultat de l'opération
                if (operateur !== ""){
                    calcul(operateur);
                }
                else {
                    break;
                }
            case "C" : // si l'utilisateur demande une remise à zéro
                n1 = ""; 
                n2 = 0;
                lcd.innerHTML = "0";
                break;
        }
    }
    else { // sinon la touche pressée est un chiffre
        if (operateur !== ""){ // si un opérateur a été choisi
            n1 += key; 
            lcd.innerHTML = n2 + operateur + n1; // affichage de n1 suivi de l'opérateur
        }
        else {
            n1 += key; // sinon concaténation des chiffres
            lcd.innerHTML = n1;
        }
    }
}

function calcul(operateur){
    var lcd = document.getElementById("lcd");
    switch (operateur){
        case "+" : 
            result = Number(n2) + Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            break;
        case "-" : 
            result = Number(n2) - Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            break
        case "/" : 
            result = Number(n2) / Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            break
        case "*" : 
            result = Number(n2) * Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            break;
    }
    n1 = "";
    n2 = "0";
    operateur = "";
}