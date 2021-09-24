import React from "react";

export function PrimarySearchBar() {
  return (
    <div className="primary-searchbar">
      <form action="">
        <div className="primary-searchbar-contents">
          <div className="input-box">
            <input placeholder="Search for a course..." />
            <div>
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div class="box">
            <select>
              <option>Education Level</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="box">
            <select>
              <option>University</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="box">
            <select>
              <option>Location</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="box">
            <button className="primary-search-btn">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
