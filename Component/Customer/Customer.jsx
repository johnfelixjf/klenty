import React from "react";
import classes from "./Customer.module.scss";
import Profile from "./Profile";

const Customer = () => {
  return (
    <div className={classes.customer_reviews}>
      <h1>What our customers have to say</h1>
      <Profile />
    </div>
  );
};

export default Customer;
