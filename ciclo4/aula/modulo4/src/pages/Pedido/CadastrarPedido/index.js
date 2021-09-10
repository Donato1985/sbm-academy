import {Container, Form, FormGroup, Label, Input, Button, Alert, Spinner} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react/cjs/react.development";
import axios from 'axios';
import {api} from "../../../config/";

export const CadastrarPedido = ()=>{

	const prevent = async e =>{
			e.preventDefault();
		}
	const limpar = () => {
  			Array.from(document.querySelectorAll("input")).forEach(
    			input => (input.value = "")
  				);
  			
			};

	const [pedido,setPedido] = useState({
			ClienteId: '',
			ServicoId: '',
			valor: 0.00,
			data: ''
	});


	const [status, setStatus] = useState({
		formSave: false,
		type: '',
		message: ''
	})

	const valorInput = e => setPedido({...pedido,[e.target.name]: e.target.value});

	const headers ={
		'Content-Type':'application/json'
	};


	const cadPedido = async e =>{

		e.preventDefault();

		setStatus({
			formSave: true
		})

		await axios.post(api+"/pedidos",pedido,{headers})
		.then((response)=>{
			if(response.status===200){
				setStatus({
					formSave: false,
					type: "success",
					message: response.data
				})
			}else{
				setStatus({
					formSave: false,
					type: "error",
					message: response
				})
			}
		})
		.catch(()=>{
			setStatus({
				formSave: false,
				type: "error",
				message: "Erro: Não foi possível estabelecer conexão com a API."
			})
		});

		limpar();

	}



	return(

		<div>
			<Container>
				<div className="d-flex">
					<div className="mr-auto p-2">
						<h1>Cadastro de Pedidos</h1>


					</div>

					<div className="p-2">

						<Link to="/visualizar-pedidos" className="btn btn-outline-primary btn-sm">
							Listar

						</Link>

					</div>


				</div>

			</Container>

			<hr className="m-1"/>
			{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
			{status.type === 'success' ? <Alert color="success">{status.message}</Alert>:""}

			<Container>

				<Form className="p-2" onSubmit={cadPedido}>
					<FormGroup>
						<Label>Id do cliente</Label>
						<Input type="text" name="ClienteId" placeholder="id do cliente aqui" onChange={valorInput}/>

					</FormGroup>
					<FormGroup>
						<Label>Id do serviço</Label>
						<Input type="text" name="ServicoId" placeholder="id do serviço aqui" onChange={valorInput}/>

					</FormGroup>
					<FormGroup>
						<Label>Valor</Label>
						<Input type="text" name="valor" placeholder="Valor (em R$)" onChange={valorInput}/>

					</FormGroup>
					<FormGroup>
						<Label>Data do pedido</Label>
						<Input type="text" name="data" placeholder="Data do pedido" onChange={valorInput}/>

					</FormGroup>
					<div>
						{status.formSave ? 
							<Button type="submit" outline color="success" disabled>
								 <Spinner color="success" />
							</Button> :
							<Button type="submit" outline color="success">Cadastrar</Button>

						}
					</div>


				</Form>

				
				<Form className="p-2" onSubmit={prevent}>
					<FormGroup>
						<Button className="p-2" outline color="primary" onClick={limpar}>Limpar</Button>

					</FormGroup>

				</Form>


			</Container>

		</div>


		)



}