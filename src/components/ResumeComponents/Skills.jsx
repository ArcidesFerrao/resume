import React from 'react';
import './Styles/Skills.css';
import pythonIcon from './Styles/icons/python-icon.png';
import reactIcon from './Styles/icons/react-icon.png';
import gitIcon from './Styles/icons/github-512.webp';

export default function Skills() {
  return (
    <div className='cvSkills'>
        <div className="cvSk">
            <h2>Skills</h2>
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
                    <img src={reactIcon} alt="react" title="react" />
                </div>
                <div className="sk GitHub">
                    <img src={gitIcon} alt="gitHub" title="gitHub" />
                </div>
                <div className="sk Python">
                    <img src={pythonIcon} alt="Python" title="Python" />
                </div>
            </div>
        </div>

        {/* <div className="cvPr">
            <h2>Projects</h2>
            <div className="prList">

            </div>
        </div> */}
    </div>
  )
}
