// var nome = "Marcelo"

// console.log(nome.length);
// console.log(nome[0]);


/*
match()
O método match procura uma palavra em uma string.
Existem alguns parâmetros de pesquisa que permite uma
maior precisão conforme a 
flags
*/

var palavras ='Maçã doce'

//concole.log(palavras.match(/d/gi));


/*search()
O método search() procura pela ocorrência e retornado a posição
na cadeia da string, a posição é em relação
ao primeiro caractere da ocorrência.
*/

//console.log(palavras.search(/d/gi));

// var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
// "Cumque, rerum! Pariatur praesentium odit iusto cupiditate perspiciatis"+
// " dicta consequuntur, deleniti quis. Nemo doloribus accusantium dolores"+
// " ad laboriosam, sapiente quos magnam reiciendis."
// var mudarStr=str.replace(/e/gi,'X');
// console.log(mudarStr);

//localeCompare()
// var comp1="Comparar";
// var comp2='comparar';

// var c1= comp1.toLowerCase();
// c2=comp2.toLowerCase()
// var comparacao=c1.localeCompare(c2);
// console.log(`Este é o c1:${c1}, este é o c2:${c2}`);
// console.log(comparacao);

//trim() remove espaços antes e depois da string especificada

// var p='   fpalavra+    ';
// console.log(p);
// var r=p.trim();

// console.log(r);
// r=r.replace(/f/gi,'');
// console.log(r);
// r=r.replace('+', '');
// console.log(r)

// console.log(`Removido: ${r}`);

// //toLocaleString

// var valor = 1.357;//1,35
// var formatarMoeda=valor.toLocaleString('pt-BR',{
// 	style:'currency',
// 	currency:'BRL'
// });

// console.log(formatarMoeda)
