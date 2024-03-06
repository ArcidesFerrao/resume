import React from 'react'
import './Styles/Contact.css';

export default function Contact() {


  return (
    <div className="cvContact">
        <div className="conTitle">
            <h2>Contact</h2>
        </div>
        <div className="contDescription">
            <h4>Maputo, Mozambique</h4>
            <h4>+258 85 274 0554</h4>
            <h4>
              <a href="mailto:cidesferrao@gmail.com" className='emailLink' title='Send me an email' >cidesferrao@gmail.com</a>
            </h4>
            <h4>
              <a href="https://github.com/ArcidesFerrao" target='_blank' title='Check my gitHub repositories...'>github.com/ArcidesFerrao</a>
            </h4>
        </div>
    </div>
  )
}
