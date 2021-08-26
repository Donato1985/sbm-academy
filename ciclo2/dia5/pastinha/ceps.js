window.onload = function(){
 
  //mapeamento do elelento btn para o evento de click
  const btnBuscaCep = document.querySelector("#btnBuscaCep");
  //mapeamento da caixa de texto (input text) para capturar o valor digitado
  const cxCep = document.querySelector(".cxCep");

  const dadosCep = async function(cepUrl){
   
    var url = `https://viacep.com.br/ws/${cepUrl}/json/`;  
    var consultaCep = await fetch(url); // await aguarda a promessa de acesso 
    var dadosCep    = await consultaCep.json(); //await aguarda a promessa do retorno

   
    //irá percorrer as propriedades retornadas no objeto/json 
    for( var campos in dadosCep ){
        console.log(campos);
        //verifica se os campos do formulários coincidem com os campos do cep
        //com esta comparação será enviado para o formulários
        //somente os dados desejados

        //mapeamento dinâmico para saber se os campos existem
        //é por isso que estão na condição do if
        //se retornar true eles existem e alimentam o campo do formulário 
        if(document.querySelector("#"+campos)){
        // o dadosCep[campos] irá corresponder ao valor retornado pela propriedade 
        document.querySelector("#"+campos).value = dadosCep[campos]
        }
    }
  
  }
  
  //Evento disparado ao clicar no botão executando a função dadosCep
  btnBuscaCep.addEventListener('click',()=>{
    let cep = cxCep.value;
    //Execução da função com o valor do cep digitado no formulário
    dadosCep(cep); 
  })


}