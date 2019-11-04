import React from 'react';
import './card-list.style.css';

export const CardList = (props)=> (
    <div className="card-list">
        {props.monsters.map(monster => (
            <h1 key={monster.id}></h1>
          ))}
    </div>
);