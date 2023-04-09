import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = () => {
      axios
        .get("http://localhost:8070/student/get")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => alert(err.message));
    };
    getStudents();
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All students</h1>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          {students.map((item) => (
            <tbody>
              <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
