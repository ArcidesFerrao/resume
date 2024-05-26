import React from 'react'
import './Styles/Lingo.css';

export default function Lingo(props) {


  return (
    <section className="cvLingo">
        <div className="lingTitle">
            <h2>{props.dados.title}</h2>
        </div>
        <div className="lang">
            <h4>{props.dados.idiomaPt[0]}</h4> 
            <h4>{props.dados.idiomaEn[0]}</h4>
        </div>
        <div className="lingLevel">
            <h4>{props.dados.idiomaPt[1]}</h4>
            <h4>{props.dados.idiomaEn[1]}</h4>
        </div>
    </section>
  )
}