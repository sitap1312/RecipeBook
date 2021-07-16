import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%203`;

function EditRecipe() {
  const [editRecipe, setEditRecipe] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchRecipe()
  }, []);

  const fetchRecipe = async () => {
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.get(recipeURL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    setEditRecipe(resp.data.fields)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditRecipe((prevRecipe) => ({
      ...prevRecipe, [name]: value,
    }))
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.put(recipeURL,
      { fields: editRecipe },
      { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } });
    console.log(resp);
    history.push(`/recipeslist/${id}`);
  }


  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label>Name: </label>
        <input name="name" value={editRecipe.name} onChange={handleChange}></input>
        <br />
        <br />

        <label>Ingredients: </label>
        <input type="text" name="ingredients" value={editRecipe.ingredients} onChange={handleChange}></input>
        <br />
        <br />

        <label>Instructions: </label>
        <input type="text" name="instructions" value={editRecipe.instructions} onChange={handleChange}></input>
        <br />
        <br />

        <label>Calories: </label>
        <input type="number" name="calories" value={editRecipe.calories} onChange={handleChange}></input>
        <br />
        <br />

        <label>Total Time(in Sec): </label>
        <input type="duration" name="totalTime" value={editRecipe.totalTime} onChange={handleChange}></input>
        <br />
        <br />

        <label>Modified By: </label>
        <input type="text" name="modifiedBy" value={editRecipe.modifiedBy} onChange={handleChange}></input>
        <br />
        <br />

        <label>Image: </label>
        <input type="url" name="image" value={editRecipe.image} onChange={handleChange}></input>
        <br />
        <br />
        <br />

        <label>video: </label>
        <input type="url" name="video" value={editRecipe.video} onChange={handleChange}></input>
        <br />
        <br />
        <br />

        <button>UPDATE RECIPE</button>

      </form>
    </div>
  )
};

export default EditRecipe;
