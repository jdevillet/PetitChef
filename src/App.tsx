import RecipeSearchBar from "./assets/components/RecipeSearchBar";
import Meals from "./assets/components/Meals";

const App = () => {


  return (
    <div className="app-container">
      <h1>Petit Chef</h1>
      <RecipeSearchBar />
        <Meals />
    </div>
  );
};

export default App;
