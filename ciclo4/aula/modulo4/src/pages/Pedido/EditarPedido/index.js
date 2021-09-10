import {Container, Alert, Form, FormGroup,
Label, Input, Button, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react/cjs/react.development';
import axios from 'axios';
import {api} from '../../../config';


export const EditarPedido=(props)=>{

	
	const [ClienteId, setClienteId] = useState('');
	const [ServicoId, setServicoId]=useState('');
	const [valor, setValor]=useState('');
	const [data, setData]=useState('');
	const [status, setStatus]=useState({
		formSave: false,
		type: '',
		message: ''
	})
	const [id]=useState(props.match.params.id);


	const edtPedido= async e =>{
		e.preventDefault();
		const headers ={
			'Content-Type':'application/json'
		}
		setStatus({
			formSave: true
		})
		await axios.put(api+'/editarpedido',{id, ClienteId, ServicoId, valor, data},{headers})
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
					message: "Pedido alterado com sucesso."
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
		const getPedido = async ()=>{
			await axios.get(api+"/visualizarpedido/"+id)
			.then((response)=>{
				console.log(response.data);
				setClienteId(response.data.pedido.ClienteId);
				setServicoId(response.data.pedido.ServicoId);
				setValor(response.data.pedido.valor);
				setData(response.data.pedido.data);
			})
			.catch(()=>{
				console.log("Erro: Não foi possível se conectar a API.")
			})

		}
		getPedido();

	},[id])



	return(

		<div>

			<Container>

				<div className="d-flex">
					<div className="mr-auto p-2">
						<h1>Editar Pedido</h1>

					</div>
					<div className="p-2">
						<Link to="/visualizar-pedidos" className="btn btn-outline-primary btn-sm">
							Listar

						</Link>
						<Link to={"/pedido/"+id}
							className="btn btn-outline-primary btn-sm">Consultar</Link>

					</div>
				</div>

				{status.type==='error' ? <Alert color="danger">
				{status.message}</Alert>:""}
				{status.type==='success' ? <Alert color="success">
				{status.message}</Alert>:""}
				<Form className="p-2" onSubmit={edtPedido}>
					<FormGroup>
						<Label>Id do cliente</Label>
						<Input type="text" name="ClienteId" placeholder="Insira o id do cliente" value={ClienteId}
						onChange={e => setClienteId(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>ID do serviço</Label>
						<Input type="text" name="ServicoId" placeholder="Insira o id do serviço" value={ServicoId}
						onChange={e => setServicoId(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Valor</Label>
						<Input type="text" name="valor" placeholder="Valor do curso (em R$)" value={valor}
						onChange={e => setValor(e.target.value)}/>
					</FormGroup>
					<FormGroup>
						<Label>Data do pedido</Label>
						<Input type="text" name="data" placeholder="data que foi feito o pedido" value={data}
						onChange={e => setData(e.target.value)}/>
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