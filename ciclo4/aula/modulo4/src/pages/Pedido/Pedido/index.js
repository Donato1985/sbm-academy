import {useState, useEffect} from "react/cjs/react.development";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import {api} from '../../../config';
import {Alert} from 'reactstrap';


export const Pedido =(props)=>{

	//instancia um array que vai receber os dados do banco de dados

	const [data, setData] = useState([]);

	//instancia um array que vai receber o status da conexão
	const [status, setStatus] = useState({
		type: '',
		message: ''
	});

	//instancia um array que vai receber o id da requisição
	const [id, setId] = useState(props.match.params.id);

	const getPedido= async()=>{
		await axios.get(api+`/visualizarpedido/${id}`)
		.then((response)=>{
			setData(response.data.pedido)
		}).catch(()=>{
			setStatus({
				type: 'error',
				message: 'Não foi possível fazer a conexão com a API.'
			})
		});
	}

	useEffect(()=>{

		getPedido()

	}

		)


	return(

		<div>
			<Container>

				<div className="d-flex">
					<div className="mr-auto p-2">
						<h1>Pedido solicitado</h1>
					</div>
					<div className="p-2">
						<Link to="/visualizar-pedidos"
						className="btn btn-outline-success btn-sm">Voltar</Link>
					</div>
				</div>
				<hr className="m-1"/>
				{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
				<div>
					<dl>
						<dt className="col-sm-3">Id do cliente:</dt>
						<dd className="col-sm-9">{data.ClienteId}</dd>

					</dl>
					<dl>
						<dt className="col-sm-3">Id do serviço:</dt>
						<dd className="col-sm-9">{data.ServicoId}</dd>

					</dl>
					<dl>
						<dt className="col-sm-3">Valor:</dt>
						<dd className="col-sm-9">R${data.valor}</dd>

					</dl>
					<dl>

						<dt className="col-sm-3">Data do pedido:</dt>
						<dd className="col-sm-9">{data.data}</dd>

					</dl>

					

					

				</div>

			</Container>
			


		</div>

		);
};