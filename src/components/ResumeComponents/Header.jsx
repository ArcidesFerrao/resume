import React from 'react';
import './Styles/Header.css';



export default function Header(props) {

  return (
    <section className="cvHeader">
      <div className="headerName">
        <h1>{props.dados.name}</h1>
      </div> 
      <div className="headerOccupation">
        <h2>{props.dados.occupation}</h2>
      </div>
    </section>
  )
}
