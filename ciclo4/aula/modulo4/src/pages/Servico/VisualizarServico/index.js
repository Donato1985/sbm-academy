import {Container, Table} from 'reactstrap';

export const VisualizarServico= ()=>{
	return(


		<div>
			<Container>
				<Table striped hover>

					<thead>
						<tr>
							<th>ID</th>
							<th>Serviço</th>
							<th>Descrição</th>
							<th>Ações</th>


						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<th>Mark</th>
							<th>Otto</th>
							<th>@mdo</th>



						</tr>
						<tr>
							<th>2</th>
							<th>Jacob</th>
							<th>Thomton</th>
							<th>@fat</th>
						</tr>
						<tr>
							<th>3</th>
							<th>Larry</th>
							<th>The Bird</th>
							<th>@twitter</th>
						</tr>


					</tbody>

				</Table>
			</Container>
		</div>


		
	);


};