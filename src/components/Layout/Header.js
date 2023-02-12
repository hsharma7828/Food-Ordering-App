import { Fragment } from "react";

import mealsImage from "../../asserts/meals.jpg";

import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table Full Of Delicious Food!!" />
      </div>
    </Fragment>
  );
};

export default Header;
