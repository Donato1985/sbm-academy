import axios from 'axios';
import {Container,Table,Alert} from 'reactstrap';
import {api} from '../../../config';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';


export const VisualizarCliente = ()=>{

//array vazio que vai receber os dados que vamos manipular
const [data, setData]= useState([]);


//array que vai receber os status da requisição
const [status, setStatus] = useState({
	type: '',
	message: ''
});

//Com essa função que vamos pegar os dados do mysql
const getClientes = async()=>{

	await axios.get(api+"/clientes")
	.then((response)=>{
	
		setData(response.data.clientes);

	})
	.catch(
			setStatus({
				type: 'error',
				message: 'Sem conexão com a API.'
			})

		);
};

 useEffect(()=>{
 	getClientes();
 }

 	,[]);

 	const apagarCliente = async(idCliente)=>{
 		//console.log(idCliente);
 		const headers={
 			'Content-Type':'application/json'
 		}
 		await axios.delete(api+"/apagarcliente/"+idCliente,{headers})
 		.then((response)=>{
 			console.log(response.data.error);
 			getClientes();
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

				<h1>Página de clientes</h1>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
				<div className="d-flex">
					<div className="mr-auto p-2">

						<h1>Informações do CLiente</h1>
					</div>
					

					<div className="p-2">
						<div>
							<Link to="/cadastrarcliente"
							className="btn btn-outline-primary  btn-sm">
							Cadastrar</Link>


						</div>

					</div>
				</div>
				<Table striped>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Endereço</th>
							<th>Cidade</th>
							<th>UF</th>
							<th>Nascimento</th>


						</tr>
					</thead>
					<tbody>
						{data.map((item)=>(
							<tr key={item.id}>

								<td>{item.id}</td>
								<td>{item.nome}</td>
								<td>{item.endereco}</td>
								<td>{item.cidade}</td>
								<td>{item.uf}</td>
								<td>{item.nascimento}</td>
								<td className="text-center">
										<Link to={`/cliente/${item.id}`}
										className="btn btn-outline-primary btn-sm">Consultar</Link>

								</td>
								<td className="text-center">
								<Link to={`/editarcliente/${item.id}`}
								className="btn btn-outline-warning btn-sm">Editar</Link>

								<span className="btn btn-outline-danger btn-sm mr-1"
								onClick={()=>apagarCliente(item.id)}>Excluir</span>

							</td>


							</tr>
						))}


					</tbody>





				</Table>	

			</Container>


		</div>	

		);
};