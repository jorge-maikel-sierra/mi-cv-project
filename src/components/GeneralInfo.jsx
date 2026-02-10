import { useState } from 'react';
import '../styles/App.css';

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <section>
        <h3>Informacion General</h3>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={info.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={info.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numero Telefono"
            value={info.phone}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }

  return (
    <section>
      <h2>{info.name || 'Tu Nombre Aqui'}</h2>
      <div className="data-row">
        <span className="label">Email:</span> {info.email}
      </div>
      <div className="data-row">
        <span className="label">Telefono:</span> {info.phone}
      </div>
      <button className="edit-btn" onClick={() => setIsEditing(true)}>
        Editar
      </button>
    </section>
  );
}

export default GeneralInfo;
