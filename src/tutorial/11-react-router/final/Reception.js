import React from "react";
import { Link } from "react-router-dom";

const Reception = () => {
  return (
    <div>
      <h1>Receptionist</h1>
      <div className="reception">
        <img src="https://wallpapercave.com/wp/wp10346398.jpg" alt="" />
        <div>
          <h2>Pam Beesly</h2>
          <h3>26</h3>
        </div>

        <button className="btn">
          <Link to="/departments" className="link">
            Back to Departments
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Reception;
