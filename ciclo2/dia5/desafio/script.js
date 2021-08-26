window.onload = function(){





	const cep = document.querySelector("#cep");
	const search = document.querySelector("#search");

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
			data(busca);


	});

}