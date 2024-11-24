import React, { useState } from 'react';
import './Styles/Resume.css';
import Contact from './ResumeComponents/Contact';
import Objective from './ResumeComponents/Objective';
import Header from './ResumeComponents/Header';
import Education from './ResumeComponents/Education';
import Lingo from './ResumeComponents/Lingo';
import Experience from './ResumeComponents/Experience';
import Skills from './ResumeComponents/Skills';

export default function Resume() {
  
  const [idioma, setIdioma] = useState(true);

  const handleLingo = () => {
    setIdioma(!idioma);
  }
  
  const dados = {
    "header": {
      "name": "Arcides Henriques Ferrão",
      "occupation": "Desenvolvedor Frontend",
    },
    "contact": {
      "title": "Contacto",
      "description": "Maputo, Moçambique",
      "portfolio": "Portfolio - Desenvolvedor Frontend",
    },
    "experience": {
      "title": "Experiencia",
      "detail": "Banco de Moçambique",
      "date": "2011",
      "description": "At the internship the main task was problem solving, taking care of every problem that witholds the progress on the goals that had to be reached daily.",
      "descriptionList": <ul>
                          <li>- Resolução de problemas e elaboração de projectos</li>
                          <li>- Conhecimento sobre termos e desenvolvimentos tecnologicos</li>
                          <li>- Habilidade de colaboração e comunicação efectiva</li>
                        </ul>,
    },
    "objective": {
      "title": "Objectivo",
      "description": "Melhorar as abilidades que possuo para poder trazer soluções rapidas e flexíveis para problemas do dia a dia através de aplicações web.",
    },
    "education": {
      "title": "Educação",
      "detail": "ITC - Instituto de Transportes e Comunicações",
      "date": "2009-2011",
      "degree": "Técnico de Sistemas Informáticos",
    },
    "language": {
      "title": "Idioma",
      "idiomaPt": ["Português", "Nativo"],
      "idiomaEn": ["Inglês", "Fluente"],
    },

  }

  const data = {
    "header": {
      "name": "Arcides Henriques Ferrão",
      "occupation": "Frontend Developer",
    },
    "contact": {
      "title": "Contact",
      "description": "Maputo, Mozambique",
      "portfolio": "Portfolio - Frontend Developer",

    },
    "experience": {
      "title": "Experience",
      "detail": "Mozambican Bank",
      "date": "2011",
      "description": "At the internship the main task was problem solving, taking care of every problem that witholds the progress on the goals that had to be reached daily.",
      "descriptionList": <ul>
                          <li>- Problem solving and project elaboration.</li>
                          <li>- Knowledge of technological terms and developments</li>
                          <li>- Collaboration and communication abilities</li>
                        </ul>,
    },
    "objective": {
      "title": "Objective",
      "description": "Work with a start up that aims to grow bigger over time to improve my skills and abilities bringing flexible solutions to day today problems.",
    },
    "education": {
      "title": "Education",
      "detail": "ITC - Transports and Communications Institute",
      "date": "2009-2011",
      "degree": "Information Technology",
    },
    "language": {
      "title": "Language",
      "idiomaPt": ["Portuguese", "Native"],
      "idiomaEn": ["English", "Fluent"],
    },
  }

  return (
    <div className='resume'>
        <Header dados={idioma ? data.header : dados.header}/>
        <Contact dados={idioma ? data.contact : dados.contact}  />
        <Experience dados={idioma ? data.experience : dados.experience } />
        <Objective dados={idioma ? data.objective : dados.objective } />
        <Education dados={idioma ? data.education : dados.education} />
        <Lingo dados={idioma ? data.language : dados.language} />
        <Skills />
        <div className="lingo">
          <button onClick={handleLingo} className={!idioma ? 'pt-Btn active' : 'pt-Btn'} >PT</button>
          <button onClick={handleLingo} className={idioma ? 'en-Btn active' : 'en-Btn'} >EN</button>
        </div>
    </div>
  )
}
