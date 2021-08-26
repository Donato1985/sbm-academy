window.onload=()=>{
	
	/* EXERCÍCIO 1 */
	const DIV_ALERT = document.getElementById('exe1');

   const TEXTO = DIV_ALERT.textContent +" "+"Este exemplo é muito simples." ;

	DIV_ALERT.addEventListener('click',()=>{
		alert( TEXTO );
	})
       
   /*document.getElementById('exe1').addEventListener('click', ()=>{
		alert( document.getElementById('exe1').textContent+" "+ "Este exemplo é muito simples." );
	} )*/

	/* EXERCÍCIO 2 */
	const DIV_TROCA_COR = document.querySelector("div#pai-0 > .filha");
	//console.log(DIV_TROCA_COR.textContent); 
    //#8854d0
	DIV_TROCA_COR.addEventListener('click',()=>{
		DIV_TROCA_COR.style.backgroundColor='#8854d0';
	});

    /*const FILHA_DO_PAI = document.getElementById("FilhaDoPai");

    FILHA_DO_PAI.addEventListener('click',()=>{
    	FILHA_DO_PAI.style.backgroundColor="#8854d0";
    })*/

   /* EXERCÍCIO 3 */
   const DIV_PAI_1 = document.querySelectorAll("div#pai-1 > .filha");
   //console.log(DIV_PAI_1);

   DIV_PAI_1.forEach(filha=>{
    
      filha.addEventListener('click',(e)=>{
      	e.target.style.backgroundColor="#20bf6b";
      	e.target.style.color="#fff";
      })

   });

   /* EXERCÍCIO 4 */

   const TXT1 = document.getElementById("txt-1"); // CAIXA DE TEXTO
   const TXT2 = document.getElementById("txt-2"); // CAIXA DE TEXTO
   const LENGEDA = document.getElementById("recebe-texto"); // CONTAINER DE TEXTO
   const BTN_DIV= document.querySelector("#btn-concatenar-texto"); // DIV BOTÃO
   

   BTN_DIV.addEventListener('click',()=>{
        let texto = TXT1.value+' '+TXT2.value;        
        LENGEDA.textContent = texto;

   });

   /* EXERCÍDIO 5 */

   const TEXTO_INVERTE = document.getElementById('texto'); 
   const BOTAO = document.getElementById('botao');
 
   //pode entender uma string como um array 
   var word = '';
   /*var x=0;
   console.log(x);
   x++;
   console.log(x);
   x++; 
   console.log(x);*/
   //incrementar é somar 
   //decrementar é subtrair
   ///console.log( TEXTO_INVERTE.value)

   BOTAO.addEventListener('click', ()=>{
     
     word = TEXTO_INVERTE.value; 
     var junta_tudo='';
     for(var i= (word.length-1); i >= 0 ; i--){
       junta_tudo += word[i];
     }
     
     TEXTO_INVERTE.value=junta_tudo;
   });


  /* EXERCICIO 6 */

  const CAIXA_VALOR = document.getElementById('txt-3');
  const BTN_VALOR   = document.querySelectorAll('#container-botoes > .btnValor');
 
    
  BTN_VALOR.forEach(btn=>{
     btn.addEventListener('click',(elemento_botao)=>{
     CAIXA_VALOR.value += elemento_botao.target.value;
     });
  });

 /*
     query  (consulta)
     Selector (selector) id / css (classe) / proprio elemento / atrr / nome / tag
     all  (todos)      
     querySelectorAll
  */

  /* EXERCICIO 7 */

  const PALETA = document.querySelectorAll("#paleta-cores > .cores-da-paleta")
  const CAIXA_COR_CSS = document.querySelector("#css-cores")
  const DISPLAY   = document.querySelector("#display-cores")

  console.log(PALETA)

  /*
      forEach -> (loog) percorrer a lista
      target  -> seleciono o alvo
      evento  -> click, mouseover, mouseout
  */  

  PALETA.forEach(p=>{
    
        /* EVENTO CLICK PARA ALTERAR CAIXA DE TEXTO E COR DA DIV */ 
        p.addEventListener('click',(cara)=>{
          CAIXA_COR_CSS.value = cara.target.textContent;
          DISPLAY.style.backgroundColor = CAIXA_COR_CSS.value;
        });

        /* EVENTO QUANDO PASSAR O MOUSE ALTERAR A COR */
        p.addEventListener('mouseover', (carinha)=>{
           carinha.target.style.backgroundColor = carinha.target.textContent; 
        } );

        /* EVENTO QUANDO O MOUSE SAIR VOLTAR O BACKGROUND */

        p.addEventListener('mouseout',(sujeito)=>{
            sujeito.target.style.backgroundColor='#fff';//#fff branco css
        })

        /* TROCAR DE COR AO ALTERAR O TEXTO DIGITADO -> CHANGE */ 

  }); //FIM PALETA  

     CAIXA_COR_CSS.addEventListener('change',()=>{
        DISPLAY.style.backgroundColor=CAIXA_COR_CSS.value; 
     });

     /*
        if/else
        switch

     */

     var a=1;
     var b=1;

     if(a == b){
        console.log('A variável a é igual a variável b');
     }else{
        console.log('As variáveis a e b são diferentes');
     }

     var fruta="jaca";

      switch (fruta){
        case "banana": console.log(fruta + " é uma fruta");
        break;

        case "laranja": console.log(fruta + " é uma fruta");
        break;

        case "uva": console.log(fruta + " é uma fruta");
        break;

        case "manga": console.log(fruta + " é uma fruta");
        break;

        case "jaca": console.log(fruta + " é uma fruta");
        break;

        default: console.log(fruta + " Não sei se isso é uma fruta"); 

      }

   

}

