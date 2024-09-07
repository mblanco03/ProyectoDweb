import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CrearCliente from './CrearCliente';
import ConsultaCliente from './ConsultaCliente';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/crear-cliente">Crear Cliente</Link>
              </li>
              <li>
                <Link to="/consulta-cliente">Consulta Cliente</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/crear-cliente" element={<CrearCliente />} />
            <Route path="/consulta-cliente" element={<ConsultaCliente />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
