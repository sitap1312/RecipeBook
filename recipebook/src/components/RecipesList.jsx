import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecipesList.css';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%203`;


function Recipes() {
  const [recipesList, setRecipesList] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(URL,
      { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } }
    )
    console.log(res.data.records);
    setRecipesList(res.data.records);
  }
  console.log(recipesList);

  return (
    <div className="Recipes">
      <Link to="/recipeslist" style={{ textDecoration: 'none' }} >
        <h1>Recipes List</h1>
      </Link>
      <div className="recipe-container">
        {recipesList.map((recipeList) => {
          return (
            <Link to={`/recipeslist/${recipeList.id}`} key={recipeList.id} style={{ textDecoration: 'none' }}>
              <img src={recipeList.fields.image} />
              <h3>{recipeList.fields.name}</h3>
            </Link>
            )
        })}
      </div>
    </div>
  )
};

export default Recipes;
