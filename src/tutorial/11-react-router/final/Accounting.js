import React from "react";
import { Link } from "react-router-dom";
import { accounts } from "./Data";
const Accounting = () => {
  const list = JSON.parse(localStorage.getItem("account"));
  if (list) {
    return (
      <React.Fragment>
        <h1>Employees</h1>
        <ul className="employee">
          {list.map((account) => {
            return (
              <li key={account.id}>
                <img src={account.img} alt="" />
                <div>
                  <h2>{account.profile}</h2>
                  <h3>{account.age}</h3>
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
        <h1>Employees</h1>
        <ul className="employee">
          {accounts.map((account) => {
            return (
              <li key={account.id}>
                <img src={account.img} alt="" />
                <div>
                  <h2>{account.profile}</h2>
                  <h3>{account.age}</h3>
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

export default Accounting;
