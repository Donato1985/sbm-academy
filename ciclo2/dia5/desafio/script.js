window.onload = function(){





	const cep = document.querySelector("#cep");
	const search = document.querySelector("#search");
	function treat_cep(cep){

		for(let x of cep){
			if(isNaN(x)){
				let regx=new RegExp(x, 'gi');//Criei essa classe para criar minha expressão regular lembrando do problema que enfrentamos em sala de aula, que não conseguíamos por uma variável como regex
				cep=cep.replace(regx,'');
				console.log(cep);
			}

		}
		if(cep.length!=8){
			alert("Digite o cep corretamente");
			
		}else{
		return cep;
		}
	}

	const data = async function(busca){

		var url=`https://viacep.com.br/ws/${busca}/json/`;

		var consulta = await fetch(url);

		var dados = await consulta.json();


		for(let c in dados){
			//console.log(`${c}:${dados[c]}`) usei só para confirmar os nomes das chaves json certinho
			if(document.querySelector("#"+c)){
			document.querySelector("#"+c).value=dados[c];

			}

		}


	};

	search.addEventListener('click',()=>{

			let busca=cep.value;
			busca=treat_cep(busca);
			data(busca);
			


	});

}