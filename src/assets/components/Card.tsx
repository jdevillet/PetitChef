type CardProps = {
  meal: {
    strMealThumb: string;
    strMeal: string;
  }
}

const Card = ({ meal }: CardProps) => {
   if (!meal) return null;
  return (
    <li className="card">
      <img src={meal.strMealThumb} alt="" />
    </li>
  );
};

export default Card;