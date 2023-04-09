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
  }, []);

  const update = (event) => {
    const catchID = event.currentTarget.id;
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All students</h1>
      <div className="container">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          {students.map((item, count = 0) => (
            <tbody>
              <tr>
                <td style={{ color: "red" }}>{count + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    id={item._id}
                    onClick={update}
                  >
                    Update
                  </button>{" "}
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
