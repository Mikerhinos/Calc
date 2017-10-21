 var operateur = "";
 var n1 = "";
 var n2 = "";
 var result = 0;
 
 function pressed(key){ // fonction appelée à chaque touche cliquée
    var lcd = document.getElementById("lcd");
    if (!Number.isInteger(Number(key))){ // si la touche n'est pas un chiffre
        switch (key){ // si c'est un opérateur
            case "+" :
            case "-" :
            case "*" :
            case "/" :
                if (operateur !== ""){ // si l'utilisateur clique un opérateur alors qu'il y en a déjà un d'entré
                    if (n1,n2 >= 0){ // si les 2 nombres sont déjà saisis, lancement du calcul
                        calcul(operateur);
                    }
                    else {
                        operateur = key; // sinon calcul impossible, on stock juste l'opérateur cliqué
                    }
                }
                else { // sinon choix de l'opérateur
                    operateur = key; // stockage de l'opérateur
                    n2 = n1; // sauvegarde de n1 dans n2
                    lcd.innerHTML = n2 + key; // affichage de n2 et de l'opérateur sur la calculatrice
                    n1 = ""; // remise à zéro de n1
                }
                break;
            case "." : // si c'est un point
                if (n1 === ""){
                    n1 = "0.";
                }
                else {
                    n1 += ".";
                    lcd.innerHTML = n1;
                }
                break;
            case "=" : // si l'utilisateur demande le résultat de l'opération
                if ((operateur !== "") && (n1,n2 >= 0)){ // s'il y a bien une opération à faire, la transmettre à la fonction de calcul
                    calcul(operateur);
                }
                break; // ce satané break oublié qui me causait ce problème de innerHTML à zéro...
            case "C" : // si l'utilisateur demande une remise à zéro
                n1 = ""; 
                n2 = "";
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
            if ((n1 > 0) || (n1 == "0.")){ // si n1 est supérieur à zéro
                n1 += key; // concaténation du chiffre
                lcd.innerHTML = n1;
            }
            else { // sinon pour éviter que le nombre commence par un zéro, n1 prend directement la valeur de la touche
                n1 = key;
                lcd.innerHTML = n1;
            }
        }
    }
}

function calcul(operateur){ // fonction du calcul et affichage du résultat
    var lcd = document.getElementById("lcd");
    switch (operateur){
        case "+" : 
            result = Number(n2) + Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            reset();
            break;
        case "-" : 
            result = Number(n2) - Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            reset();
            break
        case "/" : 
            result = Number(n2) / Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            reset();
            break
        case "*" : 
            result = Number(n2) * Number(n1);
            console.log(result);
            lcd.innerHTML = result;
            reset();
            break;
    } // résultat affiché, remise à zéro des variables en cas de nouveau calcul par l'utilisateur
}

function reset(){
    n1 = "";
    n2 = "";
    operateur = "";
}