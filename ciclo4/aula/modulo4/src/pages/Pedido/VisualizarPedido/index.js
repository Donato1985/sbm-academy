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
	});

	return(

		<div>
			<Container>
				<h1>Página de Pedidos</h1>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
				<Table>
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

							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</div>
		);
};