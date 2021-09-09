import {Container, Form, FormGroup, Label, Input, Button, Alert, Spinner} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react/cjs/react.development";
import axios from 'axios';
import {api} from "../../../config/";




export const CadastrarServico = () => {
	
	const [servico, setServico]=useState({
		nome: '',
		descricao: ''
	});

	const [status, setStatus]=useState({
		formSave: false,
		type: '',
		message: ''
	})
	

	let valorInput = e => setServico({...servico,[e.target.name]: e.target.value});


	const limpar = () => {
  			Array.from(document.querySelectorAll("input")).forEach(
    			input => (input.value = "")
  				);
  			
			};

	


	const headers = {

			'Content-Type': 'application/json'
		}
		


	const cadServico= async e =>{
		
		e.preventDefault();

		setStatus({
			formSave: true
		})

		
		
		
		
		
		await axios.post(api+"/servicos",servico,{headers})
		.then((response)=>{
			//console.log(response);
			if(response.status===200){
				setStatus({
					formSave: false,
					type: "success",
					message: response.data
				});
			}else{
				setStatus({
					formSave: false,
					type: "error",
					message: response
				});
				
			}

		})
		.catch(()=>{
			setStatus({
				formSave: false,
				type: 'error',
				message: 'Erro: Sem conexão com a API.'
			});
		})

				

			};
	

	return(
		<div>
			<Container>
				<div className="d-flex">
					<div className="mr-auto p-2">

						<h1>Informações do Serviço</h1>
					</div>
					

				<div className="p-2">
						
						<Link to="/visualizar-servicos"
							className="btn btn-outline-primary  btn-sm">
							Listar
						</Link>

					</div>
				</div>
				
			</Container>
			<hr className="m-1"/>

			{status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
			{status.type === 'success' ? <Alert color="success">{status.message}</Alert>:""}

			<Container>
				<Form className="p-2" onSubmit={cadServico}>
					<FormGroup>
						<Label>Nome</Label>
						<Input type="text" name="nome" placeholder="nome do serviço" onChange={valorInput}/>
						
					</FormGroup>

					<FormGroup>
						<Label>Descrição</Label>
						<Input type="text" name="descricao" placeholder="descrição do serviço" onChange={valorInput}/>
					</FormGroup>
					<div>
						
						{status.formSave ? 
							<Button type="submit" outline color="success" disabled>
								<Spinner type="grow" color="success" />
							</Button> :
							<Button type="submit" outline color="success">Cadastrar</Button>

						}
						
						

					</div>
				</Form>
				<Form className="p-2">
					<FormGroup>
						<Button className="p-2" outline color="primary" onClick={limpar}>Limpar</Button>

					</FormGroup>

				</Form>
				
			</Container>
			
		</div>
		
		)

};