//criar 3 rotas:
//Uma para cliente
//Uma para serviço
//Uma para pedido
//utilize a mesma rota para criar um novo cliente
const express =require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;


app.get('/',function(req,res){
	res.send('Seja bem vindo!');
});


app.post('/cliente',async(req,res)=>{
	let create=await cliente.create(

		req.body

		);
	res.send('Cliente cadastrado!');
});

app.post('/servicos',async(req,res)=>{
	let create=await servico.create(

		req.body
		
		);
	res.send('Serviço Foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
	let create=await pedido.create(

		req.body

		);
	res.send('E é aqui que você vai fazer os seus pedidos');
});



let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
	console.log('Servidor ativo')
});