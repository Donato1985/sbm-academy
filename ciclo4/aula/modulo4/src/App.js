import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home/";
import {Cliente} from "./pages/Cliente/";
import {Pedido} from "./pages/Pedido/";
import {Servico} from "./pages/Servico/";
import {Menu} from './components/Menu';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import {VisualizarServico} from './pages/Servico/VisualizarServico';
function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          //Exercícios solicitados no ciclo 4 dia 1
          <Route path="/cliente" component={Cliente}/>
          <Route path="/servico" component={Servico}/>
          <Route path="/pedido" component={Pedido}/>
          //fim do exercício
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>



          </Switch>
      </Router>
    </div>
  );
}

export default App;
