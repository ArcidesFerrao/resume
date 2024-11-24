import React from 'react'
import { Icon } from '@iconify/react';
import './Styles/Contact.css';

export default function Contact(props) {


  return (
    <section className="cvContact">
        <div className="conTitle">
            <h2>{props.dados.title}</h2>
        </div>
        <div className="contDescription">
            <div className='flexDescription'>
              <h4>{props.dados.description}</h4>
            </div> 
            <h4>+258 85 274 0554</h4>
            <h4>
              <a href="mailto:cidesferrao@gmail.com" className='emailLink' title='Send me an email' >cidesferrao@gmail.com</a>
            </h4>
            <h4>
              <a href="https://github.com/ArcidesFerrao" target='_blank' title='Check my gitHub repositories...'>github.com/ArcidesFerrao</a>
            </h4>
            <h4>
              <a href="https://portfolio-arcidesferraos-projects.vercel.app/" target='_blank' title='Check my portfolio...' >
              {props.dados.portfolio} - Frontend Developer
              </a>
            </h4>
        </div>
    </section>
  )
}
