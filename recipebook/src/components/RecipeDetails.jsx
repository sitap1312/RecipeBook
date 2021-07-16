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
      {/* <div className="rd-pt-cb">
        <p><bold>Total Preparation Time:</bold> {recipe.fields?.totalTime} (h:mm)</p>
        <p><bold>Created By:</bold> {recipe.fields?.createdBy}</p>
      </div> */}

      <section className="rd-main-details">
        <div className="rd-pt-cb">
          <h5>Total Preparation Time: {recipe.fields?.totalTime} (h:mm)</h5>
          <h5>Created By: {recipe.fields?.createdBy}</h5>
        </div>

        <img src={recipe.fields?.image} alt={recipe.fields?.name} />

        <div className="rd-cont">
          <h5 style={{color: "darkred", fontSize: "medium"}}>CALORIES: {recipe.fields?.calories}</h5>
          <h1>{recipe.fields?.name}</h1>
          <ul></ul>
          <h4>INGREDIENTS:
            <ul>
              {recipe.fields?.ingredients}
            </ul>
          </h4>
          <p>INSTRUCTIONS:
            <ul>{recipe.fields?.instructions}</ul>
          </p>
          {/* <h5>Created Time: {formatDate(recipe.createdTime)}</h5> */}
        </div>

        <div className="rd-mod">
          <h5>Created Date: {formatDate(recipe.createdTime)}</h5>
          <h5>Modified By: {recipe.fields?.modifiedBy}</h5>
          <h5>Modified date: {recipe.fields?.modifiedDate}</h5>
        </div>
      </section>

      <br />

      <section className="rd-like">
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
