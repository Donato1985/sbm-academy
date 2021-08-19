/*
-utilizar o exercício anterior
-Enviar um alerta informando que uma string foi enviada
-enviar um alerta informando que a string será convertida para número
-Iprimir os mesmos dados do exercício anterior
-Posteriormente pedir ao usuário para escolher entre 3 frutas [Laranja, Uva, Pera, Manga]
-Caso não tenha informa ao usuário de nome (?) que a fruta escolhida não está na lista
*/

function alerta(msg="Uma string foi enviada"){
	alert(msg);
};

function escolher_fruta(nome){
	var fruta=prompt("Escolha uma fruta entre: Laranja, Pera, Uva ou Manga.");
	var frase;
	switch(fruta){
		case "Laranja":
		frase= "Você escolheu: "+fruta;
		break; 

		case "laranja":
		frase = "Você escolheu: "+fruta;
		break;

		case "Uva":
		frase = "Você escolheu: "+fruta;
		break; 

		case "uva":
		frase = "Você escolheu: "+fruta;
		break;

		case "Pera": 
		frase = "Você escolheu: "+fruta;
		break;

		case "pera":
		frase = "Você escolheu: "+fruta;
		break;

		case "Manga":
		frase = "Você escolheu: "+fruta;
		break;

		case "manga":
		frase = "Você escolheu: "+fruta;
		break;

		default:
		 frase = "a fruta que você digitou não tem na lista :)";
		break;
	}
	
	document.write(nome+", "+frase+"<br>");
}

function printar(){

	var nome = prompt("Digite o seu nome:");

alerta();

var num = prompt(nome+", digite agora um número para comparar com 'n'");

alerta("Você digitou uma string, mas vou converter em número");

num=parseInt(num);

var n = num;

	document.write("Seja bem vindo(a) "+nome+"!<br>");

document.write("Você digitou o número ("+num+")<br>");

var compare = num===n;

document.write("O retorno da comparação booleana é...: "+compare+"<br>");

var soma = n+num;
document.write("A soma dos valores é...: "+soma+"<br>");

var sub = num-n;

document.write("A subtração dos valores é...: "+sub+"<br>");

var resto = num%n;

document.write("O resto de divisão é de...: "+resto+"<br>");

var quad= num ** 2;

document.write("O quadrado do número digitado é...: "+quad+"<br>");

return nome;

}




var nome=printar();

escolher_fruta(nome);