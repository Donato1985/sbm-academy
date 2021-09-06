import {useState, useEffect} from "react/cjs/react.development";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import {api} from '../../../config';
import {Alert} from 'reactstrap';


export const Cliente =(props)=>{
	//console.log(props.match.params);


	const [data, setData] = useState([]);

	const [id, setId] = useState(props.match.params.id);

	const [status, setStatus] = useState({
		type: '',
		error: ''
	});


	const getCliente = async()=>{
		await axios.get(api+`/visualizarcliente/${id}`)
		.then((response)=>{
			//console.log(response.data.cliente);
			setData(response.data.cliente);
		})
		.catch(()=>{
			setStatus({
				type: 'error',
				message: 'Sem conexão com a API.'
			})
		});
	};

	useEffect(()=>{
		getCliente();
	});

	return(

		<div>
			<Container>
				<div className="d-flex">

					<div className="mr-auto p-2">

						<h1>Cliente solicitado</h1>
					</div>
					<div className="p-2">
						<Link to="/visualizar-clientes"
						className="btn btn-outline-success btn-sm">Voltar</Link>
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
						<dt className="col-sm-3">Endereço:</dt>
						<dd className="col-sm-9">{data.endereco}</dd>
					</dl>
					<dl className="row">
						<dt className="col-sm-3">Cidade:</dt>
						<dd className="col-sm-9">{data.cidade}</dd>
					</dl>
					<dl className="row">
						<dt className="col-sm-3">Estado:</dt>
						<dd className="col-sm-9">{data.uf}</dd>
					</dl>
					<dl className="row">
						<dt className="col-sm-3">Data de nascimento:</dt>
						<dd className="col-sm-9">{data.nascimento}</dd>
					</dl>
				</div>
			</Container>
		</div>

		);
};