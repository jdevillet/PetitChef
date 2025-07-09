import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'; 

type Meal = {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strCategory : string;
};

const Meals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=potato"
        );
        const mealsData = res.data.meals || [];
        setMeals(mealsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    
    getData();
  }, []);

  return (
    <ul className='cards-container'>
      {meals.map((meal) => (
        <Card
          key={meal.idMeal}
          meal={{
            strMealThumb: meal.strMealThumb,
            strMeal: meal.strMeal,
            strCategory: meal.strCategory
          }}
        />
      ))}
    </ul>
  );
};

export default Meals;
