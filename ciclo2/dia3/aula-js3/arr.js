/*concat() Junta os elementos de dois ou mais arrays e retorna
uma cópia com os elementos juntos*/

var frutas=['uva','banana','melão','amora'];
console.log(`Quantidade do array: ${frutas.length}
	fruta: ${frutas[0]}`);
var frutas2 = ['Maçã','Pera','Laranja']
var todasAsFrutas=frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);


/*indexOf() Procura por um elemento eśpecífico no array
e retorna a sua posição*/
var retornoIndexOf=todasAsFrutas.indexOf('amora');
console.log(retornoIndexOf);


/*join() Junta todos os elementos de um array em uma string*/
var stringDeArray = todasAsFrutas.join('$')
console.log(stringDeArray);


/*push() Insere um novo elemento no final do array*/

var outraLista=['Bola','Peteca'];
var novaLista=outraLista.push('boneca','qualquer brinquedo')
console.log(novaLista);

console.log(outraLista);
console.log(outraLista[3]);

/*pop() remove o último elemento do array*/
console.log(outraLista.pop());
console.log(outraLista)

/*shift() Remove o primeiro elemento do array*/
var removerPrimeiro=['fusca','variante'];
console.log(removerPrimeiro.shift());
console.log(removerPrimeiro);

/*sort() Ordena os elementos em ordem crescente*/

var alfa=['b','z','t','a'];
console.log(alfa);
alfa.sort();//pode ser numérico também
console.log(alfa);

/*unshift() Insere um novo elemento no início do array*/
alfa.unshift(10);
console.log(alfa);


alfa.sort()
console.log(alfa);


/*splice() corta o array em um ponto indicado dois parâmetros
indice e quantos elementos quer remover da posição*/

var f=['uva','banana','melão','amora'];
console.log(f);
var idx=f.indexOf('banana');
console.log(f.splice(idx,1))
console.log(f);

//é possível criar arrays de objetos

var dados =[
			{nome:'Donato'},
			{nome:'Ramos'}

			]


//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome,sobrenome,idade,doc=[]){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;
	this.doc={
		rg:doc[0],
		cpf: doc[1]
	}

}

var pss2 = new Pessoa2("Silvão","Silvestre",23,['2345678','8765432']);
//console.log("Nome: "+pss2.nome+" "+pss2.doc.rg);
console.log(`Nome ${pss2.nome} RG: ${pss2.doc.rg}
				CPF: ${pss2.doc.cpf}`)