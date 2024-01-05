import React from "react";
import { Link } from "react-router-dom";

const Manager = () => {
  return (
    <div>
      <h1>Meet the Manager Michael Scott !!!</h1>
      <div className="home-contents">
        <img
          src="https://www.geekalerts.com/u/Michael-Scott-Worlds-Best-Boss-Mug.jpg"
          alt=""
        />
        <div className="animation2">
          <h4>
            "Good morning, everyone! I'm Michael Scott, the proudly
            unconventional
          </h4>
          <h4>
            regional manager here at Dunder Mifflin Scranton. Consider me your
          </h4>
          <h4>
            friend and mentor, always striving to create a positive and
            inclusive
          </h4>
          <h4>
            work environment. Yes, I've been known to make a few mistakes, but
            my
          </h4>
          <h4>
            heart is always in the right place. Together, we'll navigate the
          </h4>
          <h4>
            challenges of the paper industry with humor and camaraderie. If
            you're
          </h4>
          <h4>
            looking for a boss who values both hard work and laughter, you've
            come
          </h4>
          <h4>
            to the right place. So, let's buckle up and embark on this quirky
            and
          </h4>
          <h4>unforgettable journey together!"</h4>
        </div>
      </div>
      <button className="btn">
        <Link to="/departments" className="link">
          Back to Departments
        </Link>
      </button>
    </div>
  );
};

export default Manager;
