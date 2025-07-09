import "../styles/components/_card.scss" ;

type CardProps = {
  meal: {
    strMealThumb: string;
    strMeal: string;
    strCategory: string;
  };
};

const Card = ({ meal }: CardProps) => (
  <div className="card">
    <div className="card-header">
      <h3>{meal.strMeal}</h3>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
    </div>
    <div className="card-body">
      <p className="meal-category" >{meal.strCategory}</p>
    </div>
  </div>
);

export default Card;
