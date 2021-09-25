import React from "react";

export function PrimarySearchBar() {
  return (
    <div className="primary-searchbar">
      <form action="">
        <div className="primary-searchbar-contents">
          <div className="input-box">
            <input placeholder="Find a Course here..." />
            <div class="box">
              <button className="primary-search-btn">Search</button>
            </div>
            <div>{/* <i className="fas fa-search"></i> */}</div>
          </div>
          <div class="box">
            <select>
              <option>Course Type</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="box">
            <select>
              <option>Intake</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="box">
            <select>
              <option>Country</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="box">
            <button className="secondary-search-btn">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
