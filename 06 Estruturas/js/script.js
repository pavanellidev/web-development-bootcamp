// 1 - variáveis

// let nome = "Andre";

// console.log(nome);

// nome = "Andre Pavanelli";

// console.log(nome);

// const idade = 31;

// console.log(idade);

// 2 - mais sobre variáveis

// let a = 10, b = 20, c = 30;

// console.log(c, a ,b);

// const nomeCompleto = "André Pavanelli";

// const nomecompleto = "João da Silva";

// console.log(nomecompleto, nomeCompleto);

// 3 - prompt

// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// 4 - alert

// alert("Testando");

// 5 - Math

// console.log(Math.max(5, 2, 1, 10));

// console.log(Math.floor(5.4522));

// console.log(Math.ceil(6.754));

// 6 - console

// console.log("Teste!");

// console.error("erro!");

// console.warn("Aviso!");

// 7 - if

// const m = 10;

// if(m > 5) {
//    console.log("M é maior que 5.")
// }

// const user = "João";

// if(user === "João") {
//    console.log("Olá João!");
// }

// if(user === "Maria"){
//    console.log("Olá Maria!");
// }

// 8 - else

// const loggedIn = false

// if(loggedIn) {
//    console.log("Está autenticado.")
// } else {
//    console.log("Não está autenticado.")
// }

// const q = 10

// if(q > 10) {
//    console.log("É maior que 10");
// } else {
//    console.log("É menor ou igual a 10");
// }

// 9 - else if

// if(1 > 2){
//    console.log("teste");
// } else if(2 > 3){
//    console.log("Teste 2");
// } else if(5 > 1) {
//    console.log("Agora sim!");
// }

// const userName = "Matheus";
// const userAge = 31;

// if (userName === "José") {
//    console.log("Bem vindo José!");
// } else if (userName === "Matheus" && userAge === 31) {
//    console.log("Olá Matheus, você tem 31 anos!");
// } else {
//    console.log("Nenhuma condição aceita!");
// }

// 10 - while

// let p = 0

// while(p < 5) {
//    console.log(`Repetindo ${p}`);
//    p = p + 1;
// }

// // loop infinito

// let x = 10

// while(x > 5) {
//    console.log(`Imprimindo ${x}`);
// }

// 11 - do while

// let o = 10

// do {
//    console.log(`Valor de o: ${o}`);
//    o-- 
// } while(o > 1);

// 12 - for

// for(let t = 0; t < 10; t++) {
//    console.log('Repetindo algo...');
// }

// 13 - identação

// for (let u = 0; u < 10; u++) {
//    if (u * 2 > 10){
//       console.log(`Maior que 10! ${u}`);
//    } else {
//       if (u / 2 === 1) {
//          console.log("deu 0");
//       }
//    }
// }

// 14 - break

// for (let g = 20; g > 10; g--) {
//    console.log(`O valor de g é ${g}`);

//    if (g === 12) {
//       console.log('O g é 12.');
//       break;
//    }
// }

// 15 - continue

// for(let s = 0; s < 10; s = s +1) {
//    if(s % 2 === 0) {
//       console.log('Número par!');
//       continue;
//    }

//    console.log(s);
// }

// 16 - switch

// const job = "Programador";

switch(job) {
   case "Programador":
      console.log("Você é um programador!");
      break
   case "Advogado":
      console.log("Você é um advogado!");
      break
   case "Engenheiro":
      console.log("Você é um engenheiro!");
      break
    default:
       console.log("Profissão não encontrada");
}