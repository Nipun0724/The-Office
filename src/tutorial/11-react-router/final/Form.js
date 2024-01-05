import React, { useState } from "react";
import { accounts, sales } from "./Data";
import { useEffect } from "react";
const Card = () => {
  return (
    <div className="id">
      <div className="hole"></div>
      <div className="id-logo">
        <img src="https://cdn.wallpapersafari.com/43/67/4wRJDG.jpg" alt="" />
      </div>
      <img
        src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
        alt=""
      />{" "}
      <br />
      <div className="details">
        <h2>Name : </h2>
        <h2>Department : </h2>
        <h2>Age : </h2>
      </div>
    </div>
  );
};
const Form = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    img: "",
    profile: "",
    age: "",
    department: "",
  });
  const submit = (e) => {
    e.preventDefault();
    setEmployees([employee]);
    if (employee.department === "Accounting") {
      const newEmployee = { id: 4, ...employee };
      const list = [...accounts, newEmployee];
      localStorage.setItem("account", JSON.stringify(list));
    } else if (employee.department === "Sales") {
      const newEmployee = { id: 5, ...employee };
      const list = [...sales, newEmployee];
      localStorage.setItem("sale", JSON.stringify(list));
    }
    setEmployee({ img: "", profile: "", age: "", department: "" });
    setLoading(false);
  };
  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };
  return (
    <div>
      <h1>Application Form</h1>
      <div className="form">
        <form action="submit" onSubmit={submit}>
          <b>Name : </b>
          <br />
          <input
            type="text"
            name="profile"
            placeholder="Enter your name"
            value={employee.profile}
            onChange={change}
          />
          <br /> <br />
          <b>Department : </b>
          <br />
          <input
            type="text"
            name="department"
            placeholder="Enter your department"
            value={employee.department}
            onChange={change}
          />
          <br /> <br />
          <b>Image : </b>
          <br />
          <input
            type="text"
            name="img"
            placeholder="Paste Linkedin image url"
            value={employee.img}
            onChange={change}
          />
          <br /> <br />
          <b>Age : </b>
          <br />
          <input
            type="text"
            name="age"
            placeholder="Enter your age"
            value={employee.age}
            onChange={change}
          />
          <br />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        {loading && <Card />}
        {employees.map((employee) => {
          const { profile, age, department, img } = employee;
          return (
            <div className="id">
              <div className="hole"></div>
              <div className="id-logo">
                <img
                  src="https://cdn.wallpapersafari.com/43/67/4wRJDG.jpg"
                  alt=""
                />
              </div>
              <img src={img} alt="" />
              <div className="details">
                <h2>Name : {profile}</h2>
                <h2>Departments : {department}</h2>
                <h2> Age : {age}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
