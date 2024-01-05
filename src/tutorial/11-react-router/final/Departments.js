import React from "react";
import { Link } from "react-router-dom";
const depts = [
  { id: 1, dept: "Manager", l: "/manager" },
  { id: 2, dept: "Reception", l: "/reception" },
  { id: 3, dept: "Sales", l: "/sales" },
  { id: 4, dept: "Accounting", l: "/accounting" },
];
const Departments = () => {
  return (
    <div className="departments">
      <h1>Departments</h1>
      <div className="departments-contents">
        <img
          src="https://ph-files.imgix.net/31b1de16-6d20-4e6e-8a30-e5d0a5677397.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2"
          alt=""
        />
        <ul>
          {depts.map((dep) => {
            return (
              <li>
                <h2>
                  <Link to={dep.l} className="depts">
                    {dep.dept}
                  </Link>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Departments;
