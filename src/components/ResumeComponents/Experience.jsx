import React from 'react';
import './Styles/Experience.css';

export default function Experience(props) {
  
    return (
        <section className="cvExperience">
            <div className="expTitle">
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
            <div className="expDescription">
                <h4>{props.dados.description}</h4>
                {props.dados.descriptionList}
            </div>

        </section>
  )
}
