import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HeaderLeft = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/gaming">Gaming</Link></li>
        <li><Link to="/saved-videos">Saved Videos</Link></li>
      </ul>
    </nav>
  </aside>
);

export default HeaderLeft;
