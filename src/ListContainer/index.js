import React from 'react';
import './style.scss';
import data from '../data.json';
import Card from './card';

const ListContainer = () => (
  <div className="main">
      {data.map((card) => <Card key={card.id} data={card}/>)}
      <div className="add">
        <span className="plus">+</span>
      </div>
  </div>
);

export default ListContainer;
