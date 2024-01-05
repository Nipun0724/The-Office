import React from "react";
import "./../../../index.css";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="home-contents">
        <iframe
          height="350"
          width="600"
          src="https://www.youtube.com/embed/mfokPqeSNcw?rel=0&amp;autoplay=1&mute=1"
        ></iframe>
        <div className="animation">
          <h4>
            Welcome to Scranton's quirky Dunder Mifflin office, where paper is
            our passion, and
          </h4>
          <h4>
            hilarity ensues daily. Join our zany team, led by the clueless yet
            lovable boss,
          </h4>
          <h4>
            Michael Scott. Share in the unforgettable pranks, romances, and
            awkward moments
          </h4>
          <h4>
            that make this workplace unforgettable. Experience the absurdity at
            its finest!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
