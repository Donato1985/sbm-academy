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
			  nan(impostos(),`Impostos: R$${impostos()}<br>`);
			  nan(totalizar(),`Valor final: R$${totalizar()}<br>`);


			 

		}
		exe_2_1();


}