// Auufgabe 1 String_Methods_2_Lev1_4 //

const A = `Susie is going to codingschool`;

// Susi //
let slice1 = A.slice(0, 4);
console.log(slice1);
document.write(slice1 + "<br>");

// is //
let slice2 = A.slice(6, 8);
console.log(slice2);
document.write(slice2 + "<br>");

// is going to school //
let slice3 = A.slice(6, 17);
console.log(slice3);
let slice4 = A.slice(24, 30);
console.log(slice4);
let slice5 = `${slice3} ${slice4}`;
console.log(slice5);
document.write(slice5 + "<br>");

// school //
console.log(slice4);
document.write(slice4 + "<br>");

// Susi is school //
let slice6 = `${slice1} ${slice2} ${slice4}`;
console.log(slice6);
document.write(slice6 + "<br>" + "<br>");



// Auufgabe 2 String_Methods_2_Lev1_5 //

const text = 'Susi is back from codingschool';

// Susi //
let sub1 = A.substring(0, 4);
console.log(sub1);
document.write(sub1 + "<br>");

// // is //
let sub2 = A.substring(6, 8);
console.log(sub2);
document.write(sub2 + "<br>");

// // school //
let sub3 = A.substring(24, 30)
console.log(slice4);
document.write(slice4 + "<br>");

// // Susi is school //
let sub4 = `${sub1} ${sub2} ${sub3}`;
console.log(sub4);
document.write(sub4 + "<br>" + "<br>");


// Auufgabe 3 String_Methods_2_Lev1_9 //

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

// Sam is going to school and to the movie theater //
let part1 = text1.slice(0, 15)
console.log(part1);
let sentence1 = part1.concat(" school and to the movie theater");
console.log(sentence1);
document.write(sentence1 + "<br>");

// Sam is going to movie theater //
let part2 = sentence1.slice(33, 47)
console.log(part2);
let sentence2 = part1.concat(part2);
console.log(sentence2);
document.write(sentence2 + "<br>");

// Susi and Sam are going to school //
let sentence3 = text2.concat(" and Sam are", sentence1.slice(6, 22));
console.log(sentence3);
document.write(sentence3 + "<br>");

// Susi and Sam are going to gym and to the movie theater //
let part3 = sentence3.slice(0, 25)
console.log(part3);
let part4 = sentence1.slice(30, 49)
console.log(part4);
let sentence4 = part3.concat(` gym ${text4} ${part4}`);
console.log(sentence4);
document.write(sentence4 + "<br>");

// Susi is going to school and to the movie theater //
let sentence5 = text2.concat(" ", sentence1.slice(4, 47));
console.log(sentence5);
document.write(sentence5 + "<br>");