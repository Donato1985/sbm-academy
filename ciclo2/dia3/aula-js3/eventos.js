/*click Ao clicar em algum elemento html
mousemove ao mover */

window.onload = function(){
//	alert("alerta")


const btn1 = document.querySelector('#btn1');

const legp =document.querySelector(".legenda");

const txt = document.querySelector("#txt");

function msg(){
	alert("Olá");
}

btn1.addEventListener('click', ()=>{
	legp.innerHTML+=txt.value;
})

legp.addEventListener('click', ()=>{
	legp.innerHTML='';
})

//console.log(btn1);





/*legp.addEventListener('mouseout',()=>{
	alert("Teste");
})*/

/*Trocar elemento*/
const trocaSenha=document.querySelector("#verSenha");
const cxSenha=document.querySelector('#senha');

trocaSenha.addEventListener('click',()=>{
	//getAtrribute()
	//setAtrribute()
	if(cxSenha.getAttribute('type')=='password'){
		cxSenha.setAttribute('type', 'text')
	}else{
		cxSenha.setAttribute('type', 'password')
	}

});

const cxTrocaBg=document.querySelector('#cxTbg');

cxTrocaBg.addEventListener('blur',()=>{
	cxTrocaBg.setAttribute('class','corBg')
});

//somar valores de teste
const v1 = document.querySelector('#v1');

const v2 = document.querySelector('#v2');

const soma = document.querySelector('#soma');
const result = document.querySelector('#resultado');

soma.addEventListener('click', ()=>{
	var cx1= v1.value;
	var cx2 = v2.value;
	var r = Number(cx1)+Number(cx2)
	result.innerHTML=r;
})

const btnModal=document.querySelector('#chamarModal');
const wModal=document.querySelector("#janModal")
btnModal.addEventListener('click',()=>{
	wModal.setAttribute('class','modal');

})

const close=document.querySelector("#close");
wModal.addEventListener('click',()=>{
	wModal.classList.remove('modal');
})


}

//console.dir(Window)