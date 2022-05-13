import React from "react";
import classes from "./Acceleration.module.scss";
import Card from "../UI Elements/Card";
import Image from "next/image";

/*-------------- CRM Acceleration ----------------*/
const datas = [
  {
    image: "/contact.png",
    title: "Never update your contacts manually",
    description:
      "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities.",
  },
  {
    image: "/engage.png",
    title: "Engage instantly with prospects who show intent",
    description:
      "Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.",
  },
  {
    image: "/outreach.png",
    title: "Outreach without leaving your CRM ",
    description:
      "Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.",
  },
];
/*-------------- CRM Acceleration ----------------*/

const Acceleration = () => {
  return (
    <div className={classes.acceleration_container}>
      <div className={classes.acceleration_content}>
        <div className={classes.container_header}>
          <h1>CRM Acceleration</h1>
          <p>Everything CRM Integrations was supposed to be. And more.</p>
        </div>
        <div className={classes.container_cards}>
          {datas.map((data) => {
            return (
              <Card>
                <Image src={data.image} width={60} height={60} />
                <h2 className={classes.card_title}>{data.title}</h2>
                <p className={classes.card_description}>{data.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Acceleration;
