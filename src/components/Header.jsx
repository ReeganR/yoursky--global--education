import React from "react";

export function Header() {
  return (
    <div>
      <section id="top-section">
        <div className="input-box">
          <input placeholder="Search..." />
          <div>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="action-icons">
          <div className="action-icon-one"></div>
          <div className="action-icon-two"></div>
        </div>
      </section>
    </div>
  );
}
