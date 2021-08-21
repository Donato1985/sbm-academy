//objetos

function Pessoa(nome,sobrenome,idade){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;

}

var ps1= new Pessoa("Danilo","Sobral",22);//construtor

console.log("Pessoa 1 Nome: "+ps1.nome+" "+
	ps1.sobrenome+" idade "+ps1.idade)

var ps2= new Pessoa("Maria")
console.log("Pessoa 2 Nome "+ps2.nome+" "+
	ps2.sobrenome)

var objpessoa= {rg:"3335577",
				cpf:"23344321"
};

//console.log(typeof(obpessoa));

console.log("RG: "+objpessoa.rg)

function Pessoa2(nome,sobrenome,idade){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;
	this.doc={
		rg:"3335577",
		cpf: '23344321'
	}

}

var pss2 = new Pessoa2("Silvão","Silvestre");
//console.log("Nome: "+pss2.nome+" "+pss2.doc.rg);
console.log(`Nome ${pss2.nome} RG: ${pss2.doc.rg}`)
