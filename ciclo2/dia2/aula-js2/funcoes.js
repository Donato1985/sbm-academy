//função sem paraetros
function soma(){
	var x = 1;
	var y = 2;
	console.log(x+y);
}

//soma();

//função com parâmetro

function somar(x,y){
	var r = x+y;
	console.log(r);

}

//somar(25,12);
//se colocar entre parênteses e depois invocar (), a função é definida, executada 
// e destruída no mesmo momento
/*(function respostaF(){
	var nome = "Donato";
	alert(nome);
	return nome;
}
)();*/
//var d = respostaF();
//console.log(d);

var f = function(){
	alert("função sem nome");
};

//f();
//arrow function

var ar = ()=>{
	alert("Arrow function sendo executada.")
}


 /*(()=>{
	alert("Arrow function sendo executada.")
})();
*/
//ar();

function mult(n,o){
	var resultado = n*o;
	console.log(resultado);
	return resultado;
};

function pot(n,o){
	var resultado = Math.pow(n,o);
	console.log(resultado);
}

mult(3,4);
pot(7,2);