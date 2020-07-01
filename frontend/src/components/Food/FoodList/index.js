import React from 'react';
import FoodItem from '../FoodItem'
import './style.css';

const foodList = props => {
  const foods = props.foods.map(food => {
    return (
      <FoodItem
        key={food._id}
        foodId={food._id}
        name={food.name}
        description={food.description}
        calories={food.calories}
      />
    );
  });

  return <ul className="food__list">{foods}</ul>;
};

export default foodList;