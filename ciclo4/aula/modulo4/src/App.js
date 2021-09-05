import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente/';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido/';
import {VisualizarServico} from './pages/Servico/VisualizarServico/';
import {Menu} from './components/Menu';
import {Servico} from './pages/Servico/Servico/';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>

            <Route exact path="/" component={Home}/>
            <Route path="/visualizar-clientes" component={VisualizarCliente}/>
            <Route path="/visualizar-servicos" component={VisualizarServico}/>
            <Route path="/visualizar-pedidos" component={VisualizarPedido}/>
            <Route path="/servico/:id" component={Servico}/>


        </Switch>

      </Router>
    </div>
  );
}

export default App;
