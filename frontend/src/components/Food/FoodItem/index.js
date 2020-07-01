import React from 'react';

import './style.css';

const foodItem = props => (
  <li key={props.foodId} className="foods__list-item">
    <div>
      <h1>{props.name} - {props.calories}kcal</h1>
      <h2>
        {props.description}
      </h2>
    </div>
  </li>
);

export default foodItem;