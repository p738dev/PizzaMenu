import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
      <h4>Close</h4>
    </footer>
  );
};

export default Footer;
