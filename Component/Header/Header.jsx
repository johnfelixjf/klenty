import React from "react";
import classes from "./Header.module.scss";
import Image from "next/image";
import image from "../../public/hero_image.png";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className={classes.header_container}>
      <div className={classes.hero_container_content}>
        <h1 className={classes.content_title}>
          Don't just integrate <br />
          <span>Accelerate your CRM</span>
        </h1>
        <p>
          Propel your sales team into a state of flow with CRM Accelerations.
          Switch out boring hours of repetitive work with high-impact
          activities. Build a repeatable sales process.
        </p>
        <Button className={classes.start_button} variant="contained">Get Started</Button>
      </div>

      {/* Hero Banner */}
      <div className={classes.container_banner}>
        <Image src={image} alt="image" height={500} width={500} />
      </div>
    </div>
  );
};

export default Header;
