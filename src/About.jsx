import React from "react";
import IndexServiceCommmon from "./IndexServiceCommon";
import spread from "./image/spread.jpg";

const About = () => {
  return (
    <>
      <IndexServiceCommmon
        name="Welcome to About page"
        imgsrc={spread}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
