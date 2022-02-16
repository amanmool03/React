import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-44874-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("SomeThing Went Wrong");
      }

      const resposeData = await response.json();

      const loadedMeals = [];

      for (const key in resposeData) {
        loadedMeals.push({
          id: key,
          name: resposeData[key].name,
          description: resposeData[key].description,
          price: resposeData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsIsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsHasError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
