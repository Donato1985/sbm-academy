import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente/';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido/';
import {VisualizarServico} from './pages/Servico/VisualizarServico/';
import {Menu} from './components/Menu';
import {Servico} from './pages/Servico/Servico/';
import {Pedido} from './pages/Pedido/Pedido/';
import {Cliente} from './pages/Cliente/Cliente';
import {CadastrarServico} from './pages/Servico/CadastrarServico/';
import {CadastrarCliente} from './pages/Cliente/CadastrarCliente/';
import {CadastrarPedido} from './pages/Pedido/CadastrarPedido/';
import {EditarServico} from './pages/Servico/EditarServico/';
import {EditarCliente} from './pages/Cliente/EditarCliente/';
import {EditarPedido} from './pages/Pedido/EditarPedido/';




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
            <Route path="/pedido/:id" component={Pedido}/>
            <Route path="/cliente/:id" component={Cliente}/>
            //relativo a aula 3 do ciclo 4
            <Route path="/cadastrarservico" component={CadastrarServico}/>
            <Route path="/cadastrarcliente" component={CadastrarCliente}/>
            <Route path="/cadastrarpedido" component={CadastrarPedido}/>
            //relativo a aula 4 do ciclo 4
            <Route path="/editarservico/:id" component={EditarServico}/>
            <Route path="/editarcliente/:id" component={EditarCliente}/>
            <Route path="/editarpedido/:id" component={EditarPedido}/>
           



        </Switch>

      </Router>
    </div>
  );
}

export default App;
