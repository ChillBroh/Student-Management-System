import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const sentData = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:8070/student/add", newStudent)
          .then(() => {
            Swal.fire("Student has been successfully Saved!", "", "success");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Details are not saved", "", "error");
      }
    });
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            Student Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter Your Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="gender">Select Your Gender</label>
          <br />
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
          </div>
        </div>
        <br />
        <div class="col-12">
          <button class="btn btn-primary" type="submit" onClick={sentData}>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
