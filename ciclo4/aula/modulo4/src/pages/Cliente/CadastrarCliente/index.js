import {Container, Form, FormGroup, Label, Input, Button, Alert, Spinner} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react/cjs/react.development";
import axios from 'axios';
import {api} from "../../../config/";


export const CadastrarCliente = ()=>{

	const [cliente, setCliente]=useState({
		nome: '',
		endereco: '',
		cidade: '',
		uf: '',
		nascimento: ''
	});

	const [status,setStatus]=useState({
		formSave: false,
		type: '',
		message: ''
	})

	const headers={
		'Content-Type': 'application/json'
	}


	const limpar = () => {
  			Array.from(document.querySelectorAll("input")).forEach(
    			input => (input.value = "")
  				);
  			
			};

	const prevent = async e =>{
			e.preventDefault();
		}
		

	const valorInput = e => setCliente({...cliente,[e.target.name]:e.target.value});

	const cadCliente = async e =>{

		e.preventDefault();

		setStatus({
			formSave: true
		})

		await axios.post(api+"/clientes", cliente,{headers})
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
		}).catch(()=>{
			setStatus({
				formSave: false,
				type: "error",
				message: "Erro: Não foi possível estabelecer conexão com a API."
			})
		})


		limpar()

	};


return(

	<div>


		<Container>
			<div className="d-flex">
				<div className="mr-auto p-2">

					<h1>Cadastre seu cliente</h1>
				</div>

				<div className="p-2">
					<Link to="/visualizar-clientes" className="btn btn-outline-primary btn-sm">
						Listar
					</Link>
				</div>
			</div>
		</Container>
		<hr className="m-1"/>

		{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
		{status.type === 'success' ? <Alert color="success">{status.message}</Alert>:""}


		<Container>

			<Form className="p-2" onSubmit={cadCliente}>
				<FormGroup>
					<Label>
						Nome
					</Label>
					<Input type="text" name="nome" placeholder="Nome do cliente" onChange={valorInput}/>



				</FormGroup>

				<FormGroup>
					<Label>Endereço</Label>
					<Input type="text" name="endereco" placeholder="Endereço onde mora" onChange={valorInput}/> 

				</FormGroup>
				<FormGroup>

					<Label>Cidade</Label>
					<Input type="text" name="cidade" placeholder="Cidade" onChange={valorInput}/>



				</FormGroup>
				<FormGroup>
					<Label>Estado</Label>
					<Input type="text" name="uf" placeholder="Estado" onChange={valorInput}/>
				</FormGroup>
				<FormGroup>

					<Label>Data de nascimento</Label>
					<Input type="text" name="nascimento" placeholder="yyyy-mm-dd" onChange={valorInput}/>


				</FormGroup>
				<FormGroup>
					{status.formSave ? 
							<Button type="submit" outline color="success" disabled>
								 <Spinner color="success" />
							</Button> :
							<Button type="submit" outline color="success">Cadastrar</Button>

						}
						
				</FormGroup>
			</Form>

			<Form className="p-2" onSubmit={prevent}>
				<FormGroup>
					<Button type="submit" outline color="primary" onClick={limpar}>Limpar</Button>

				</FormGroup>


			</Form>
		</Container>	
		

	</div>

	)



}