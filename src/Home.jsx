import React from "react";
import IndexServiceCommmon from "./IndexServiceCommon";
import web from "./image/img1.jpg";

const Home = () => {
  return (
    <>
      <IndexServiceCommmon
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
