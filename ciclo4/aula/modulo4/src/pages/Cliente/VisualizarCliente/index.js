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




	return(

		<div>
			<Container>

				<h1>Página de clientes</h1>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}

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


							</tr>
						))}


					</tbody>





				</Table>	

			</Container>


		</div>	

		);
};