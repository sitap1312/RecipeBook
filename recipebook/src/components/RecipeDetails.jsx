import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import formatDate from '../services';
import LikeButton from './LikeButton';
import './RecipeDetails.css';

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

  // const formatDate = (string) => {
  //   let options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return new Date(string).toLocaleDateString([], options);
  // };

  return (
    <div>
      <div className="rd-pt-cb">
        <p><bold>Total Preparation Time:</bold> {recipe.fields?.totalTime} (h:mm)</p>
        <p><bold>Created By:</bold> {recipe.fields?.createdBy}</p>
      </div>

      <section className="rd-main-details">
        <div>
          <img src={recipe.fields?.image} alt={recipe.fields?.name} />
          <h1>{recipe.fields?.name}</h1>
          <ul></ul>
          <h4>INGREDIENTS:
            <ul>
              {recipe.fields?.ingredients}
            </ul>
          </h4>
          <h5>INSTRUCTIONS: {recipe.fields?.instructions}</h5>
          <p>CALORIES: {recipe.fields?.calories}</p>
          <p>Created Time: {formatDate(recipe.createdTime)}</p>
        </div>
        <div>
          <p><bold>Modified By:</bold> {recipe.fields?.modifiedBy}</p>
          <p><bold>Modified Time:</bold> {formatDate(recipe.modifiedTime)}</p>
        </div>
      </section>

      <br />

      <section className="rd-links">
        <div>
          <LikeButton />
        </div>
        <div className="rd-btns">
          <Link to={`/editrecipe/${id}`}>
            <button>EDIT RECIPE</button>
          </Link>
        </div>
        <div className="rd-btns">
          <button onClick={handleDelete}>DELETE RECIPE</button>
        </div>
      </section>
      
    </div>
    
  )
};

export default RecipeDetails;
