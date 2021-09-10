import {Container, Alert, Form, FormGroup,
Label, Input, Button, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react/cjs/react.development';
import axios from 'axios';
import {api} from '../../../config';


export const EditarCliente=(props)=>{

	const [data, setData]=useState([]);
	const [nome, setNome] = useState('');
	const [endereco, setEndereco]=useState('');
	const [cidade, setCidade]=useState('');
	const [uf, setUf]=useState('');
	const [nascimento, setNascimento]=useState('');
	const [status, setStatus]=useState({
		formSave: false,
		type: '',
		message: ''
	})
	const [id]=useState(props.match.params.id);


	const edtCliente= async e =>{
		e.preventDefault();
		const headers ={
			'Content-Type':'application/json'
		}
		setStatus({
			formSave: true
		})
		await axios.put(api+'/editarcliente',{id, nome, endereco, cidade, uf, nascimento},{headers})
		.then((response)=>{
			if(response.data.error){
				setStatus({
					formSave: false,
					type: 'error',
					message: 'Erro: Não foi possível se conectar a API.'
				})
			}else{
				setStatus({
					formSave: false,
					type: 'success',
					message: "Cliente alterado com sucesso."
				})
			}
		})
		.catch(()=>{
			setStatus({
				formSave: false,
				type: 'error',
				message: "Erro: Não foi possível se conectar a API."
			});
		});


	}

	useEffect(()=>{
		const getCliente = async ()=>{
			await axios.get(api+"/visualizarcliente/"+id)
			.then((response)=>{
				console.log(response.data);
				setNome(response.data.cliente.nome);
				setEndereco(response.data.cliente.endereco);
				setCidade(response.data.cliente.cidade);
				setUf(response.data.cliente.uf);
				setNascimento(response.data.cliente.nascimento);
			})
			.catch(()=>{
				console.log("Erro: Não foi possível se conectar a API.")
			})

		}
		getCliente();

	},[id])



	return(

		<div>

			<Container>

				<div className="d-flex">
					<div className="mr-auto p-2">
						<h1>Editar Cliente</h1>

					</div>
					<div className="p-2">
						<Link to="/visualizar-clientes" className="btn btn-outline-primary btn-sm">
							Listar

						</Link>
						<Link to={"/cliente/"+id}
							className="btn btn-outline-primary btn-sm">Consultar</Link>

					</div>
				</div>

				{status.type==='error' ? <Alert color="danger">
				{status.message}</Alert>:""}
				{status.type==='success' ? <Alert color="success">
				{status.message}</Alert>:""}
				<Form className="p-2" onSubmit={edtCliente}>
					<FormGroup>
						<Label>Nome</Label>
						<Input type="text" name="nome" placeholder="Insira o nome do cliente" value={nome}
						onChange={e => setNome(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Endereço</Label>
						<Input type="text" name="endereco" placeholder="Insira o endereço do cliente" value={endereco}
						onChange={e => setEndereco(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Cidade</Label>
						<Input type="text" name="cidade" placeholder="Cidade em que reside" value={cidade}
						onChange={e => setCidade(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Estado</Label>
						<Input type="text" name="uf" placeholder="Estado" value={uf}
						onChange={e => setUf(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Data de nascimento</Label>
						<Input type="text" name="nascimento" placeholder="yyyy-mm-dd" value={nascimento}
						onChange={e => setNascimento(e.target.value)}/>
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