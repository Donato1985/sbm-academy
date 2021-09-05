import axios from 'axios';
import {Container,Table,Alert} from 'reactstrap';
import {api} from '../../../config';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

export const VisualizarServico = ()=>{

	//inicia um array vazio que vai receber os dados
	const [data, setData] = useState([]);


	//array que vai receber o status de conexão com o banco de dados
	const [status, setStatus] = useState({
		type: '',
		message: ''
	});

	//função assícrona que vai pegar os registros do banco de dados
	const getServicos = async() =>{
		await axios.get(api+"/listaservicos").then((response) => {
				setData(response.data.servicos);
			})
			.catch(() =>{
				setStatus({

					type: 'error',
					message: 'Erro: Sem conexão com a API.'
				});
			});
	};

	//instancia a função, chama ela pra funcionar
	useEffect(()=>{
		getServicos();
	});

	return(

		<div>
			<Container>

				<h1>Página de serviços</h1>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
				<Table striped>

					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Descrição</th>
							<th>Ação</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.nome}</td>
							<td>{item.descricao}</td>
							<td className="text-center">
								<Link to={`/servico/${item.id}`}
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