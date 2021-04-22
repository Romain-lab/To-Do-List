import React from 'react';
import './style.scss';

const Card = ({ data }) => (
  <div className="card">
    <input type="checkbox" className="checkbox"/>
    <div className="card__infos">
      <h3 className="card__infos__title">{data.title}</h3>
      <h4 className="card__infos__description">{data.description}</h4>
    </div>
    <div className="card__remove">
      <span className="card__remove__letter">+</span>
    </div>
  </div>
);

export default Card;
