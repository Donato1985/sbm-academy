window.onload=function(){

//vou usar esse método para toda saída aparecer bem grande
var put = document.querySelector("#saida");

function nan(valor,msg){
	if(isNaN(valor)){
		alert("Digite apenas números");
	}else{
		put.innerHTML+=msg
		}
}


/*Deu um tempo livre aqui, então vou buscar fazer todos os exercícios extras. Para maior limpeza
e simplicidade, vou encapsular eles em funções, cujo o nome será exe_numPacote_numExercíco. Basta
chamar a função e ver se ficou como no proposto*/

function exe_1_1(){
	/*Faça um programa que receba quatro
números inteiros, calcule e mostre a soma desses números. */
	let soma=0;
	for(let x=0;x<4;x++){
		num=prompt("Digite um número para somarmos: ")
		soma+=Number(num);
	}
	if(isNaN(soma)){
		alert("Deveria ter colocado somente números")
	}else{
		put.innerText=soma;
	}
}
//exe_1_1();
function exe_1_2(){
/*Faça um programa que receba três notas,
calcule e mostre a média aritmética entre elas.*/

	let soma=0;
	let div=3;
	for(let x=0; x<div;x++){
		nota=Number(prompt(`Digite a ${x+1}ª nota:`));
		soma+=nota
	}
	if(isNaN(soma)){
		alert("Digite apenas números")
	}else{

		put.innerText=`${(soma/div).toFixed(2)}`;

		}

	}

//exe_1_2();
function exe_1_3(){
	/*Faça um programa que receba três notas e
seus respectivos pesos, calcule e mostre a média ponderada dessas notas.*/
	let pesos=0,soma=0,peso=0,nota=0;
	for(let x=0;x<3;x++){
		nota=Number(prompt(`Digite sua ${x+1}ª nota:`));
		peso=Number(prompt(`Digite seu ${x+1}º peso:`));
		pesos+=peso;
		soma+=(nota*peso);



	}
	let end=soma/pesos;
	if(isNaN(end)){
		alert("Você deve digitar apenas números")
	}else{
		put.innerText=`Média Ponderada: ${end.toFixed(2)}`;
	}



}

//exe_1_3()

function exe_1_4(){
	/*Faça um programa que receba o salário de
um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um
aumento de 25%*/
	let salario=Number(prompt(`Digite o valor do seu salário:`));

	salario*=1.25;
	if(isNaN(salario)){
		alert("Digite apenas números")
	}else{
		put.innerText=`Novo salário: ${salario.toFixed(2)}`;
	}


}

//exe_1_4();
function exe_1_5(){
	/*Faça um programa que receba o salário de
um funcionário e o percentual de aumento, calcule e mostre o valor do aumento e o
novo salário.*/
	let salario=Number(prompt("Digite o valor de seu salário:"));
	let ajuste=Number(prompt(`Digite o ajuste (em %) do seu salário:`));
	ajuste=(ajuste/100)+1;
	salario*=ajuste
	if(isNaN(salario)){
		alert("Digite apenas números");
	}else{
		put.innerText=`Seu salário foi ajustado para R$${salario.toFixed(2)}`;
		}


	}
	//exe_1_5();
	function exe_1_6(){
		/*Faça um programa que receba o salário-
base de um funcionário, calcule e mostre o salário a receber, sabendo-se que esse
funcionário tem gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o
salário-base.*/


	let base=Number(prompt("Digite o valor do seu salário base:"));
	let bonus=base*0.05;
	let imposto=base*0.07;
	let salario=base+bonus-imposto;
	nan(salario,`Valor a receber: R$ ${salario.toFixed(2)}`);

	}

	//exe_1_6();
	function exe_1_7(){
		/*Faça um programa que receba o salário-
base de um funcionário, calcule e mostre o seu salário a receber, sabendo-se que esse
funcionário teve gratificação de R$ 600,00 e paga imposto de 10% sobre o salário base.*/
	base=Number(prompt("Digite o valor do seu salário base:"));
	imposto=base*0.1;
	salario=base-imposto+600;
	nan(salario,`Você receberá R$${salario.toFixed(2)}`);


	}
	//exe_1_7();
	function exe_1_8(){
		/*Faça um programa que receba o valor de
		um depósito e o valor da taxa de juros, calcule e mostre o valor do rendimento e o
		valor total depois do rendimento.*/
		let deposito=Number(prompt("Insira o valor do depósito:"));
		let rendimento=Number(prompt("Qual a taxa de rendimento?"));
		rendimento=deposito*(rendimento/100);
		nan(rendimento,`Rendimento: R$${rendimento.toFixed(2)}<br>`);
		nan(deposito+rendimento,`Valor total: R$${(deposito+rendimento).toFixed(2)}`);
	}
	//exe_1_8();
	function exe_1_9(){
		/*Faça um programa que calcule e mostre a
		área de um triângulo. Sabe-se que: Área = (base * altura)/2.*/
		let base=Number(prompt("Insira a base"));
		let altura=Number(prompt("Insira a altura"));
		let area=(base*altura)/2;
		nan(area,`Área do triângulo: ${area.toFixed(2)}`);

	}

	//exe_1_9();
	function exe_1_10(){

		/*Faça um programa que calcule e mostre a
		área de um círculo. Sabe-se que: Área = Pi * R2, aonde Pi = 3,14.*/
		let raio=Number(prompt("Insira o raio:"))
		let area=3.14*(raio**2);
		nan(area,`Área do círculo: ${area}`);

	}
	//exe_1_10();
	function exe_1_11(){
		/*Jeremias possui um cronômetro que consegue marcar o tempo apenas em segundos.
		  Sabendo disso, desenvolva um algoritmo que receba o tempo cronometrado, em
		  segundos, e diga quantas horas, minutos e segundos se passaram a partir do tempo
		  cronometrado.*/
		  let segundos=Number(prompt("Quantos segundos transcorreu no cronômetro?"));
		  let minutos=0,horas=0;
		  if(segundos>=60){
		  	minutos=parseInt(segundos/60);
		  	segundos-=minutos*60;
		  }
		  if(minutos>=60){
		  	horas=parseInt(minutos/60);
		  	minutos-=horas*60;
		  }

		  nan(horas,`Horas: ${horas}<br>`);
		  nan(minutos,`Minutos: ${minutos}<br>`);
		  nan(segundos,`Segundos: ${segundos}`);


	}

	//exe_1_11();
	function exe_1_12(){

		/*Desenvolva um algoritmo que emule um caixa eletrônico. O usuário deve inserir o
		  valor total a ser sacado da máquina e o algoritmo deve informar quantas notas de 100,
		  50, 20, 10, 5 ou 2 reais serão entregues. Deve-se escolher as notas para que o usuário
		  receba o menor número de notas possível.*/

		  let valor=Number(prompt("Insira o valor a sacar:"))
		  let cem=0, cinquenta=0, vinte=0, dez=0, cinco=0, dois=0;
		  if(valor>=100){
		  	cem=parseInt(valor/100);
		  	valor-=cem*100;
		  }
		  if(valor>=50){
		  	cinquenta=parseInt(valor/50);
		  	valor-=cinquenta*50;
		  }
		  if(valor>=20){
		  	vinte=parseInt(valor/20);
		  	valor-=vinte*20;
		  }
		  if(valor>=10){
		  	dez=parseInt(valor/10);
		  	valor-=dez*10
		  }
		  if(valor>=5){
		  	cinco=parseInt(valor/5);
		  	valor-=cinco*5;
		  }
		  if(valor>=2){
		  	dois=parseInt(valor/2);
		  	valor-=dois*2;
		  }
		  nan(cem,`Nº de notas de R$ 100,00: ${cem}<br>`);
		  nan(cinquenta,`Nº de notas de R$ 50,00: ${cinquenta}<br>`);
		  nan(vinte,`Nº de notas de R$ 20,00: ${vinte}<br>`);
		  nan(dez,`Nº de notas de R$ 10,00: ${dez}<br>`);
		  nan(cinco,`Nº de notas de R$ 5,00: ${cinco}<br>`);
		  nan(dois,`Nº de notas de R$ 2,00: ${dois}<br>`);




	}
	//exe_1_12();

	function exe_1_13(){

		/*Faça um programa que receba um número
		positivo e maior que zero, calcule e mostre:
		a) o número digitado ao quadrado;
		b) o número digitado ao cubo;
		c) a raiz quadrada do número digitado;
		d) a raiz cúbica do número digitado.*/
		let num=Number(prompt("Insira um número:"));
		if(num<=0){
			alert("Digite um número maior que 0");
		}else{
			nan(num,`O quadrado de ${num}:${num**2}<br>`);
			nan(num,`O cubo de ${num}:${num**3}<br>`);
			nan(num,`A raiz quadrada de ${num}:${Math.sqrt(num).toFixed(2)}<br>`);
			nan(num,`A raiz cúbica de ${num}:${Math.cbrt(num).toFixed(2)}<br>`);

		}

	}
	//exe_1_13();
	function exe_1_14(){

		/*Faça um programa que receba dois
		  números maiores que zero, calcule e mostre um elevado ao outro.*/
		  let base=Number(prompt("Digite a base:"));
		  let exp=Number(prompt("Digite o expoente da exponenciação:"));
		  let total=base**exp;
		  nan(total,`Resultado: ${total}`);
	}
	//exe_1_14();
	function exe_1_15(){
		/*Sabe-se que:
		  1 pé = 12 polegadas;
		  1 jarda = 3 pés;
		  1 milha = 1760 jardas;
		  Faça um programa que receba uma medida em pés, faça as conversões a seguir e
		  mostre os resultados.
		  a) polegadas;
		  b) jardas;
		  c) milhas.*/
		  let pes=Number(prompt("Insira a medida em pés"));
		  let polegadas=pes*12;
		  let jardas=parseInt(pes/3);
		  let milhas = parseInt(jardas/1760);
		  nan(polegadas,`Polegadas: ${polegadas}<br>`);
		  nan(jardas,`Jardas: ${jardas}<br>`);
		  nan(milhas,`Milhas: ${milhas}<br>`);
		}
		//exe_1_15();
		function exe_1_16(){

			/*Faça um programa que receba o ano de
			  nascimento de uma pessoa e ano atual, calcule e mostre:
			  a) a idade dessa pessoa;
			  b) quantos anos essa pessoa terá em 2030;*/
			  let nasc=Number(prompt("Em qual ano nasceu?"));
			  let atual=Number(prompt("Insira o ano atual"));
			  let idade=atual-nasc;
			  idade30=2030-nasc;
			  nan(atual,`Idade atual: ${idade}<br>`);
			  nan(idade30,`Quantos anos terá em 2030: ${idade30}`);

		}
		//exe_1_16();

		function exe_2_1(){
			/*O custo de um carro novo ao consumidor
			  final é o preço de fábrica somado ao percentual de lucro do distribuidor, acrescido dos
			  impostos aplicados ao preço de fábrica. Faça um programa que receba o preço de
			  fábrica de um veículo, o percentual de lucro do distribuidor e o percentual de
			  impostos. Em cada item, crie uma função distinta para calcular e retornar:
			  a) o valor correspondente ao lucro do distribuidor;
			  b) o valor correspondente aos impostos;
			  c) o preço final do veículo.
			  Após criar cada uma das funções, desenvolva um algoritmo que declare e invoque cada
			  uma das funções, mostrando o lucro do distribuidor, os impostos e o valor final do
			  veículo.*/
			  function recv(){
			  	let preco=Number(prompt("Digite o valor do carro"));
			  	let lucro=Number(prompt("Digite o percentual de lucro da fábria"));
			  	let imposto=Number(prompt("Digite o percentual de impostos"))
			  	let dados= {valor:preco,
			  			lucro:(lucro/100),
			  			imposto:(imposto/100)};
			  	return dados;
			  }
			  var dados=recv();
			  function lucrar(){
			  	let d=dados.valor*dados.lucro;
			  	return d
			  }
			  function impostos(){
			  	return dados.valor*dados.imposto;
			  }
			  function totalizar(){
			  		total=dados.valor+lucrar()+impostos();
			  		return total;

			  }
			  nan(lucrar(),`Lucro do distribuidor: R$${lucrar()}<br>`);
			  nan(imppostos(),`Impostos: R$${impostos()}<br>`);
			  nan(totalizar(),`Valor final: R$${totalizar()}<br>`);


			 

		}
		//exe_2_1();
		function exe_2_2(){
			/*Faça um programa que receba o número de

			horas trabalhadas por um gestor e o valor do salário 
			mínimo vigente. Crie uma função
			que calcule o salário a receber do gestor, seguindo as 
			regras abaixo:
			I - a hora trabalhada vale a metade do salário mínimo;
			II - o salário bruto equivale ao número de horas 
			trabalhadas multiplicado pelo valor da
			hora trabalhada;
			III - o imposto equivale a 3% do salário bruto;
			IV - o salário a receber equivale ao salário bruto menos o 
			imposto.
			Crie um algoritmo que invoque a respectiva função e 
			mostre o salário a receber.*/
			let horas=Number(prompt("Declare quantas horas o gestor trabalhou"));
			let salario=Number(prompt("Informe o salário mínimo"));
			let hrTrabalhada=salario/2;
			let bruto=horas*hrTrabalhada;
			let imposto=bruto*0.03;
			nan((bruto-imposto),`Salário a receber: R$ ${bruto-imposto}`);


			
		}

		//exe_2_2();

		function exe_2_3(){
			/*Pedro comprou um saco de ração para seus
			gatos, com o peso em quilos. Faça uma função que receba o peso do saco de ração,
			em quilos, o número de gatos e a quantidade de ração fornecida para cada gato por
			dia, em gramas. A função deve retornar o total de quilos de ração restante no saco,
			após um dia de consumo. Assim sendo, considerando que Pedro possui dois gatos, crie
			um algoritmo que invoque a função recém criada para calcular e mostrar quanto
			restará de ração no saco após cinco dias.*/

			let saco=Number(prompt("Qual o peso do saco? (quilos)"));
			let nGatos=Number(prompt("Qual o número de gatos?"));
			let gramas=Number(prompt("Quanto come cada gato em média por dia?(em gramas)"))/1000;
			let dias =Number(prompt("Quer calcular a sobra de ração após quantos dias?"));
			let consumo= gramas*nGatos*dias;
			nan((saco-consumo),`após ${dias} dias, sobrarão: ${saco-consumo}kg de ração`);


		}
		//exe_2_3();
		function exe_2_4(){
			/*Cada degrau de uma escada tem X cm de
			  altura. Faça uma função que receba essa altura, em centímetros, e a altura que o
			  usuário deseja alcançar ao subir a escada, em metros. A função deve retornar o
			  número de degraus necessários para se atingir a altura desejada (desprezando a altura
			  do próprio usuário). Em seguida, crie um algoritmo para que o usuário possa informar
			  os dados de entrada da função e, ao final, calcule e mostre o número de degraus.*/
			  let cm = Number(prompt("Insira a altura de cada degrau (em centímetros):"))/100;
			  let mt =Number(prompt("Insira a altura da escada (em metros):"));
			  let degraus=parseInt(mt/cm)
			  nan(degraus,`Número de degraus: ${degraus}`);

		}
		//exe_2_4();

		function exe_2_5(){
			/*Sabe-se que o quilowatt de energia custa
			um milésimo do salário mínimo. Faça um procedimento que receba o valor do salário
			mínimo e quantidade de quilowatts consumida por uma residência. O procedimento
			deve calcular e retornar através de passagem de parâmetros por referência:
			a) o valor, em reais, de cada quilowatt;
			b) o valor, em reais, a ser pago por essa residência;
			c) o valor, em reais, a ser pago com desconto de 15%.
			Sabendo disso, desenvolva um algoritmo que peça para o usuário inserir o valor do
			salário mínimo e a quantidade de quilowatts consumida. Invoque o respectivo
			procedimento e mostre, na tela, as informações dos itens a), b) e c).*/
			let salario = Number(prompt("Insira o salário mínimo:"));
			let qwatts=Number(prompt("Insira a quantidade de KW gastos:"));
			let valorQWatts=salario/1000
			nan(valorQWatts,`Valor de 1 KW (em R$): ${valorQWatts}<br>`);
			let pagar=valorQWatts*qwatts
			nan(pagar,`Valor a ser pago (em R$): ${pagar}<br>`);
			let desconto=pagar-(pagar*0.15);
			nan(desconto,`Valor a pagar com desconto (em R$): ${desconto}`);
		}
		//exe_2_5();
		function exe_2_6(){
			/*Faça um procedimento que receba um
			  número real, calcule e retorne:
			  a) a parte inteira desse número;
			  b) a parte fracionária desse número.
			  Crie um algoritmo que peça para o usuário inserir o número real e, em seguida, calcule
			  e mostre o que se pede nos itens a) e b).*/
			  let real = prompt("Insira um número real:")
			  if(real.split(',').length>1){
			  	var partes = real.split(',');
			  }else{
			  	var partes=real.split('.');
			  }
			  nan(parseInt(partes[0]),`Valor inteiro: ${parseInt(partes[0])}<br>`);

			  put.innerHTML+=`Valor fracionado: ${'0,'+partes[1]}`;
		}
		//exe_2_6();
		
		function exe_2_7(){
			/*Crie um procedimento que receba a
			quantidade de dinheiro em reais que uma pessoa que vai viajar possui. Essa pessoa vai
			passar por vários países e precisa converter seu dinheiro em dólares, euro e libra
			esterlina. Sabe-se que a cotação do dólar é de R$ 4,00, do euro é R$ 4,25 e do iene é
			R$ 0,10. O procedimento deverá fazer a leitura dos dados do usuário e exibir o
			resultado das conversões diretamente, sem passagem de parâmetros. Desenvolva um
			algoritmo que invoque o procedimento para realizar os cálculos.*/
			let reais = Number(prompt("Insira o valor em R$:"));
			nan(reais,` Em dólar: $${reais/4.00}<br>`);
			nan(reais,`Em euro: ¢$${reais/4.25}<br>`);
			nan(reais,`Em ienes: ${reais/0.1}`);
		}

		//exe_2_7();
		function exe_3_1(){
			/*Faça um programa que receba dois números
			e mostre o maior deles. Caso eles sejam iguais, deve-se mostrar a mensagem "Os
			números são iguais".*/
			let a = Number(prompt("Insira o 1º número:"));
			let b = Number(prompt("Insira o 2º número:"));
			if(a>b){
				nan(a,`O maior é: ${a}`)
			}else if(b>a){
				nan(b,`O maior é: ${b}`)
			}else{
				nan(a,`Ambos são iguais`)
			}
		}
		//exe_3_1();
		function exe_3_2(){
			/*Desenvolva um algoritmo que receba três números. O algoritmo deve imprimir
			"Condição satisfeita", na tela, caso o primeiro dado inserido seja maior do que os outros
			dois (o primeiro não pode ser igual a nenhum). Caso contrário, deve ser impressa a
			mensagem: "Erro".*/
			let a = Number(prompt("Insira o 1º número:"));
			let b = Number(prompt("Insira o 2º número:"));
			let c = Number(prompt("Insira o 3º número:"));
			if(a>b && a>c){
				nan(a,`Condição satisfeita`);
			}else{
				nan(a, `Erro`);
			}
		}
		//exe_3_2();
		function exe_3_3(){
			/*Faça um programa que receba um número
			  inteiro e verifique se esse número é par ou ímpar.*/
			  let num =Number(prompt("Insira um número:"))
			  if(num%2===0){
			  	nan(num,`É par`);
			  }else{
			  	nan(num,`É ímpar`);
			  }
		}
		//exe_3_3();
		function exe_3_4(){
			/*Desenvolva um algoritmo que receba dois números, calcule e mostre a multiplicação
			  entre eles, se ambos forem iguais. Caso o primeiro seja maior que o segundo, mostre a
			  subtração do primeiro pelo segundo. Caso contrário, mostre a soma entre os dois.*/
			  let a =Number(prompt("Insira o 1º número"));
			  let b =Number(prompt("Insira o 2º número"));
			  if(a===b){
			  	nan(a*b,`Multiplicação: ${a*b}`)
			  }else if(a>b){
			  	nan(a-b,`Subtração: ${a-b}`)
			  }else{
			  	nan(a+b,`Soma: ${a+b}`)
			  }
			  
		}
		//exe_3_4();
		function exe_3_5(){
			/*Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção de o
			  usuário escolher entre: 1 - Somar; 2 - Subtrair; 3 - Multiplicar; 4 - Dividir. O usuário só
			  conseguirá processar dois números inteiros por vez.*/
			  let op=Number(prompt(`Digite 1 para somar;\nDigite 2 para subtrair;\nDigite 3 para multiplicar;\nDigite 4 para dividir;\n`));
			  let a=Number(prompt("Digite o 1º valor:"));
			  let b=Number(prompt("Digite o 2º valor:"));
			  if(op===1){
			  	nan(a+b,`Soma: ${a+b}`)
			  }else if(op===2){
			  	nan(a-b,`Subtração: ${a-b}`)
			  }else if(op===3){
			  	nan(a*b,`Multiplicar: ${a*b}`)
			  }else if(op===4){
			  	nan(a/b,`Divisão: ${a/b}`)
			  }else{
			  	alert("Insira uma opção válida")
			  }
		}
		//exe_3_5();
		function exe_3_6(){
			/*Desenvolva um algoritmo que peça para que o usuário informe a base e a altura de um
			  retângulo, e um terceiro número inteiro "op". Caso o usuário escolha "op" igual a 0,
			  calcule e mostre o perímetro do retângulo. Caso o usuário insira um valor 1 para "op",
			  calcule e mostre a área do retângulo. Se o usuário inserir um valor diferente de 0 e 1
			  para "op", mostrar a mensagem "Opção inválida.".*/
			  let base=Number(prompt("Digite a base do retângulo"));
			  let altura = Number(prompt("Digite a altura do retângulo"));
			  let op = Number(prompt("Digite 0 para calcular o perímetro e 1 para calcular a área"))
			  if(op===0){
			  	nan(base,`Perímetro: ${(base*2)+(altura*2)}`)
			  }else if(op===1){
			  	nan(base,`Área: ${base*altura}`);
			  }else{
			  	put.innerHTML+=`Opção inválida`;
			  }

		}
		//exe_3_6();
		function exe_3_7(){
			/*A nota final de um estudante é calculada a
			  partir de três notas atribuídas respectivamente a um trabalho de laboratório, a uma
			  avaliação semestral e a um exame final. A média das três notas mencionadas
			  anteriormente obedece aos pesos a seguir:Trabalho de laboratório 2,Avaliação semestral 3,Exame final 5*/
			  let trabalho=Number(prompt("Insira a nota do trabalho:"))*2;
			  let exame=Number(prompt("Insira a nota do exame:"))*3;
			  let final=Number(prompt("Insira a nota da prova final:"))*5;
			  let media=(trabalho+exame+final)/10;
			  if(media>=8){
			  	nan(media,`Conceito A`)
			  }else if(media>=7){
			  	nan(media,`Conceito B`)
			  }else if(media>=6){
			  	nan(media,`Conceito C`)
			  }else if(media>=5){
			  	nan(media,`Conceito D`)
			  }else{
			  	nan(media,`Conceito E`)
			  }
		}
		//exe_3_7()
		function exe_3_8(){
			/*Faça um programa que receba três notas de
			  um aluno, calcule e mostre a média aritmética e a mensagem que segue a tabela abaixo.
			  Para alunos de exame, calcule e mostre a nota que deverá ser tirada no exame para
			  aprovação, considerando que a média no exame é 6,0.

			  Média aritmética			Mensagem
			  0,0 ~ 3,0 				Reprovado
			  3,0 ~ 7,0 				Exame
			  7,0 ~ 10,0 				Aprovado
			  */
			  let n1=Number(prompt("Insira a 1ª nota"));
			  let n2=Number(prompt("Insira a 2ª nota"));
			  let n3=Number(prompt("Insira a 3ª nota"));
			  let media=(n1+n2+n3)/3
			  nan(media,`Média: ${media}<br>`);
			  if(media>=7){
			  	nan(media,`Aprovado!`)
			  }else if(media>=3){
			  	nmedia=6+(6-media);
			  	nan(nmedia,`Exame.<br>É preciso tirar ${nmedia}`)

			  }else{
			  	nan(media,`Reprovado.`);
			  }

		}
		//exe_3_8();
		function exe_3_9(){
			/*Faça um programa que receba três números
			distintos e mostre-os em ordem crescente.*/
			const arr=[];
			for(x=0;x<3;x++){
				let n=Number(prompt(`Insira o ${x+1}º número`))
				arr.push(n)
			}
			arr.sort((a,b)=>{
				if(a>b){return 1;}
				if(a<b){return -1;}
				return 0;
			});
			nan(arr[0],`${arr[0]}-${arr[1]}-${arr[2]}`);

		}
		//exe_3_9();
		function exe_3_10(){
			/*Faça um programa que receba três números
			  obrigatoriamente em ordem crescente e um quarto número que não siga esta regra.
			  Mostre, em seguida, os quatro números em ordem não-crescente.*/
			  let arr =[]
			  for(x=0;x<4;x++){
			  	let n=Number(prompt(`Insira o ${x+1}º número:`));
			  	arr.push(n)
			  }
			  if(arr[0]>=arr[1] || arr[1]>=arr[2] || arr[0]>=arr[2]){
			  	nan(arr[0],`Operação inválida, coloque os 3 primeiros números em ordem crescente`)
			  }else{
			  	arr.sort((a,b)=>a-b).reverse();

			  	nan(arr[0],`${arr[0]}-${arr[1]}-${arr[2]}-${arr[3]}`)

			  }
		}
		//exe_3_10();
		function exe_3_11(){
			/*Desenvolva um algoritmo que peça ao usuário que informe os coeficientes a, b e c de
			  uma equação de segundo grau: ax2 + bx + c. Com base na Fórmula de Bhaskara, calcule
			  e mostre as raízes da respectiva equação de segundo grau.*/
			  let a = Number(prompt(`Insira o coeficienta a`));
			  let b = Number(prompt(`Insira o coeficienta b`));
			  let c = Number(prompt(`Insira o coeficienta c`));
			  let delta=(b**2)-4*a*c;
			  if(delta<0){
			  	nan(delta,`Raízes imaginárias`);
			  }else{
			  	 x1=(-b + Math.sqrt(delta))/(2*a)
			     x2=(-b - Math.sqrt(delta))/(2*a)
			     nan(x1,`Raíz x': ${x1}<br>`);
			     nan(x2,`Raíz x'': ${x2}`);

			  }
			 

		}
		//exe_3_11();
		function exe_3_12(){
			let a =Number(prompt("Insira o número (A)"));
			let b =Number(prompt("Insira o número (B)"));
			let c =Number(prompt("Insira o número (C)"));
			let arr=[a,b,c];
			let i =Number(prompt("Insira a opção (I)"));
			if(i===1){
				arr.sort((a,b)=> a-b)
				nan(arr[0],`${arr[0]}-${arr[1]}-${arr[2]}`);
			}else if(i===2){
				arr.sort((a,b)=> a-b).reverse()
				nan(arr[0],`${arr[0]}-${arr[1]}-${arr[2]}`)
			}else if(i===3){
				maior=arr.splice(arr.indexOf(Math.max(...arr)),1)
				nan(arr[0],`${arr[0]}-${maior}-${arr[1]}`)
			}

		}
		//exe_3_12();
		function exe_3_13(){
			/*Faça um programa que mostre o menu de
			  opções a seguir, receba a opção do usuário e dos dados necessários para executar cada
			  operação. Suponha que o usuário não irá inserir valores inválidos.
			  Menu de opções:
			  1. Somar dois números
			  2. Raiz quadrada de um número
			  Digite a opção desejada*/
			  let op = Number(prompt(`---Menu de opções---\n1->Somar dois números\n2-> Tirar a raiz quadrada de um número`))
			  if(op===1){
			  	let n1 = Number(prompt(`Digite o 1º número`))
			  	let n2 = Number(prompt(`Digite o 2º número`))

			  	nan(n1+n2,`Resultado da soma: ${n1+n2}`)

			  }else if(op===2){
			  	let n =Number(prompt(`Digite o número para tirar a raiz quadrada`))
			  	nan(n,`Raiz de ${n}: ${Math.sqrt(n)}`)
			  }
		}
		//exe_3_13();
		function exe_3_14(){
			/*Faça um programa que receba a hora de
			  início de um jogo e a hora final do jogo (cada hora é composta por duas variáveis inteiras:
			  hora e minuto). Calcule e mostre a duração do jogo (horas e minutos) sabendo-se que o
			  tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e
			  terminar no dia seguinte. Observação: utilizar o formato de hora que vai das 00hr00min
			  até as 23hr59min.*/

			  let inicio=prompt("Digite a hora inicial da partida(no formato HH:MM)")
			  let fim = prompt(`Digite a hora final da partida(no formato HH:MM)`)
			  inicio=inicio.split(':');
			  fim=fim.split(':');
			  if(parseInt(inicio[0])>12 && parseInt(fim[0])<12){
			  	fim[0]=parseInt(fim[0])+24
			  }
			
			  let horas = parseInt(fim[0])-parseInt(inicio[0])
			  if(horas<0){
			  	horas= horas*(-1);
			  }
			  let minutos=parseInt(fim[1])-parseInt(inicio[1])
			  if(minutos<0){
			  	horas--;
			  	minutos = 60+minutos;

			  }
			  if(horas>24){
			  	nan(horas,`${horas}<br>`)
			  	nan(horas,`Erro: Digite um horário no padrão de 24hrs (entre 00:00 e 23:59)`);
			  }else if(minutos>59){
			  	nan(minutos,`${minutos}<br>`)
			  	nan(horas,`Erro: Digite um horário no padrão de 24hrs (entre 00:00 e 23:59)`);

			  }else{
			  	nan(horas,`Tempo de jogo transcorrido: ${horas}hr${minutos}min.`)
			  }

		}
		//exe_3_14();
		function exe_3_15(){
			/*Faça um programa que receba o salário de
			  um funcionário, calcule e mostre o novo salário desse funcionário, acrescido de
			  bonificação e de auxílio-escola.*/
			  salario=Number(prompt(`Digite o salário do funcionário`))
			  let bonus=0;
			  let creche=0;
			  if(salario<=500){
			  	bonus=salario*0.05
			  	}else if(salario<=1200){
			  		bonus=salario*0.12
			  	}else if(salario>1200){
			  		bonus=0
			  	}
			  	if(salario<=600){
			  		creche=150
			  	}else if(salario>600){
			  		creche=100
			  	}
			  let total=salario+bonus+creche;
			  nan(total,`Salário total: R$${total}`);

		}
		//exe_3_15();
		function exe_4_1(){
			/*Desenvolva um algoritmo que some todos os números inteiros compreendidos entre 1
			e 10 (inclusive)*/
			soma=0;
			for(let x=1;x<11;x++){
				soma+=x
				nan(soma,`${soma}<br>`)
			}
		}
		//exe_4_1()
		function exe_4_2(){
			/*Desenvolva um algoritmo que receba dois números inteiros positivos A e B. Exiba na
			  tela todos os números inteiros compreendidos entre A e B, excluindo os próprios A e
			  B. Suponha que o usuário respeite o enunciado e insira valores válidos para A e B.*/
			  let a = Number(prompt(`Digite um número inteiro:`))
			  let b = Number(prompt(`Digite um número inteiro maior que o anterior`))
			  for(let x=a+1;x<b;x++){
			  	nan(x,`${x}<br>`)
			  }
		}
		//exe_4_2();
		function exe_4_3(){
			/*Desenvolva um algoritmo que receba um número N e calcule o fatorial de N, sabendo
				que N! = N * (N-1) * (N-2) * ... * 3 * 2 * 1.*/
				let n = Number(prompt(`Digite um número para fazermos o fatorial`))
				let mult=n;
				let x=n-1;
				while(x>1){
					mult*=x;
					x--;
				}
				nan(mult,`Fatorial de ${n}!: ${mult}`)
		}
		//exe_4_3();
		function exe_4_4(){
			/*Desenvolva um algoritmo que receba um número N e imprima a tabuada de N, na tela.*/
			let n = Number(prompt(`Insira N:`))
			for(let x=1; x<11;x++){
				nan(x,`${n}X${x} = ${n*x}<br>`)
			}


		}
		//exe_4_4();
		function exe_4_5(){
			/*Charlinho tem 11 anos, mede 1,40 metros de altura e cresce em média 2,1
			  centímetros ao ano. Seu irmão, Bossa, aos 14 anos, tem 1,45 metros de altura e cresce
			  em média 1,1 centímetro por ano. Elabore um programa que conte quantos anos
			  serão necessários para que a altura de Charlinho ultrapasse a de Bossa.*/
			  let carlinho=140
			  let bossa = 145
			  let anos=0;
			  while(carlinho<=bossa){
			  	anos+=1;
			  	carlinho+=2.1;
			  	bossa+=1.1
			  	

			  }
			  nan(anos,`Serão necessários ${anos} anos para Carlinho ultrapassar Bossa em Altura.`)
		}
		//exe_4_5();
		function exe_4_6(){
			/*Um funcionário de uma empresa recebe
			  aumento salarial anualmente. Sabe-se que:
			  a) esse funcionário foi contratado em 2015, com salário inicial de R$ 1.000,00;
			  b) em 2016 recebeu aumento de 1,5% sobre seu salário inicial;
			  c) a partir de 2017 (inclusive), os aumentos salariais sempre corresponderam ao dobro
			  da porcentagem do ano anterior.
			  Faça um programa que receba o ano atual determine o salário atual desse funcionário.*/
			  
			  let inicio=1000;
			  let aumento=0.015;
			  let salario=inicio+(inicio*aumento)

			  anoAtual=Number(prompt(`Digite o ano atual.`));
			  
			  	for(let x=2017;x<=anoAtual;x++){
			  		aumento*=2;
			  		salario=salario+(salario*aumento);
			  		
			  	}
			  	nan(salario,`Salário atual: R$${salario}`)
			  

		}
		//exe_4_6();
		function exe_4_7(){
			/*Desenvolva um algoritmo que peça para o usuário inserir vários números inteiros. O
			  algoritmo deverá contabilizar a quantidade de números positivos informados. Caso o
			  usuário digite 0, o algoritmo deve mostrar quantidade contabilizada e encerrar.*/
			  let x=1;
			  let n=0;
			  while(x!==0){
			  	x=Number(prompt(`Digite um número (0 para encerrar)`))
			  	if(x>0){
			  		n++;
			  	}
			  }
			  nan(n,`Total de números positivos digitados: ${n}`)

		}
		//exe_4_7();
		function exe_4_8(){
			/*Desenvolva um algoritmo que peça para o usuário informar dois números. Após isso, o
			  algoritmo deve mostrar cálculo o primeiro número elevado ao segundo. Ao final, o
			  algoritmo deve perguntar se o usuário deseja repetir a operação. Caso o usuário insira
			  o caractere "s", o algoritmo solicita novamente dois números e mostra novamente a
			  potência do primeiro pelo segundo. Caso contrário, o algoritmo é encerrado.*/
			  let s='s'
			  while(s==='s'){
			  	let n1=Number(prompt(`Digite a base da potência:`))
			  	let n2=Number(prompt(`Digite o expoente da potência.`))
			  	alert(`Potência de ${n1} por ${n2}: ${n1**n2}`)
			  	s=prompt(`Deseja fazer de novo? tecle 's' para sim e qalquer outra tecla para encerrar.`)
			  	if(s!=='s'){break;}
			  }
		}
		//exe_4_8();
		function exe_4_9(){
			/*Desenvolva um algoritmo que peça ao usuário que insira dois números inteiros
			  positivos A e B, no qual A deve ser menor que B (supõe-se que o usuário irá respeitar
			  esse enunciado). O algoritmo deve mostrar, na tela, todos os números ímpares
			  compreendidos entre A e B (inclusive).*/
			  let a=Number(prompt(`Digite um número inteiro`))
			  let b=Number(prompt(`Digite um número inteiro maior que o anterior.`))
			  nan(1,`Números ímpares entre ${a} e ${b}:<br>`);
			  for(x=a;x<=b;x++){
			  	if(x%2!==0){
			  		nan(x,`É ímpar:${x}<br>`)
			  	}

			  }
		}
		//exe_4_9();
		function exe_4_10(){
			/*Faça um programa que leia dez conjuntos
			  de dois valores, o primeiro representando o número do aluno e o segundo
			  representando sua altura em centímetros. Encontre o aluno mais alto e o mais baixo.
			  Mostre o número do aluno mais alto e o número do mais baixo, junto com suas
			  alturas.*/
			  const cod=[];
			  const alturas=[];
			  for(let x=0;x<10;x++){
			  	let num=Number(prompt(`Insira o código do aluno`));
			  	let altura=Number(prompt(`Insira a altura do aluno(em cm)`));
			  	cod.push(num);
			  	alturas.push(altura);
			  }
			  let alto=cod[alturas.indexOf(Math.max(...alturas))]
			  let baixo=cod[alturas.indexOf(Math.min(...alturas))]
			  nan(alto,`Aluno mais alto é o ${alto} com ${Math.max(...alturas)} cm de altura<br>`);
			  nan(baixo,`Aluno mais baixo é o ${baixo} com ${Math.min(...alturas)} cm de altura`);


		}
		//exe_4_10();
		function exe_4_11(){

			/*Faça um programa que mostre os oito
			  primeiros termos da sequência de Fibonacci.
			  0-1-1-2-3-5-8-13-21-34-55-*/
			  let n=0;
			  let n1=0;
			  let n2=1;
			  
			  for(x=1;x<9;x++){
			  	nan(n1,`${n1}- `)
			  	n=n1+n2;
			  	n2=n1;
			  	n1=n;
			  	

			  	
			  	}
			  	
			  }
			  //exe_4_11();
			  function exe_4_12(){
			  	/*Desenvolva um algoritmo que receba um
				  número N e informe se N é um número primo, ou não. A saber: um número primo é
				  um inteiro positivo que só pode ser dividido por ele mesmo e por um, apenas.*/
				 
				  let n=Number(prompt(`Insira um número:`))
				  for(let x=2; x<n;x++){
				  	if(n%x===0){
				  		return nan(n,`${n} não é um número primo`);
				  		
				  			}

				  		}
				  	
				  		return nan(n,`${n} É um número primo`)

				  	}

			//exe_4_12();
			function exe_4_13(){

				/*Desenvolva um algoritmo que mostre a tabuada de todos os números inteiros
				  compreendidos entre 1 e 10 (inclusive).*/
				  for(let x=1;x<=10;x++){
				  	for(let j=1;j<=10;j++){
				  		nan(j,`${x} X ${j} = ${x*j}<br>`)
				  	}
				  }
			}
			//exe_4_13();
			function exe_4_14(){
				/*Faça um programa que leia um número N e
				  que indique quantos valores inteiros e positivos devem ser lidos a seguir. Para cada
				  número lido, mostre o fatorial desse valor.*/
				  let n =Number(prompt(`Quantos números serão informados?`))
				  for(let x=0;x<n;x++){
				  	let num=Number(prompt(`Insira o número ${x+1}`))
				  	let mult=num;
					let j=num-1;
					while(j>1){
						mult*=j;
						j--;
					}
					alert(`Fatorial de ${num} é ${mult}`);

				  }
			}
			//exe_4_14();
			function exe_4_15(){

				/*Faça um programa que leia um valor N
				  inteiro e positivo, calcule e mostre o valor de E, conforme a fórmula a seguir:
				  E = 1 + 1/1! + 1/2! + 1/3! + ... + 1/N!*/

				  let n=Number(prompt(`Insira o valor de N:`))
				  let e=1;
				  let fat=1;
				  for(x=1;x<=n;x++){
				  	fat=1;
				  	for(j=1;j<=x;j++){
				  		fat*=j;
				  	}
				  	e+=(1/fat);
				  }
				  nan(e,`Resultado: ${e}`);
			}
			//exe_4_15();
			function exe_4_15(){
				/*Desenvolva um algoritmo que peça ao
				  usuário que insira cinco conjuntos de dois números inteiros positivos (A, B), no qual A
				  deve ser menor que B (supõe-se que o usuário irá respeitar esse enunciado). Para cada
				  dupla (A, B), informada pelo usuário, o algoritmo deve mostrar, na tela, todos os
				  números pares compreendidos entre A e B (inclusive).*/
				  for(let x=0;x<5;x++){
				  		let a=Number(prompt(`Digite um valor inteiro:`))
				  		let b=Number(prompt(`Digite outro valor inteiro maior:`))
				  		for(j=a;j<=b;j++){
				  			if(j%2===0){
				  				nan(j,`É par: ${j}<br>`)
				  			}
				  		}
				  }
			}
			//exe_4_15();
			function exe_5_1(){

				let arr=[];
				for(let x=0;x<10;x++){
					arr.push(Number(prompt(`Insira o dado da posição ${x+1}`)))
				}
				let soma=0
				for(let x=0;x<arr.length;x++){
					soma+=arr[x]
				}
				nan(soma,`Soma de todos os dados do array: ${soma}<br>`)
				nan(soma,`Média dos termos: ${soma/arr.length}`)
				
			}
			//exe_5_1();
			function exe_5_2(){
				/*Desenvolva um algoritmo que preencha um vetor de 5 posições com valores reais
				  compreendidos entre 1 e 100 (suponha que o usuário irá respeitar o enunciado). Ao
				  final, o algoritmo deve mostrar, na tela, o conteúdo de cada posição do vetor, dividido
				  por 100.*/
				  let arr=[];
				  for(let x=0; x<5;x++){
				  	arr.push(Number(prompt(`insira o ${x+1}º dado:`)))
				  }
				  for(let x=0; x<arr.length;x++){
				  	nan(1,`${x+1}º termo dividido por 100: ${arr[x]/100}<br>`)
				  }
			}
			//exe_5_2();
			const exe_5_3=()=>{
				/*Desenvolva um algoritmo que preencha um vetor numérico de 10 posições. Após
				  preencher todo o vetor, o usuário deve inserir uma chave de busca X. Caso exista
				  algum número igual a X, dentro do vetor, o algoritmo deve mostrar, na tela, o índice
				  da primeira posição na qual X foi encontrado. Caso contrário, o algoritmo deve se
				  encerrar com uma única mensagem, dizendo "Chave não encontrada.".*/
				  let arr=[]
				  for(let j=0; j<10;j++){
				  	arr.push(Number(prompt(`Digite o ${j+1}º número:`)))

				  }
				  
				  let x=Number(prompt(`Qual número você quer buscar?`))
				  

				  if(arr.indexOf(x)===(-1)){
				  	nan(1,`Chave não encontrada`)
				  }else{
				  	nan(arr.indexOf(x),`A primeira ocorrência de ${x} é na ${arr.indexOf(x)+1}ª posição.`)
				  }

			}
			//exe_5_3();
			const exe_5_4=()=>{
				/*Faça um programa que carregue um vetor e
				  nove elementos numéricos inteiros, calcule e mostre os números primos e suas
				  respectivas posições.*/
				  let arr=[];
				  for(let x=0;x<9;x++){
				  	arr.push(Number(prompt(`Digite o ${x+1}º número:`)));
				  			}

				  const primo=(n)=>{
				  	for(let x=2; x<n;x++){
				  		if(n%x===0 || n<2){
				  			return false;
				  			}
				  		}



				  	
				  	return true;
				  }

				  
				  for(let x=0;x<arr.length; x++){
				  	if(primo(arr[x])){
				  		nan(arr[x],`${arr[x]} é primo e está na ${arr.indexOf(arr[x])+1}ª posição.<br>`)
				  		}


				  	}

				  	
				  

			}

			//exe_5_4();
			const exe_5_5=()=>{

				/*Faça um programa que carregue dois
				  vetores de dez elementos numéricos cada um e mostre um vetor resultante da
				  intercalação desses dois vetores.*/
				  let arr1=[];
				  let arr2=[];
				  for(let x=0;x<10;x++){
				  	arr1.push(Number(prompt(`Insira o dado em vet1[ ${x+1}]`)))
				  }
				  for(let x=0;x<10;x++){
				  	arr2.push(Number(prompt(`Insira o dado em vet2[ ${x+1}]`)))
				  }
				  let arr3=[];
				  for(let x=0; x<arr1.length;x++){
				  	arr3.push(arr1[x]);
				  	arr3.push(arr2[x]);
				  }
				  for(let x=0;x<arr3.length;x++){
				  	nan(1,`${arr3[x]} `)
				  }

			}

			//exe_5_5();
			const exe_5_6=()=>{

				/*Faça um programa que carregue um vetor
				  com oito números inteiros, calcule e mostre dois vetores resultantes. O primeiro vetor
				  resultante deve conter os números positivos. O segundo vetor resultante deve conter
				  os números negativos. Cada vetor resultante vai ter no máximo oito posições, sendo
				  que nem todas devem obrigatoriamente ser utilizadas. Imprima o conteúdo dos
				  vetores resultantes, sem que sejam impressos "lixos de memória".*/

				  let vet=[], pos=[], neg=[];
				  for(let x=0; x<8;x++){
				  	vet.push(Number(prompt(`Insira o ${x+1}º dado do vetor`)))
				  }
				  for(let x=0;x<vet.length;x++){
				  	if(vet[x]<=0){
				  		neg.push(vet[x])
				  	}else{
				  		pos.push(vet[x])
				  	}

				  }
				  	nan(1,`Positivos: ${pos}<br>`)
				  	nan(1,`Negativos: ${neg}`)
			}
			//exe_5_6();
			const exe_5_7=()=>{

				/*Desenvolva um algoritmo que preencha cada elemento de uma matriz 3x3 com o
				  quadrado do valor do índice da linha mais o valor do índice da coluna daquela posição.
				  Ao final, o algoritmo deve mostrar a matriz, na tela.*/
				  let vet=[];
				  for(let x=1; x<=3;x++){


				  	let vet2=[];
				  	for(let j=1;j<=3;j++){
				  		vet2.push(x**2+j)

				  	}
				  	vet.push(vet2)
				  }
				 for(x of vet){
				 	nan(1,`${x}<br>`)
				 }
			}
			//exe_5_7();
			const exe_5_8=()=>{

				/*Desenvolva um algoritmo que preencha uma matriz numérica de dimensões 3x3.
				  Depois de a matriz ter sido populada, o algoritmo deverá imprimir a matriz da seguinte
				  forma: os dados da diagonal principal devem ser impressos normalmente e os dados
				  fora da diagonal principal devem substituídos por zero.*/
				  let arr=[]
				  for(x=0;x<3;x++){

				  	arr2=[]
				  	for(j=0;j<3;j++){
				  		arr2.push(prompt(`Insira o dado na posição [${x+1},${j+1}]`))
				  	}
				  	arr.push(arr2)
				  }
				  for(x=0;x<3;x++){
				  	for(j=0;j<3;j++){
				  		if(x===j){
				  			nan(1,`${arr[x][j]}`)
				  		}else{
				  			nan(1,`0`)
				  		}
				  	}
				  	nan(1,`<br>`)
				  }
			}
			//exe_5_8();

			const exe_5_9=()=>{

				/*Desenvolva um algoritmo que preencha uma matriz numérica de dimensões 3x3. Ao
				  final, o algoritmo deve mostrar o somatório de todos os elementos da matriz, bem
				  como a média aritmética entre todos os termos.*/

				  let arr=[]
				  for(let x=0;x<3;x++){
				  	arr2=[]
				  	for(j=0;j<3;j++){
				  		arr2.push(Number(prompt(`Insira o número da posição ${x+1}, ${j+1}`)))
				  	}
				  	arr.push(arr2)
				  }
				  let soma=0
				  for(x of arr){
				  	for(j of x){
				  		soma+=j
				  	}
				  }
				  nan(soma,`Somatório: ${soma}<br>`)
				  nan(soma,`Média: ${soma/9}`)
			}

			//exe_5_9();
			const exe_5_10=()=>{
				/*Faça um programa que carregue uma
				  matriz 2x2, calcule e mostre uma matriz resultante que será a própria matriz digitada
				  multiplicada pelo maior elemento da matriz.*/
				  let arr=[]
				  for(x=0;x<2;x++){
				  	let arr2=[]
				  	for(j=0;j<2;j++){
				  		arr2.push(Number(prompt(`Insira o número da posição ${x+1}, ${j+1}`)))
				  	}
				  	arr.push(arr2)

				  }
				  let m=0
				  for(x of arr){
				  	if(Math.max(...x)>m){
				  		m=Math.max(...x)
				  		}
				  }
				  for(let x=0;x<2;x++){
				  		for(j=0;j<2;j++){
				  			nan(arr[x][j],`${arr[x][j]*m} `)
				  		}
				  		nan(1,`<br>`)

				  }

			}
			//exe_5_10();
			const exe_5_11=()=>{
				/*Desenvolva um algoritmo que preencha uma matriz numérico de dimensões 3x3. Após
				  preencher todo a matriz, o usuário deve inserir uma chave de busca X. Caso exista
				  algum número igual a X, dentro da matriz, o algoritmo deve mostrar, na tela, os índices
				  da linha e da coluna da posição na qual na qual X foi encontrado pela primeira vez.
				  Caso contrário, o algoritmo deve se encerrar com uma única mensagem, dizendo
"				  Chave não encontrada.".*/
				let arr=[]
				for(let x=0;x<3;x++){
					let arr2=[]
					for(let j=0;j<3;j++){
						arr2.push(Number(prompt(`Insira o número da posição ${x+1}, ${j+1}`)))
					}
					arr.push(arr2);
				}
				let c=Number(prompt(`Insira qual número deseja procurar na matriz`))
				let f=false;
				for(let x=0;x<3;x++){
					for(let j=0;j<3;j++){
						if(c===arr[x][j]){
							nan(c,`Chave encontrada na linha: ${x+1},coluna: ${j+1}`)
							f=true;
							break;
						}

					}

				}
				if(f===false){
					nan(1,`Chave não encontrada`)
				}
			}


			//exe_5_11();
			const exe_5_12=()=>{
				/*Faça um programa que carregue uma
				  matriz 3 x 5 com números inteiros e some cada uma das linhas, armazenando o
				  resultado das somas em um vetor. A seguir, multiplique cada elemento da matriz pela
				  soma da respectiva linha daquele elemento e mostre a matriz resultante.*/
				  let arr=[]
				  let somas=[]
				  for(let x=0;x<3;x++){
				  	let arr2=[]
				  	soma=0
				  	for(j=0;j<5;j++){
				  		arr2.push(Number(prompt(`Insira o número da posição ${x+1}, ${j+1}`)))
				  		soma+=arr2[j]
				  	}
				  	arr.push(arr2)
				  	somas.push(soma)
				  }
				  for(let x=0;x<3;x++){
				  	for(let j=0; j<5;j++){
				  		nan(j,`${arr[x][j]*somas[x]}	`)
				  	}
				  	nan(1,`<br>`)
				  }
			}
			//exe_5_12();
			const exe_5_13=()=>{

				/*Faça um programa que carregue uma
				  matriz 10x3 com as três notas de dez alunos. Mostre um relatório com o número do
				  aluno (número da linha) e a prova em que cada aluno obteve menor nota. Ao final do
				  relatório, mostre quantos alunos tiveram menor nota na prova 1, quantos alunos
				  tiveram menor nota na prova 2 e quantos alunos tiveram menor nota na prova 3.*/
				  let arr=[],m1=[],m2=[],m3=[];
				  for(let x=0;x<10;x++){
				  	let notas=[];
				  	for(j=0;j<3;j++){
				  		notas.push(Number(prompt(`Insira a ${j+1}ª nota do ${x+1}º aluno:`)))
				  	}
				  	arr.push(notas);
				  }
				  for(let x=0;x<10;x++){
				  	let i=arr[x].indexOf(Math.min(...arr[x]))
				  	if(i===0){
				  		m1.push(x)
				  	}else if(i===1){
				  		m2.push(x)
				  	}else if(i===2){
				  		m3.push(x)
				  	}
				  }
				  for(x=0;x<10;x++){
				  	nan(1,`Aluno${x+1}<br>Prova de menor nota: ${arr[x].indexOf(Math.min(...arr[x]))}<br>`);
				  }
				  nan(1,`${m1.length} tiveram a menor nota na 1ª prova<br>`);
				  nan(1,`${m2.length} tiveram a menor nota na 2ª prova<br>`);
				  nan(1,`${m3.length} tiveram a menor nota na 3ª prova<br>`);


			}
			//exe_5_13();
			const exe_5_14=()=>{

				/*Faça um programa que seja capaz de armazenar os dados de três pessoas: nome,
				  idade, peso e altura. Ao final, o algoritmo deve mostrar, na tela, o nome e a idade da
				  primeira pessoa e o peso e altura da última pessoa.*/
				  let pessoas=[];
				 
				  for(x=0;x<3;x++){
				  	let pessoa={};
				  	pessoa.nome=prompt(`Digite o nome da pessoa ${x+1}:`);
				  	console.log(pessoa);
				  	pessoa.idade=prompt(`Digite a idade da pessoa ${x+1}`);
				  	console.log(pessoa);
				  	pessoa.altura=prompt(`Digite a altura da pessoa ${x+1}`);
				  	console.log(pessoa);
				  	pessoa.peso=prompt(`Digite o peso da pessoa ${x+1}`);
				  	console.log(pessoa);
				  	pessoas.push(pessoa);

				  }
				  nan(1,`Nome da primeira pessoa: ${pessoas[0].nome}<br>`);
				  nan(1,`Idade da primeira pessoa: ${pessoas[0].idade}<br>`);
				  nan(1,`Peso da última pessoa: ${pessoas[2].peso}<br>`);
				  nan(1,`Altura da última pessoa: ${pessoas[2].altura}<br>`);
			}
			//exe_5_14();
			
		



		}


