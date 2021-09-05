import {Container} from 'reactstrap';

export const Home = ()=>{

	return(

		<div>
			<Container>

				
				<div className="d-flex">

					<div className="mr-auto p-1">

							<h1>Página Inicial</h1>


					</div>
					<div className="p-2">
						<a href="/visualizar-clientes"
						className="btn btn-outline-primary btn-sm">
							Cliente


						</a>


					</div>

					<div className="p-2">
						<a href="/visualizar-pedidos"
						className="btn btn-outline-primary btn-sm">
							Pedido
						</a>
					</div>
					<div className="p-2">
						<a href="/visualizar-servicos"
						className="btn btn-outline-primary btn-sm">
							Serviço
						</a>
					</div>



				</div>

			</Container>


		</div>
		);
};