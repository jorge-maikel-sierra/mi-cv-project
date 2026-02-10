import { useState } from 'react';
import '../styles/App.css';

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [exp, setExp] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExp({ ...exp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <section>
        <h3>Experiencia Laboral</h3>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            name="company"
            placeholder="Nombre de la empresa"
            value={exp.company}
            onChange={handleChange}
          />
          <input
            name="position"
            placeholder="Titulo del puesto"
            value={exp.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Principales Responsabilidades"
            value={exp.responsibilities}
            onChange={handleChange}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              name="dateFrom"
              placeholder="Desde"
              value={exp.dateFrom}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
            <input
              name="dateUntil"
              placeholder="Hasta"
              value={exp.dateUntil}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
            .
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Laboral</h3>
      <div className="data-row">
        <span className="label">Empresa:</span> {exp.company}
      </div>
      <div className="data-row">
        <span className="label">Puesto:</span> {exp.position}
      </div>
      <div className="data-row">
        <span className="label">Periodo:</span> {exp.dateFrom} - {exp.dateUntil}
      </div>
      <div className="data-row">
        <span className="label">Responsabilidades:</span>
        <p style={{ whiteSpace: 'pre-wrap', marginTop: '5px' }}>{exp.responsibilities}</p>
      </div>
      <button className="edit-btn" onClick={() => setIsEditing(true)}>
        Editar
      </button>
    </section>
  );
}

export default Experience;
