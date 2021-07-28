import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import formatDate from '../services';
import LikeButton from './LikeButton';
import './RecipeDetails.css';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%203`;

function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {

    // const fetchRecipe = async () => {
    //   const recipeURL = `${URL}/${id}`;
    //   const resp = await axios.get(recipeURL,
    //     {
    //       headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
    //     });
    //   setRecipe(resp.data)
    //   if (resp.data.fields.comments) {
    //     setComments(JSON.parse(resp.data.fields.comments))
    //   }
    // };

    fetchRecipe();
    // eslint-disable-next-line
  }, [id]);

  const fetchRecipe = async () => {
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.get(recipeURL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    setRecipe(resp.data)
    if (resp.data.fields.comments) {
      setComments(JSON.parse(resp.data.fields.comments))
    }
  };


  const handleDelete = async () => {
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.delete(recipeURL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    console.log(resp);
    history.push("/recipeslist");
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const recipeURL = `${URL}/${id}`;

    let submitComments = [...comments, input]
    let strComments = JSON.stringify(submitComments);
    const resp = await axios.patch(recipeURL, { fields: { comments: strComments } },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    console.log(resp);
    
    setComments([]);
    setInput("");
    fetchRecipe();
  };

  // const formatDate = (string) => {
  //   let options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return new Date(string).toLocaleDateString([], options);
  // };

  return (
    <div>

      <section className="rd-main-details">

        <br />
        <br />
        
        <div className="rd-pt-cb">
          <h5>Total Preparation Time: {recipe.fields?.totalTime} (h:mm)</h5>
          <h5 style={{color: "darkred", fontSize: "medium", textDecoration: "underline"}}>CALORIES: {recipe.fields?.calories}</h5>
          <h5>Created By: {recipe.fields?.createdBy}</h5>
        </div>

        <br />
        <br />

        <img src={recipe.fields?.image} alt={recipe.fields?.name} />

        <div className="rd-cont">
          <h1>{recipe.fields?.name}</h1>
          <br />
          <br />
          <h4>INGREDIENTS: <br /><br /> {recipe.fields?.ingredients}</h4>
          <br />
          <br />
          <p>INSTRUCTIONS: <br /><br /> {recipe.fields?.instructions}</p>
        </div>

        <br />
        <br />

        <div className="rd-mod">
          <h5>Created Date: {formatDate(recipe.createdTime)}</h5>
          <h5>Modified By: {recipe.fields?.modifiedBy}</h5>
          <h5>Modified date: {recipe.fields?.modifiedDate}</h5>
        </div>
        <br />
      </section>

      <br />

      <section className="rd-like">
        <div>
          <LikeButton style={{cursor: "pointer"}}/>
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

      <br />
      <br />

      <section className="comments-section">

        {comments.map(comment => {
          return (
            <div className="rd-display-comment">
              <ul>
                <li>
                  {comment}
                </li>
              </ul>
            </div>
          )
        })}

        <br />
        <br />
        <br />
        
        <div className="rd-comment-form">
          <form onSubmit={handleCommentSubmit}>
            <label style={{ color: "darkred"}}><h4>Comments:</h4> </label>&nbsp; &nbsp; <br />
            <textarea cols="75" rows="4" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="comment here..." />
            
            <br />
            <br />

            <div className="rd-comment-btns">
              <button>SUBMIT</button>
            </div>
          </form>
        </div>

      </section>

      <br />
      <br />
      
    </div>
    
  )
};

export default RecipeDetails;
