import React from 'react';
import './../card-comp/card-style-comp.css';

export const Card = (props) => {
  return (
    <div key={props.monster.id} className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=175x175`}
        alt={props.monster.name}
      ></img>
      <h3> {props.monster.name}</h3>
      <p> {props.monster.email}</p>
    </div>
  );
};
