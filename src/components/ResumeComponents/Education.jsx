import React from 'react';
import './Styles/Education.css';

export default function Education(props) {
  return (
    <section className="cvEducation">
        <div className="edTitle">
            <h2>{props.dados.title}</h2>
        </div>
        <div className="cvDetail">
            <h3>{props.dados.detail}</h3>
        </div>
        <div className="detailDate">
            <h3 className="cvDate">
            {props.dados.date}
            </h3>
        </div>
        <div className="edDegree">
            <h4>{props.dados.degree}</h4>
        </div>

    </section>
  )
}
