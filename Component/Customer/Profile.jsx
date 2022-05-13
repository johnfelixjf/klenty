import React from "react";
import { useState } from "react";
import classes from "./Profile.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Profile = () => {
  const slider = React.useRef(null);
  var settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  /*--------------Customer Profile Data----------------*/
  const profiles = [
    {
      id: 1,
      quotation: "/quotation.png",
      img: "/Adam.png",
      name: "Adam Weinger",
      desc: "President,Double The Donation ",
      content:
        "Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%",
      logo: "/double-logo.png",
    },
    {
      id: 2,
      quotation: "/quotation.png",
      img: "/sam.png",
      name: "Sam W",
      desc: "Head of Demand Generation , Jump",
      content:
        "From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner",
      logo: "/jump-logo.png",
    },
    {
      id: 3,
      quotation: "/quotation.png",
      img: "/Adam.png",
      name: "Gavin Tye",
      desc: "Sales Director , Red Eye ",
      content:
        "It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills ",
      logo: "/red-eye.png",
    },
  ];
  /*--------------Customer Profile Data----------------*/

  return (
    <div className={classes.customer_profile}>
      <Slider ref={slider} {...settings}>

        {profiles.map((profile) => {
          return (
            <div className={classes.profile} key={profile.id}>
              <div className={classes.review}>
                <Image
                  src={profile.quotation}
                  alt="quotation"
                  width={100}
                  height={100}
                />
                <h2>{profile.content}</h2>
                <div className={classes.company}>
                  <Image src={profile.logo} alt="logo" width={70} height={50} />
                  <div class={classes.v1}></div>
                  <div>
                    <h3>{profile.name}</h3>
                    <h4>{profile.desc}</h4>
                  </div>
                </div>
              </div>
              <div className={classes.profile_pic}>
                <Image src={profile.img} width={300} height={350} />
              </div>
            </div>
          );
        })}
      </Slider>

      {/*---------------Bottom Profile Carousel------------------*/}

      <div className={classes.buttons}>
        <div className={classes.prev_next}></div>
        <div
          className={classes.left_button}
          onClick={() => slider?.current?.slickPrev()}
        >
          <AiOutlineArrowLeft size={18} />
        </div>
        <div
          className={classes.right_button}
          onClick={() => slider?.current?.slickNext()}
        >
          <AiOutlineArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
