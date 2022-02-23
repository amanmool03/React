import React from "react";
import mealsImage from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCard} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="MealsImage" />
      </div>
    </React.Fragment>
  );
}
