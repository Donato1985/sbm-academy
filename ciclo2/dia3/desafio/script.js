/*// referência de documentação: https://developer.mozilla.org/pt-BR/ 

//Desafio
- 3 caixas de texto e 1 botão

- 1º caixa de texto recebe um valor
- 2º caixa de texto recebe outro valor
- 3º caixa de texto o usuário dá um resulado
- Clicar no botão e enviar msg dizendo que está certo ou errado a soma

;)
*/
function isNum(string){
	/*Função que analiza uma string e retorna true
	se todos os caracteres forem numerais ou false
	caso contrário*/
	if(isNaN(Number(string))){
		return false;
	}
	return true;
	
}

window.onload=function() {
	
	const val1=document.querySelector("#val1");
	const val2=document.querySelector("#val2");
	const myResp=document.querySelector("#myResp");
	const end=document.querySelector("#end");

	end.addEventListener('click',()=>{
		if(!isNum(val1.value) || !isNum(val2.value) || !isNum(myResp.value)){
			alert("Por favor, digite apenas numerais nas caixas de texto");
			val1.value='';
			val2.value='';
			myResp.value='';

		}else if(Number(val1.value)+Number(val2.value)===Number(myResp.value)){
			alert("Correto");


		}else{
			alert("Errou.")
		}
	});


}