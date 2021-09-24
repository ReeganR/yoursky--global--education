import React from "react";

export function NavSideBar() {
  return (
    <div>
      <section id="sidebar">
        <section className="title-container">
          {/* <img src="speedometer.svg" width="40px" alt="logo" /> */}
          <h1>YourSky</h1>
        </section>
        <section className="links-container">
          <div className="links">
            <div className="icon">
              <i className="fas fa-house-user"></i>
            </div>
            <span>Dashboard</span>
          </div>
          <div className="links">
            <div className="icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <span>Analytics</span>
          </div>
          <div className="links">
            <div className="icon">
              <i className="fas fa-comments"></i>
            </div>
            <span>Messages</span>
          </div>
          <div className="links">
            <div className="icon">
              <i className="fas fa-cog"></i>
            </div>
            <span>Settings</span>
          </div>
        </section>
      </section>
    </div>
  );
}
