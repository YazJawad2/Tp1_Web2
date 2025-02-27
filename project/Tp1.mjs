//Exercice 1:

let a = 5;
let b = 6;

a = a^b;
b = a^b;
a = a^b;

console.log(a, b);
//Exercice 2:

let chaine = "1234567";
let chaine1 = parseFloat(chaine);
console.log(typeof chaine1);

//Exercice 5:  
import readlineSync from 'readline-sync';
let mot = readlineSync.question("entrer votre nom ");

console.log(mot.length);
//Exercice 7: 

const PI = 3.14159;

//PI = 4;

console.log(PI);

//Exercice 8:

let PHT = readlineSync.question("entre la valeur de prix hors taxe :");

let TVA = readlineSync.question("entre la valeur de TVA :");

let TTC = PHT + (PHT * TVA) / 100;

console.log("TVA est :" + TTC);

//Exercice 9:

let prefixe = readlineSync.question("entre le préfixe de la facture :");
let numeroBase = readlineSync.question("entre le numéro de base :");
let suffixe = readlineSync.question("entre le suffixe :");

let numeroFacture = prefixe + "-" + numeroBase + "-" + suffixe;

console.log("Le numero de facture est :" + numeroFacture);

//Exercice 10:

let mot2 = readlineSync.question("entrer votre nom ");

console.log(mot2.split("").reverse().join(""));

//Exercice 11:

let palindrom = readlineSync.question("entrer un nom ");

let test = palindrom.split("").reverse().join("");

if (palindrom === test) {
    console.log(palindrom + " est un palindrome.");
}
else {
    console.log(palindrom + " n'est pas un palindrome.");
};

//Exercice 12:

let note1 = Number(readlineSync.question("entrer la premier note :"));
let note2 = Number(readlineSync.question("entrer la deuxième note :"));
let note3 = Number(readlineSync.question("entrer la troisième note :"));

let coefficient1 = Number(readlineSync.question("entrer le coefficient de note 1 :"));
let coefficient2 = Number(readlineSync.question("entrer le coefficient de note 2 :"));
let coefficient3 = Number(readlineSync.question("entrer le coefficient de note 3 :"));

let moyenne = (note1 * coefficient1 + note2 * coefficient2 + note3 * coefficient3) / (coefficient1 + coefficient2 + coefficient3);

console.log("La moyenne des notes est :" + moyenne);

//Exercice 13 :

let hours = Number(readlineSync.question("etre le nombre des hours"));
let min = Number(readlineSync.question("etre le nombre des minutes"));
let sec = Number(readlineSync.question("etre le nombre des secondes"));

let resultat = hours * 3600 + min * 60 + sec;

console.log("Le nombre de secondes  est :" + resultat);

//Exercice 14 :
let prenom = readlineSync.question("Entrez votre prénom : ");
let anneeNaissance = readlineSync.question("Entrez votre année de naissance : ");

let motDePasse = prenom + anneeNaissance + "!";
console.log("Votre mot de passe est : " + motDePasse);

