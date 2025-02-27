// Exercice 1 : Affichage dans la console
console.log("hello from Semlalia");

// Exercice 2 : Déclaration et affichage de variables
let nom = "Jawad"; 
let age = 20; 
let ville = "Marrakech"; 

console.log("Je m'appelle " + nom + ", j'ai " + age + " ans et j'habite à " + ville + ".");

// Exercice 3 : Concaténation et interpolation
console.log("Je m'appelle " + nom + ", j'ai " + age + " ans et j'habite à " + ville + ".");

console.log(`Je m'appelle ${nom}, j'ai ${age} ans et j'habite à ${ville}.`);

// Exercice 4 : Conversion de types
let anneeNaissance = "2003"; 
let anneeActuelle = 2025;
let ageCalcule = anneeActuelle - Number(anneeNaissance);

console.log(`Vous avez ${ageCalcule} ans.`);

// Exercice 5 : Opérations mathématiques

let nombre1 = Number(prompt("Entrez le premier nombre:"));
let nombre2 = Number(prompt("Entrez le deuxième nombre:"));

console.log(`Somme: ${nombre1 + nombre2}`);
console.log(`Différence: ${nombre1 - nombre2}`);
console.log(`Produit: ${nombre1 * nombre2}`);
console.log(`Quotient: ${nombre1 / nombre2}`);
console.log(`Reste de la division: ${nombre1 % nombre2}`);

// Exercice 6 : Permutation de variables
let a = 5;
let b = 10;

console.log(`Avant permutation: a = ${a}, b = ${b}`);

// Méthode 1: Utilisation de l'addition et la soustraction
a = a + b; 
b = a - b; 
a = a - b; 

console.log(`Après permutation (méthode 1): a = ${a}, b = ${b}`);

// Réinitialisation des valeurs
a = 5;
b = 10;

// Méthode 2: Utilisation de la déstructuration
[a, b] = [b, a];

console.log(`Après permutation (méthode 2): a = ${a}, b = ${b}`);

// Exercice 7 : Vérification du type d'une variable
let typeString = "Bonjour";
let typeNumber = 42;
let typeBoolean = true;
let typeUndefined = undefined;
let typeNull = null;
let typeObject = {};
let typeArray = [];
let typeFunction = function() {};

console.log(`Type de "Bonjour": ${typeof typeString}`);
console.log(`Type de 42: ${typeof typeNumber}`);
console.log(`Type de true: ${typeof typeBoolean}`);
console.log(`Type de undefined: ${typeof typeUndefined}`);
console.log(`Type de null: ${typeof typeNull}`); 
console.log(`Type de {}: ${typeof typeObject}`);
console.log(`Type de []: ${typeof typeArray}`); 
console.log(`Type de function(){}: ${typeof typeFunction}`);

// Exercice 8 : Égalité et comparaison
let x = "10";
let y = 10;

console.log(`x == y: ${x == y}`);  
console.log(`x === y: ${x === y}`);  
console.log(`x != y: ${x != y}`);   
console.log(`x !== y: ${x !== y}`);  

// Explication de la différence entre == et ===:
// == (égalité simple) : compare les valeurs après conversion de type si nécessaire
// === (égalité stricte) : compare les valeurs ET les types sans conversion

// Exercice 9 : Incrémentation et décrémentation
let compteur = 0;

console.log(`Valeur initiale: compteur = ${compteur}`);

compteur++; // Post-incrémentation
console.log(`Après compteur++: compteur = ${compteur}`);

++compteur; // Pré-incrémentation
console.log(`Après ++compteur: compteur = ${compteur}`);

compteur--; // Post-décrémentation
console.log(`Après compteur--: compteur = ${compteur}`);

--compteur; // Pré-décrémentation
console.log(`Après --compteur: compteur = ${compteur}`);

// Exercice 10 : Affectation et raccourcis d'opérations
let nombre = 20;

console.log(`Valeur initiale: nombre = ${nombre}`);

nombre += 5; // Équivalent à nombre = nombre + 5
console.log(`Après nombre += 5: nombre = ${nombre}`); // 25

nombre -= 2; // Équivalent à nombre = nombre - 2
console.log(`Après nombre -= 2: nombre = ${nombre}`); // 23

nombre *= 3; // Équivalent à nombre = nombre * 3
console.log(`Après nombre *= 3: nombre = ${nombre}`); // 69

nombre /= 2; // Équivalent à nombre = nombre / 2
console.log(`Après nombre /= 2: nombre = ${nombre}`); // 34.5

nombre %= 4; // Équivalent à nombre = nombre % 4
console.log(`Après nombre %= 4: nombre = ${nombre}`); // 2.5