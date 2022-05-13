import React from "react";
import logo from "../../public/Brand_logo.png";
import Image from "next/image";
import classes from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <div className={classes.nav_bar}>
      {/* Logo */}
      <div className={classes.logo}>
        <Image height={50} src={logo} alt="logo" />
      </div>

      {/* NavLink */}
      <NavLinks/>

      {/* Action buttons */}
      <div className={classes.nav_action}>
        <Button className={classes.login_button} variant="text">Login</Button>
        <Button className={classes.demo_button} variant="outlined">Schedule Demo</Button>
        <Button className={classes.try_button} variant="contained">Try for free</Button>
      </div>
    </div>
  );
};

export default NavBar;
