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


app.get('/visualizarservico/:id',async(req,res)=>{ 
	servico.findByPk(req.params.id)
	.then((servico) =>{
		return res.json({
			error: false,
			servico
		})
		}).catch(function(erro){
			return res.status(400).json({
				error:true,
				message:"Código não está cadastrado!"
			});
	});
});

app.get('/visualizarpedido/:id', async(req, res)=>{
	pedido.findByPk(req.params.id)
	.then((pedido)=>{
		return res.json({
			error: false,
			pedido
		})
		}).catch((erro)=>{
			return res.status(400).json({
				error: true,
				message: "Pedido não cadastrado!"
			})
		})
	});


app.get('/visualizarcliente/:id', async(req, res)=>{
	cliente.findByPk(req.params.id)
	.then((cliente)=>{
		return res.json({
			error: false,
			cliente
		})
			}).catch((erro)=>{
				return res.status(400).json({
					error: true,
					message: "Cliente não cadastrado!"
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


app.get('/atualizaservico',async(req,res)=>{
	await servico.findByPk(1).then(servico =>{
		servico.nome='HTML/CSS/JS';
		servico.descricao='Páginas estáticas e dinâmicas';
		servico.save();
		return res.json({servico})
	});
});

app.put('/editarservico',(req,res)=>{
	servico.update(req.body,{
		where: {id: req.body.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Serviço alterado com sucesso"
		})
	}).catch((erro)=>{
		return res.status(400).json({
			error: true,
			message: "Erro na alteração de serviço"
		});
	});
});

app.get('/servicospedidos',async(req,res)=>{
	await servico.findByPk(1,{include:[{all:true}]})
	.then(servico =>{
		return res.json({servico});
	});
});


app.put('/editarpedido', (req,res)=>{
	pedido.update(req.body,{
		where: {ServicoId: req.body.ServicoId}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Pedido modificado com sucesso."
		});
	}).catch((erro)=>{
		return res.status(400).json({
			error: true, 
			message: "Erro na modificação do pedido!"
		});
	});
});


app.get('/servicosdeclientes/:id',async(req,res)=>{
	//exercício 1 do dia 5 do ciclo 3
	await cliente.findByPk(req.params.id,{include:[{all:true}]})
	.then(servicos =>{
		return res.json({servicos});
	});

});


app.put('/editarcliente',(req,res)=>{
	cliente.update(req.body,{
		where: {id: req.body.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Dados do cliente atualizados com sucesso."
		});
	}).catch((erro)=>{
		return res.status(400).json({
			error: true,
			message: "Erro ao tentar atualizar cliente."
		});
	});
});

app.put('/editarpedidoporid/:id',(req,res)=>{
	pedido.update(req.body,{
		where: {id: req.params.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Pedido atualizado com sucesso!"
		});
	}).catch((erro)=>{
		res.status(400).json({
			error: true,
			message: "Falha ao atualizar pedido."
		})
	});
});


app.get('/excluircliente',async(req,res)=>{
	cliente.destroy({
		where: {id: 4444}
	});
	res.send("Cliente excluído com sucesso.")
});

app.delete('/apagarcliente/:id',(req,res)=>{
	cliente.destroy({
		where: {id: req.params.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Cliente deletado com sucesso."
		});
	}).catch(()=>{
		return res.status(400).json({
			error: true,
			message: "Não foi possível excluir o cliente."
		});
	});
});


app.get('/pedidosdeclientes/:id',async(req,res)=>{
	//desafio 1 do dia 5 do ciclo 3
	await cliente.findByPk(req.params.id,{include:[{all:true}]})
	.then(servicos =>{
		return res.json({servicos});
	});

});

app.put('/alterarcliente/:id',(req,res)=>{
	cliente.update(req.body,{
		where: {id: req.params.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Cliente atualizado com sucesso!"
		});
	}).catch((erro)=>{
		res.status(400).json({
			error: true,
			message: "Falha ao atualizar cliente."
		})
	});
});


let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
	console.log('Servidor ativo')
});
