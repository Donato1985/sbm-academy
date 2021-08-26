window.onload=function(){
	 const pai = document.querySelectorAll("#pai");
	 pai.forEach((pegarFilhas)=>{
	 	pegarFilhas.addEventListener('click',(filha)=>{
	 					alert(filha.target.textContent);

	 	});

	 });
	 
	 const btn=document.querySelector('#btn');
	 const outroPai = document.querySelector('#outroPai')
	 i=0;
	 frutas=['Banana','Manga','Uva','Pera'];
	 btn.addEventListener('click',()=>{
		
	 	li = document.createElement('li');
	 	outroPai.appendChild(li).textContent=frutas[i];
	 	li.setAttribute('class','itemL');
	 	i++;
	
	  });
	 const paiDaLista= document.querySelectorAll('#outroPai');

	 paiDaLista.forEach((filhas)=>{
	 	filhas.addEventListener('click',(filha)=>{
	 		alert(filha.target.textContent);

	 	})
	 })
}