import React from 'react';
import './style.scss';

const Header = () => (
  <div className="header">
      <h1 className="title">To Do List</h1>
      <h2 className="subtitle">Restez organisé</h2>
      <input className="search" type="text" placeholder="Rechercher..."/>
  </div>
);

export default Header;
