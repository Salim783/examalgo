/*exercice1*/

// a = 12;
// b = 2;
// c = a * b; 
// c = 24;

/*exercice 2*/

// A = "123";
// B = "12";
// C = A + B;
// C = "12312";

/*exercice 3*/

// let tx = prompt('donner un prix');
// let htt = tx * 1.196;
// console.log(htt);

/*exercice 4*/

// var prénom = prompt('prénom');
// var nom = prompt('nom');
// if (prénom === prénom && nom === nom){
//     console.log('bonjour ' + prénom + ' votre ' + 'nom' + ' est ' + nom );
// }

/*exercice 5*/

// var un = prompt('numéros un');
// var deux = prompt('numéros deux');
// var result = un * deux;
// if (result < 0){
//     alert('nombre négatif');
// }
// else {alert('nombre positif')}
// console.log(result);

/*exercice 6*/
// function aaa(age){
// age = prompt('votre age?')
// if(age< 13){
//     console.log('action man');
// }
// else if(age>=13 && age <=18){
//     console.log('matrix');
// }
// else {console.log('evil dead');}
// }
/*exercice 7*/

// function chiffre(hzr){
//     random = Math.round(Math.random()*10)+1;
//     hzr = parseInt(prompt('chiffre'));

// while(hzr !== random){
//     hzr = parseInt(prompt('chiffre'))
// }
// console.log('bravo')
// }

/*exercice 8*/

// function hzr(un){
//     while(un >= 0){
//         console.log(un);
//         un = un - 1;
//     }
//     return
// }

/*exercice 9*/

// function devine(){
//    let random = Math.round(Math.random()*10)
//    let qqch = 0
   
//    while( qqch !== random){
//         qqch = parseInt(prompt('devine le nombre'))
//         if (qqch < random){
//             console.log('trop petit')
//         }
//         if(qqch > random){
//             console.log('trop grand')
//         }    
//     }
//     console.log('bien joué')
// }

/*exercice 10*/

// function tab() {
//     let qqch = [10, 15, 20, 15, 14, 8];
//     let somme = 0;
// for(let i = 0; i < qqch.length; i++){
//     somme += qqch[i];
// }
// console.log(somme);
// } 

/*exercice 11*/

// function note(){
//     eleve = []
//     let nombreEleve = prompt("combien d'eleve il y a ?") 
//     for( i = 0; i < nombreEleve; i++){
//         user = eleve.unshift(prompt('note'))
//     }
//     return eleve
// }

/*exercice 12*/

// function note(){
//     eleve = []
//     let nombreEleve = prompt("combien d'eleve il y a ?") 
//     for( i = 0; i < nombreEleve; i++){
//         user = eleve.unshift(prompt('note'))
//     }
//     moyenne = eleve.filter(eleve => eleve >= 10)
//     return moyenne
// }

/*exercice 13*/
// function value(qqch) {
//     let maxVal = qqch[0][0];
//     for (let i = 0; i < qqch.length; i++){
//       for (let j = 0; j < qqch[i].length; j++) {
//         if (qqch[i][j] > maxVal) {
//           maxVal = qqch[i][j];
//         }
//       }
//     }
//     return maxVal;
//   }
  
//   const nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];
//   const maxVal = value(nbres);
  
//   console.log(maxVal); 
  
/*exercice 14*/

// function longueur(tab){
//     a = prompt('phrase')
//     long = a.length
//     return long
// }

/*exercice 15*/

// function devine(){
//     let random = Math.round(Math.random()*5)
//     let qqch = 0
    
//     while( qqch !== random){
//          qqch = parseInt(prompt('devine le nombre'))
//          if (qqch < random){
//              console.log('trop petit')
//          }
//          if(qqch > random){
//              console.log('trop grand')
//          }    
//      }
//      console.log('bien joué')
//  }

/*exercice 16*/

// function qqch(a, b){
//     if(a > b){
//         return 0
//     }
//     else{
//         return 1
//     }
// }

/*exercice 17*/


/*exercice 18*/
// function trouverPlusGrand(tableau) {
//     let maxVal = tableau[0];
  
//     for (let i = 0; i < tableau.length; i++) {
//       if (tableau[i] > maxVal) {
//         maxVal = tableau[i];
//       }
//     }
  
//     return maxVal;
//   }
  
//   let tableau = [2, 6, 1, 7, 9, 3];
//   let resultat = trouverPlusGrand(tableau);
//   console.log(resultat); 

// exercice 19
// function compterVoyelles(chaine) {
//     let nbVoyelles = 0;
//     let voyelles = "aeiaeuou";
//     for (let i = 0; i < chaine.length; i++) {
//       if (voyelles.includes(chaine[i])) {
//         nbVoyelles++;
//       }
//     }
//     return nbVoyelles;
//   } 
//   let chaine = "Bonjour tout le monde!";
//   let resultat = compterVoyelles(chaine);
//   console.log(resultat); 
   /*exercice 20*/
//    function filtrerNombresPairs(tableau) {
//     let tableauNombresPairs = [];
  
//     for (let i = 0; i < tableau.length; i++) {
//       if (tableau[i] % 2 === 0) {
//         tableauNombresPairs.push(tableau[i]);
//       }
//     }
  
//     return tableauNombresPairs;
//   }
  
//   let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let resultat = filtrerNombresPairs(tableau);
//   console.log(resultat); 
  
  /*exercice 21*/
//   function reverseWords(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i].split("").reverse().join("");
//     }
//     return words.join(" ");
//   }
//   var str = "ceci est une phrase";
//   var reversedStr = reverseWords(str);
//   console.log(reversedStr); 
  
  
  