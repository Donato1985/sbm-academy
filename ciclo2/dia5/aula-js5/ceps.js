window.onload=function(){
	//alert('hello!')

	

	const btnCep=document.querySelector('#btnCep');
	const cxCep=document.querySelector(".cxCep");


	const dadosCep= async function(cepUrl){

		

		var url=`https://viacep.com.br/ws/${cepUrl}/json/`;

			var consultaCep=await fetch(url);
			var dadosCep = await consultaCep.json();
			//console.log(dadosCep);


		
			 




			for(let campos in dadosCep){
				console.log(campos);
				if(document.querySelector("#"+campos)){
					document.querySelector("#"+campos).value=dadosCep[campos] ;
					}



			}
		}

	btnCep.addEventListener('click',()=>{
		let cep=cxCep.value;
			dadosCep(cep);
			

			
			
			


	});

}


//parei era umas 18:03