// import React from "react";
import "../styles/components/_recipeSearchBar.scss";

const RecipeSearchBar = () => {


  return (
    <div className="search-bar-container">
      <form>
        <label htmlFor="search-bar" className="visually-hidden">
        </label>
        <input
          id="search-bar"
          className="search-bar"
          type="text"
          placeholder="Search for an ingredient (ex: beef)"
          autoComplete="off"
        />
      </form>
    </div>
  );
};


export default RecipeSearchBar;