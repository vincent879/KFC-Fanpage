import React, { useState } from 'react';
import './App.css';
import KFC from './Kfc.jsx';

const App = () => {
  const [active, setActive] = useState(0);
  const navItems = ['Menu', 'News and Rewards', 'History'];


  return (
    <div className="logo">
      <header className="p-12">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-VpBYTXH6N53AkgQTFXuOLdq3XtaXadMUA&s"
          alt="KFC Logo"
          className="left-4 top-1/2 -translate-y-1/2"
          width="300"
        />
        <nav className="ml-[320px]">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer"
              >
                <a
                  href="https://www.kfc.com/menu"
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <KFC />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About KFC</h3>
            <p>KFC is a company focused on delivering the best fast food experience with the best menu options!</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">Menu</a></li>
              <li><a href="#news">News and History</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p>&copy; 2024 KFC Fan Page.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;


