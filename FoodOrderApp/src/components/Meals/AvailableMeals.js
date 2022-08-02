import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import useHttp from '../../customHooks/use-http';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const { isLoading, error, fetchServerData } = useHttp();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const setMenuData = (data) => {
      setMeals(data);
    }

    fetchServerData({ url: 'http://localhost:5280/api/Menu' }, setMenuData);

  }, [fetchServerData]);

  
  let content = meals.map(meal =>
    <MealItem id={meal.id} key={meal.id} name={meal.name}
      description={meal.description}
      price={meal.price}
    />);

    

    if (error) {
      content = <p>An error occurred </p>;
    }
  
    if (isLoading) {
      content = <p>Loading tasks...</p>;
    }
  
  return <section className={classes.meals}>
    <Card>
      <ul>
        {content}
      </ul>
    </Card>
  </section>

}

export default AvailableMeals;