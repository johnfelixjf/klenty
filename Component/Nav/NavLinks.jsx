import React from "react";
import classes from './NavLinks.module.scss';
import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className={classes.nav_links}>
      <Link href="">Platform</Link>
      <Link href="">Pricing</Link>
      <Link href="">Acceleration</Link>
      <Link href="">Resources</Link>
      <Link href="">Customer Stories</Link>
    </div>
  );
};

export default NavLinks;
