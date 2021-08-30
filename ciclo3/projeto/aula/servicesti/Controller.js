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


app.get('/listaservicos',async(req,res)=>{
	await servico.findAll({
		order: [['nome','DESC']]
	}).then(function(servicos){
		res.json({servicos});
	});

});

app.get('/ofertas',async(req,res)=>{
	await servico.count('id').then(function(servicos){
		res.json(servicos);
	});
});


app.get('/servico/:id',async(req,res)=>{
	servico.findByPk(req.params.id)
	.then(servico =>{
		return res.json({
			error: false,
			servico
		}).catch(function(erro){
			return res.status(400).json({
				error:true,
				message:"Código não está cadastrado!"
			});
		});
	});
});


app.get('/clientes', async(req,res)=>{
	//exercíco 1 do dia 4
	await cliente.findAll({
		order: [['nome','DESC']]
	}).then(function(clientes){
		res.json({clientes});
	});
});
app.get('/ordenarclientes',async(req,res)=>{
	//exercício 2 do dia 4
	await cliente.findAll({
		order: [['id','ASC']]
	}).then(function(clientes){
		res.json({clientes});
	});
});

app.get('/listapedidos',async(req,res)=>{
	//exercício 3 do dia 4
	await pedido.findAll({
		order: [['id','ASC']]
	}).then(function(pedidos){
		res.json({pedidos});
	});
});

app.get('/pedepormaior',async(req,res)=>{
	//exercício 4 do dia 4
	await pedido.findAll({
		order: [['valor','DESC']]
	}).then(function(pedidos){
		res.json(pedidos);
	});
});


app.get('/countclientes',async(req,res)=>{
	//exrcício 5 do dia 4
	await cliente.count('id').then(function(clientes){
		res.json(clientes);
	});
});

app.get('/qtpedidos',async(req,res)=>{
	//Exercício 6 do dia 4
	await pedido.count('id').then(function(pedidos){
		res.json(pedidos);
	});

});

app.get('/somapornome/:id',async(req,res)=>{
	//desafio do dia 4 do ciclo 3
	/*
	let reqId= await cliente.findAll({
		attribute: 'id',
		where: {nome: req.params.nome}
	});
	tentei fazer melhor mas ainda preciso saber como fazer isso
	*/

	pedido.sum('valor',{where: {ClienteId: req.params.id}}).then(soma =>{
		return res.json({
			error: false,
			soma
		});
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Cliente não encontrado"
		})
	})

});


let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
	console.log('Servidor ativo')
});