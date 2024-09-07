import React, { useState } from 'react';

const CrearCliente: React.FC = () => {
  const [formData, setFormData] = useState({
    codigoCliente: '',
    nombresCliente: '',
    apellidosCliente: '',
    NIT: '',
    direccionCliente: '',
    categoriaCliente: '',
    estadoCliente: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cliente creado:', formData);
    // Aquí podrías enviar la información al backend o actualizar el estado
  };

  return (
    <div>
      <h2>Crear Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>Código Cliente</label>
        <input name="codigoCliente" value={formData.codigoCliente} onChange={handleChange} required />

        <label>Nombres</label>
        <input name="nombresCliente" value={formData.nombresCliente} onChange={handleChange} required />

        <label>Apellidos</label>
        <input name="apellidosCliente" value={formData.apellidosCliente} onChange={handleChange} required />

        <label>NIT</label>
        <input name="NIT" value={formData.NIT} onChange={handleChange} required />

        <label>Dirección</label>
        <input name="direccionCliente" value={formData.direccionCliente} onChange={handleChange} />

        <label>Categoría</label>
        <input name="categoriaCliente" value={formData.categoriaCliente} onChange={handleChange} />

        <label>Estado</label>
        <input name="estadoCliente" value={formData.estadoCliente} onChange={handleChange} />

        <button type="submit">Crear Cliente</button>
      </form>
    </div>
  );
};

export default CrearCliente;
