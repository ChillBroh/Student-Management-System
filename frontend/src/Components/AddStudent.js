import React, { useState } from "react";

export default function AddStudent() {
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
          />
        </div>
        <div>
          <label for="gender">Select Your Gender</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
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
            />
            <label className="form-check-label" for="female">
              Female
            </label>
          </div>
        </div>
        <br />
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
