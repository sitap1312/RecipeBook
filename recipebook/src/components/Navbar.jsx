import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="links">
      <div className="header">
        <Link to="/">
          <img src="./assets/Recipelogo.png" />
          <h1>RecipeBook</h1>
        </Link>
      </div>
      <div className="nav">
        
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <button>HOME</button>
        </Link>

        <br />
        
        <Link to="/recipeslist" style={{ textDecoration: 'none', color: 'black' }}>
          <button>RECIPES</button>
        </Link>
        
        <br />
        
        <Link to="/addrecipe" style={{ textDecoration: 'none', color: 'black' }}>
          <button>ADD RECIPE</button>
        </Link>
        
        <br />

        
        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
          <button>CONTACT</button>
        </Link>
        
      </div>
    </div>
  )
};

export default Navbar;