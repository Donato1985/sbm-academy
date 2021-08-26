window.onload=function(){

	(()=>{
		let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");

		for(let i in produtos ){

			mostrarProdutoCliente.innerHTML+=`<li class=itemProduto data-preco=${produtos[i].prodPreco}>${produtos[i].prodDesc}</li>`



		} 

	


	})(produtos)


	//compra
	const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

	const cestaDoCliente = document.querySelector("ul#cestaDoCliente");

	const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

	const armazenaItens = [];

	var totalPedido=0;

	itemProduto.forEach((item)=>{

			item.addEventListener('click',()=>{
				
				if(armazenaItens.indexOf(item.textContent) == -1){
					armazenaItens.push(item.textContent);

					li = document.createElement('li');

					cestaDoCliente .appendChild(li).textContent=item.textContent;


					totalPedido+=Number(item.dataset.preco); 

					mostraTotalCompra.value=totalPedido.toLocaleString('pt-BR',
						{style:'currency',
						currency:'BRL'})

				}else{
					alert(`Este item ${item.textContent} já está na sua cesta`);
				};


			});

	});



}//fim
//vídeo: https://www.youtube.com/watch?v=yOnfnkaznJ8
//tempo: 1:37:53