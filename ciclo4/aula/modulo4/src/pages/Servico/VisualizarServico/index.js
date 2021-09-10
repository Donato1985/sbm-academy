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
	},[]);

	const apagarServico= async(idServico)=>{
		console.log(idServico);

		const headers ={
			'Content-Type': 'application/json' 
		};

		await axios.delete(api+"/apagarservico/"+idServico,{headers})
		.then((response)=>{
			console.log(response.data.error);
			getServicos();
		})
		.catch(()=>{
			setStatus({
				type: 'error',
				message: "Erro: Não foi possível se conectar a API."
			});
		});

	}

	return(

		<div>
			<Container>

				<h1>Página de serviços</h1>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
				
				<div className="d-flex">
					<div className="mr-auto p-2">

						<h1>Informações do Serviço</h1>
					</div>
					

					<div className="p-2">
						<div>
							<Link to="/cadastrarservico"
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
							<td className="text-center">
								<Link to={`/editarservico/${item.id}`}
								className="btn btn-outline-warning btn-sm">Editar</Link>

								<span className="btn btn-outline-danger btn-sm mr-1"
								onClick={()=>apagarServico(item.id)}>Excluir</span>

							</td>
							</tr>


							))}


					</tbody>



				</Table>


			</Container>
			



		</div>
		);
};