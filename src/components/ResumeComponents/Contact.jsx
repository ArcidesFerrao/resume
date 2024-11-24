import React from 'react'
import './Styles/Contact.css';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Contact(props) {


  return (
    <section className="cvContact">
        <div className="conTitle">
            <h2>{props.dados.title}</h2>
        </div>
        <div className="contDescription">
            <div className='flexDescription'>
              <Icon icon="mingcute:location-fill" width="14px" height="14px" />
              <h4>{props.dados.description}</h4>
            </div> 
            <div className="cont-item">
            <Icon icon="line-md:phone-filled" width="14px" height="14px" />
              <h4>+258 85 274 0554</h4>
            </div>
            <div className="cont-item">
            <Icon icon="line-md:email-alt-filled" width="14px" height="14px" />
            <h4>
              <a href="mailto:cidesferrao@gmail.com" className='emailLink' title='Send me an email' >cidesferrao@gmail.com</a>
            </h4>
            </div>
            <div className="cont-item">
              <Icon icon="line-md:github-loop" width="14px" height="14px" />
              <h4>
                <a href="https://github.com/ArcidesFerrao" target='_blank' rel="noreferrer" title='Check out my github repositories...'>github.com/ArcidesFerrao</a>
              </h4>
            </div>
            <div className="cont-item">
            <Icon icon="line-md:person-filled" width="14px" height="14px" />
            <h4>
              <a href="https://portfolio-arcidesferraos-projects.vercel.app/" target='_blank' rel="noreferrer" title='Check out my portfolio...' >
              {props.dados.portfolio}
              </a>
            </h4>

            </div>
            
            
        </div>
    </section>
  )
}
