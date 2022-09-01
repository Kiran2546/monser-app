import React from 'react';
import './../card-list-comp/card-list-style-comp.css';
import { Card } from './../card-comp/card-comp';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((monsterList) => (
        <Card key={monsterList.id} monster={monsterList}></Card>
      ))}
    </div>
  );
};
