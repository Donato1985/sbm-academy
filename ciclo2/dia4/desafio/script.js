// - Excluir um produto da cesta do cliente;

// -Para estudos futuros "Expressões Regulares"

import {produtos} from './produtos.js'

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

	var liCesta = document.querySelectorAll("ul#cestaDoCliente > li");

	itemProduto.forEach((item)=>{

			item.addEventListener('click',()=>{
				
				if(armazenaItens.indexOf(item.textContent) == -1){
					armazenaItens.push(item.textContent);

					var li = document.createElement('li');

					li.textContent=item.textContent;

					li.dataset.preco=item.dataset.preco;

					cestaDoCliente .appendChild(li);


					totalPedido+=Number(item.dataset.preco); 

					mostraTotalCompra.value=totalPedido.toLocaleString('pt-BR',
						{style:'currency',
						currency:'BRL'});

					liCesta = document.querySelectorAll("ul#cestaDoCliente > li");

					liCesta.forEach((li)=>{
					li.addEventListener('click',()=>{
								
								
								
								armazenaItens.splice(armazenaItens.indexOf(li.textContent),1);
								for(let x of cestaDoCliente.children){
									if(x==li){
										totalPedido-=Number(li.dataset.preco);
										cestaDoCliente.removeChild(li);
										mostraTotalCompra.value=totalPedido.toLocaleString('pt-BR',
														{style:'currency',
														currency:'BRL'});
									}
								}
								

								});
						});


				}else{
					alert(`Este item ${item.textContent} já está na sua cesta`);
				};



			});

	});

	






}//fim
