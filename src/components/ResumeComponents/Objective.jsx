import React from 'react'
import './Styles/Objective.css';

export default function Objective(props) {


  return (
    <section className="cvObjective">
        <div className="objTitle">
            <h2>{props.dados.title}</h2>
        </div>
        <div className="objtDescription">
            <h4>{props.dados.description}</h4>
        </div>
    </section>
  )
}