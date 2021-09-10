import axios from 'axios';
import {Container,Table,Alert} from 'reactstrap';
import {api} from '../../../config';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';



export const VisualizarPedido = ()=>{


	//instancia array que vai receber os dados
	const [data, setData]=useState([]);

	//instancia array que vai receber status
	const [status, setStatus]=useState({
		type: '',
		message: ''
	});

	const getPedidos= async()=>{
		await axios.get(api+"/listapedidos")
		.then((response)=>{
			
				setData(response.data.pedidos);
		}


			).catch(
				setStatus({
					type: 'error',
					message: 'Não foi possível se conectar com a API.'
				})

			);
	};

	useEffect(()=>{
		getPedidos();
	},[]);

	const apagarPedido = async(idPedido)=>{
 		//console.log(idCliente);
 		const headers={
 			'Content-Type':'application/json'
 		}
 		await axios.delete(api+"/apagarpedido/"+idPedido,{headers})
 		.then((response)=>{
 			console.log(response.data.error);
 			getPedidos();
 		})
 		.catch(()=>{
 			setStatus({
 				type: 'error',
 				message: "Erro: Não foi possível se conectar com a API."
 			});
 		});

 	};

	return(

		<div>
			<Container>
				<h1>Página de Pedidos</h1>
				<div className="d-flex">
					<div className="mr-auto p-2">

						<h1>Informações do pedido</h1>
					</div>
					

					<div className="p-2">
						<div>
							<Link to="/cadastrarpedido" className="btn btn-outline-primary  btn-sm">
							Cadastrar
							</Link>


						</div>

					</div>
				</div>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
				<Table striped>
					<thead>

						<tr>
							<th>ID</th>
							<th>Id do cliente</th>
							<th>Id do serviço</th>
							<th>Valor</th>
							<th>Data</th>


						</tr>

					</thead>

					<tbody>

						{data.map((item)=>(
							<tr key={item.id}>

								<td>{item.id}</td>
								<td>{item.ClienteId}</td>
								<td>{item.ServicoId}</td>
								<td>{item.valor}</td>
								<td>{item.data}</td>
								<td>
									<Link to={`/pedido/${item.id}`}
									className="btn btn-outline-primary btn-sm">
										Consultar

									</Link>

								</td>
								
								<td className="text-center">
								<Link to={`/editarpedido/${item.id}`}
								className="btn btn-outline-warning btn-sm">Editar</Link>

								<span className="btn btn-outline-danger btn-sm mr-1"
								onClick={()=>apagarPedido(item.id)}>Excluir</span>

							</td>

							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</div>
		);
};