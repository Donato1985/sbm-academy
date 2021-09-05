import {useState, useEffect} from "react/cjs/react.development";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import {api} from '../../../config';
import {Alert} from 'reactstrap'

export const Servico = (props) =>{
	console.log(props.match);

	const [data, setData] = useState([]);
	const [id, setId] = useState(props.match.params.id);
	const [status, setStatus] = useState({
		type: '',
		message: ''
	})


	
	

	useEffect(() => {
		const getServico = async() => {
			await axios.get(api+"/visualizarservico/"+id).then((response) => {
				console.log(response.data.servico);
				setData(response.data.servico);
			})
			.catch(() => {
				setStatus({

					type: 'error',
					message: 'Erro: Sem conexão com a API.'
				});
			});
		};
		getServico();
	},[id]);

	
	return(
		
		<div>
			<Container>
				<div className="d-flex">
					<div className="mr-auto p-2">
						<h1>Quantidade de pedidos do serviço</h1>
					</div>
					<div className="p-2">
						<Link to="/visualizar-servicos" className="btn btn-outline-success btn-sm">
							Serviços
						</Link>
					</div>
				</div>
				<hr className="m-1"/>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}

				<div>
					<dl className="row">

						<dt className="col-sm-3">Nome</dt>
						<dd className="col-sm-9">{data.nome}</dd>

					</dl>
					<dl className="row">

						<dt className="col-sm-3">Descrição</dt>
						<dd className="col-sm-9">{data.descricao}</dd>

					</dl>

				</div>

				
			</Container>
		</div>
		
			

		);
};