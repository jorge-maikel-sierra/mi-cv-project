import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';


function App() {
  return (
    <div className="cv-container">
      <h1 style={{textAlign: 'center'}}>Generador de CV</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )
}

export default App
