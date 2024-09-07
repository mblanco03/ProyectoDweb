import React, { useState } from 'react';

const ConsultaCliente: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientes] = useState([
    { codigo: '001', nombres: 'Juan', apellidos: 'Pérez', NIT: '1234567' },
    { codigo: '002', nombres: 'Ana', apellidos: 'García', NIT: '7654321' }
  ]);

  const filteredClientes = clientes.filter(cliente =>
    cliente.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.NIT.includes(searchTerm)
  );

  return (
    <div>
      <h2>Consulta Cliente</h2>
      <input
        type="text"
        placeholder="Buscar por nombre, apellido o NIT"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>NIT</th>
          </tr>
        </thead>
        <tbody>
          {filteredClientes.map(cliente => (
            <tr key={cliente.codigo}>
              <td>{cliente.codigo}</td>
              <td>{cliente.nombres}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.NIT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultaCliente;
