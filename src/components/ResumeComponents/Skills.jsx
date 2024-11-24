import React from 'react';
import './Styles/Skills.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import pythonIcon from './Styles/icons/python-icon.png';

export default function Skills() {
  return (
    // <section className='cvSkills'>
        <section className="cvSk">
            <h2>Tech Stack</h2>
            <div className="skList">
                <div className="sk Html">
                    <span className="material-symbols-outlined">
                        html
                    </span>
                </div>
                <div className="sk Css3">
                    <span className="material-symbols-outlined">
                        css
                    </span>
                </div>
                <div className="sk Js">
                    <span className="material-symbols-outlined">
                        javascript
                    </span>
                </div>

                <div className="sk React">
                    <Icon icon="carbon:logo-react" width="32px" height="32px" />
                </div>
                <div className="sk GitHub">
                    <Icon icon="cib:next-js"  width="32px" height="32px" />
                </div>
                <div className="sk Python">
                    <img src={pythonIcon} alt="Python" title="Python" />
                </div>
                <div className="sk Prisma">
                    <Icon icon="devicon:prisma" width="32px" height="32px" />
                </div>
                <div className="sk Vercel">
                    <Icon icon="vscode-icons:file-type-vercel" width="32px" height="32px" />
                </div>
                <div className="sk Vercel">
                    <Icon icon="devicon:sanity" width="32px" height="32px" />
                </div>
                <div className="sk Vercel">
                    <Icon icon="devicon:postgresql" width="32px" height="32px" />
                </div>
            </div>

        {/* 
        <div className="cvDetailSkills">
        <h5>Proficiency in frontend technologies (html, css, javascript)</h5>
        <h5>Familiarity with responsive design and user experience principles</h5>
        </div> 
        
        // </section>
        */}
        </section>
  )
}
