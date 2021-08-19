/*

var / let / const

*/
/*
var nome = "Marcelo"//chamada de variável global
let sobreNome="weihmayr"
const 

if(true){
	console.log("Var nome= "+nome);
	var nm = nome;
	console.log("Chamando o Sobrenome "+sobreNome);
	console.log(sobreNome);
	let sn = "Da Silva";
	console.log(sn)
}

console.log("Meu nome é "+nm+" "+sobreNome+" ");

//var teste=25;
console.log("Var nome= "+nm);
*/

//como instanciar um objeto javascript

var Pessoa = {
	nome: "Donato",
	rua: "Rua lá",
	ncasa: "777",
	dados:function(){
		document.write(
				"Nome...:"+this.nome+"<br>"+
				"Endereço: "+this.rua+
				"<br>"+"Nº da casa: "+this.ncasa+"<br>"
			);
	}

}

console.log("Nome: "+Pessoa.nome+"\nEndereço: "+Pessoa.rua+
	"\nNº: "+Pessoa.ncasa);
console.log(Pessoa);
Pessoa.dados();