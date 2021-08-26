const msgLog=function(msg=''){
	try{

	if(msg.legth<=6){throw 'Digite uma mensagem válida'}
		alert(msg)
	}catch(err){
		alert(`Erro: ${err}`)
	}
}


const produtos=[{codigoProduto:1,descProduto:'mesa',precoProduto:890.00}]


export {msgLog,produtos};