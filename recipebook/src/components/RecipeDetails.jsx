import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%203`;

function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.get(recipeURL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    setRecipe(resp.data)
  };

  const handleDelete = async () => {
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.delete(recipeURL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    console.log(resp);
    history.push("/recipeslist");
  }

  return (
    <div>
      <div>
        <p><bold>Total Preparation Time:</bold> {recipe.fields?.totalTime}seconds</p>
        <p><bold>Created By:</bold> {recipe.fields?.createdBy}</p>
      </div>
      <div>
        <img src={recipe.fields?.image} alt={recipe.fields?.name} />
        <h2>{recipe.fields?.name}</h2>
        <h4>INGREDIENTS: {recipe.fields?.ingredients}</h4>
        <h5>INSTRUCTIONS: {recipe.fields?.instructions}</h5>
        <p><bold>CALORIES:</bold> {recipe.fields?.calories}</p>
        <p><bold>Created Time:</bold> {recipe.fields?.createdTime}</p>
      </div>
      <div>
        <p><bold>Modified By:</bold> {recipe.fields?.modifiedBy}</p>
        <p><bold>Modified Time:</bold> {recipe.fields?.modifiedTime}</p>
      </div>
      <div>
        <button onClick={handleDelete}>DELETE RECIPE</button>
      </div>
      
    </div>
    
  )
};

export default RecipeDetails;
