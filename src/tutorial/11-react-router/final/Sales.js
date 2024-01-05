import React from "react";
import { Link } from "react-router-dom";
import { sales } from "./Data";
const Sales = () => {
  const list = JSON.parse(localStorage.getItem("sale"));
  if (list) {
    return (
      <React.Fragment>
        <h1>Sales</h1>
        <ul className="employee">
          {list.map((sale) => {
            return (
              <li key={sale.id}>
                <img src={sale.img} alt="" />
                <div>
                  <h2>{sale.profile}</h2>
                  <h3>{sale.age}</h3>
                </div>
              </li>
            );
          })}
        </ul>

        <button className="btn">
          <Link to="/departments" className="link">
            Back to Departments
          </Link>
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Sales</h1>
        <ul className="employee">
          {sales.map((sale) => {
            return (
              <li key={sale.id}>
                <img src={sale.img} alt="" />
                <div>
                  <h2>{sale.profile}</h2>
                  <h3>{sale.age}</h3>
                </div>
              </li>
            );
          })}
        </ul>

        <button className="btn">
          <Link to="/departments" className="link">
            Back to Departments
          </Link>
        </button>
      </React.Fragment>
    );
  }
};

export default Sales;
