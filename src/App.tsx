import  { useEffect, useState } from "react";
import RecipeSearchBar from "./assets/components/RecipeSearchBar";
import axios from "axios";
import Card from "./assets/components/Card";

const App = () => {


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=tomato"
        );
        const meals = res.data.meals;
        console.log(meals);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="app-container">
      <h1>Petit Chef</h1>
      <RecipeSearchBar />
      <ul>
      <Card />
      </ul>
    </div>
  );
};

export default App;
