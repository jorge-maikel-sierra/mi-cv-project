import { useState } from 'react';
import '../styles/App.css';

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [edu, setEdu] = useState({ school: '', title: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu({ ...edu, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <section>
        <h3>Educacion</h3>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            name="scholl"
            placeholder="Nombre de la escuela/universidad"
            value={edu.school}
            onChange={handleChange}
          />
          <input
            name="title"
            placeholder="Titulo del estudio"
            value={edu.title}
            onChange={handleChange}
          />
          <input
            name="date"
            type="text"
            placeholder="Fecha del estudio (ej. 2018 - 2022)"
            value={edu.date}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }

  return (
    <section>
      <h3>Educacion</h3>
      <div className="data-row">
        <span className="label">Escuela:</span> {edu.school}{' '}
      </div>
      <div className="data-row">
        <span className="label">Titulo:</span> {edu.title}
      </div>
      <div className="data-row">
        <span className="label">Fecha:</span> {edu.date}
      </div>
      <button className="edit-btn" onClick={() => setIsEditing(true)}>
        Editar
      </button>
    </section>
  );
}

export default Education;
