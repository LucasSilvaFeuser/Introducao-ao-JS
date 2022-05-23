// Imprimir comparações entre AND, OR e NOT.

//EXERCICIO - 1 - OPEADOR AND

//INFORMAÇÕES
console.log("Para este e os demais exercicios teremos dois usuarios contendo algumas informações que vamos escolher e armazenar.. \n Usuario - 1 - None: Lucas Matheus - Data Nascimento: 20/04/1990 /-/ Usuario - 2 - Nome: Lucas Miguel - Data de Nascimento: 15/02/1990 ")
//EXPLICAÇÃO AND
console.log("Está é a operação AND, para que ela seja verdadeira(true), todas as saidas devem ser verdadeira, caso contrario o resultado será falso. \n (Isso está baseada na tabela verdade).\n Então vamos fazer duas comparações de nomes iguais e datas iguais.\n O dado a ser armazenado é o primeiro nome, e o ano de nascimento.\n Agora com o operador AND que no JS é definido como '&&' (chamado de E comercial.).");
//OPERAÇÃO COM RETORNO TRUE
console.log( "Os usuarios tem o primeiro nome, e o ano de nascimento iguais?")
console.log( "Lucas" == "Lucas" && 1990 == 1990);
console.log("Esse operador AND como dito acima só retorna true caso os valores comparados retornarem true, caso tenha um false, ele retorna false.");
// OPERAÇÃO COM RETORNO FALSE
console.log("Uma comparação de retorno false. \n os usuarios tem o primeiro nome igual, e o ano de nascimento diferente?")
console.log( "Lucas" == "Lucas" && 1990 != 1990);

//EXERCICIO - 2 - OPERADOR OR / EXPLICAÇÃO OPERADOR OR
console.log("\nEstá é a operação OR, para que ela seja verdadeira(true), uma das saidas deve ser verdadeira, e só retornara false caso todas as saidas sejam falso.\n (Isso se basendo na tabela verdade).\n Então vamos usar o mesmo exemplo do usuario - 1 e usuario - 2, mas agora vamos guardar não mas o ano de nascimento, e sim o dia de nascimento na comparação")
//OPERAÇÃO COM RETORNO TRUE
console.log("Os usuarios tem o primeiro nome igual, e o dia de nascimento diferente?");
console.log( "Lucas" == "Lucas" || 20 == 15);
console.log("Esse operador OR como dito acima só retorna true caso um dos valores sejá true, caso seja os dois falsos ele retorna false.")
//OPERAÇÃO COM RETORNO FALSE
console.log("Agora uma comparação de retorno false \nOs usuarios tem o primeiro nome, e o ano de nascimento diferente?");
console.log( "Lucas" != "Lucas" || 1990 != 1990);

//EXERCICIO - 3 - OPERADOR NOT (NEGAÇÃO / INVERTE VALORES )
console.log("Este é o operador NOT, ele funciona basicamente para inverter um resultado. \n Vamos fazer algumas exercicios utilizando os mesmo usuarios 1 e 2")
// OPERAÇÃO NOT - UTILIZANDO AND
console.log("Os usuarios tem o primeiro nome, e o ano de nascimento iguais?")
console.log( !( "Lucas" == "Lucas" && 1990 == 1990 ));
console.log("Veja essa questão é a mesma do exercicio 1 utilizando OR, porém utilizando o operador NOT que no JS é definido como '!', vemos um resultado diferente da questão anterior, justamente pelo NOT (!) inverter as saidas. " ) 

//FIM ALGORITMO! :D :)


