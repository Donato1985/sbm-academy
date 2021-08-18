/*
1. Ao abrir o navegador deverá apresentar uma janela para que digite o nome;
2. O nome digitado deverá aparecer na segunda janela que irá pedir um número;
3. Será impresso o nome conforme no exemplo do desafio;
4. Será impresso o valor digitado entre parênteses;
5. Irá retornar um valor de comparação resultando em um booleano;
6. Será efetuado a soma;
7. Irá retornar o resto da divisão;
8. Irá retornar o quadrado do valor digitado;

tks
;)

*/

var nome = prompt("Digite o seu nome:");

var num = parseInt(prompt(nome+", digite agora um número para comparar com 'n'"));

var n = num;

document.write("Seja bem vindo(a) "+nome+"<br>");

document.write("Você digitou o número ("+num+")<br>");

var compare = num===n;

document.write("O retorno da comparação booleana é...: "+compare+"<br>");

var soma = n+num;
document.write("A soma dos valores é...: "+soma+"<br>");

var sub = num-n;

document.write("A subtração dos valores é...: "+sub+"<br>");

var resto = num%n;

document.write("O resto de divisão é de...: "+resto+"<br>");

var quad = num**2;

document.write("O quadrado do número digitado é...: "+quad+"<br>");


