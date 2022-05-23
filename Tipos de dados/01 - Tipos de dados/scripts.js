// Curso JS - Udemy, com varios exercicios. :D , :) , :I ;

console.log(5);
console.log(typeof 5);
console.log("numero 5");
console.log(typeof "numero 5");
console.log( 120 % 2 ); // conta soma o resto da operação aritmetica
console.log (120 + 12 + ( 2 * 42 - (50 - 12))); 
// Sempre o sinal aritmetico acompanhado apos o num se tiver mais um parenteses (-*/+())

//SPECIAL NUMBERS ;

console.log(Infinity);
console.log(-Infinity); 
console.log(NaN); // ex: Juntar string com number.

// Tipos de String ; 

console.log("Meu nome é MC Golira!");
console.log('Essa é as aspas simples!');
console.log(`Eu sou a crase, shift + aspas`); 
// O famozissimo, template literals, a gente ve por aqui ; 
// Chamada também de backticks ;

// Tipos de String avançadas ; 

console.log("Meu nome é `Lucas`"); // Só é possivel imprimir aspas em string utilizando outros tipos de aspas dentro da mesma.
console.log(`Essa string é especial por ser crase, veja uma soma utilizando o $ + chaves dentro da string -- > a soma de 5 + 3 é igual a:${5 + 3} `);
console.log("Veja um exemplo agora de soma em strings " + ' aspas simples' + ` crase `); 

// BOOLEANS

console.log(true);
console.log(false);
console.log(5 < 10);
console.log(5 > 10);

// Boleans comparação ; 
/*
Maior que >
Menor que <
Maior ou igual <=
Menor ou igual >=
igual ==
Diferente !=
identico ===

*/

console.log( 3 > 4);
console.log( 4 < 100);
console.log( 3 >= 3);
console.log( "Lucas" != "Loucas");
console.log( "Olha o macaco" === "Olha o macaco");

/* Boleans : Operadores logicos
&& = AND
|| = OR
! = NOT 
*/

console.log(true && true);
console.log(false || false);
console.log("Lucas" == "Lucas" && "Joao" == "Lucas"); // Tem que ter os dois lados veradeiros para ser true
console.log("Lucas" == "Lucas" || "Joao" == "lucas"); // Apenas um lado verdadeiro = True

console.log(!("Maria" != "Maria")); // ! = negação, inverte o valor true ou false ;

//Bolean : operador ternario, não muito utilizado, e complicado de ler ; 

console.log( 5 > 2 ? "Sim" : "Não"); // ? = utilizado como pergunta, verificando se o valor é true ou false, logo apos ele vem a mensagem impressa do true, e utilizando : para separar o false, como se fosse um if e else.
console.log(false ? 4 : 5);
console.log("Lucas" == "Lucas" ? "Eae, Lucas!" : "Não é o Lucas!");

// Empty Values ; 

console.log(null); // Valor nulo ;
console.log(undefined); // Valor não definido ;

// Conversão de tipo automatica ;

console.log("123" + 12 );
console.log(typeof ("123" + 12)); // Valor consta como string ;

console.log( "123" * 20 );
console.log(typeof ("123" * 20)); // Valor consta como number ; 





