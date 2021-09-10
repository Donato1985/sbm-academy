import {Container, Alert, Form, FormGroup,
Label, Input, Button, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react/cjs/react.development';
import axios from 'axios';
import {api} from '../../../config';





export const EditarServico = (props)=>{

	const [data, setData] = useState([]);
	const [id] = useState(props.match.params.id);
	const [status, setStatus] = useState({
		formSave: false,
		type: '',
		message: ''
	});

	const [nome, setNome] = useState('');
	const [descricao, setDescricao] = useState('');

	const edtServico = async e =>{
		e.preventDefault();
		const headers={
			'Content-Type':'application/json'
		};
	setStatus({
		formSave: true
	})

	await axios.put(api+"/editarservico",{id,nome,descricao},{headers})
	.then((response)=>{
		//console.log(response.data.error);
		//console.log(response.data.message);
		if(response.data.error){
			setStatus({
				formSave: false,
				type: 'error',
				message: response.data.nessage
			})
		}else{
			setStatus({
				formSave: false,
				type: 'success',
				message: response.data.message
			})
		}
	})
	.catch(()=>{
		setStatus({
			formSave: false,
			type: 'error',
			message: 'Erro: Não foi possível se conectar a API.'
		});
	});


	};

	

	useEffect(()=>{
		const getServico = async ()=>{
			await axios.get(api+"/visualizarservico/"+id)
			.then((response)=>{
				console.log(response.data.servico);
				setNome(response.data.servico.nome);
				setDescricao(response.data.servico.descricao);
			})
			.catch(()=>{
				console.log("Erro: Não foi possível se conectar a API.")
			});
		}
		getServico();

	},[id]);


	return(

		<div>
			<Container>
				<div className="d-flex">
					<div className="mr-auto p-2">
						<h1>Editar o serviço</h1>

					</div>
					<div className="p-2">
						<Link to="/visualizar-servicos"
							className="btn btn-outline-primary btn-sm">
							Listar
						</Link>
						<Link to={"/servico/"+id}
							className="btn btn-outline-primary btn-sm">Consultar</Link>

					</div>
					
				</div>
				{status.type==='error' ? <Alert color="danger">
				{status.message}</Alert>:""}
				{status.type==='success' ? <Alert color="success">
				{status.message}</Alert>:""}

				<Form className="p-2" onSubmit={edtServico}>
					<FormGroup>
						<Label>Nome</Label>
						<Input type="text" name="nome" placeholder="Insira o nome do serviço" value={nome}
						onChange={e => setNome(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Descrição</Label>
						<Input type="text" name="descricao" placeholder="Insira a descrição do serviço" value={descricao}
						onChange={e => setDescricao(e.target.value)}/>
					</FormGroup>
					{status.formSave ? 
						<Button type="submit" outline color="warning" disabled>
						<Spinner size="sm" color="warning"/></Button>:
						<Button type="submit" outline color="warning">Salvar
						</Button>}
				</Form>
			</Container>

		</div>

		);
};