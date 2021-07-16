import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%203`;

function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [calories, setCalories] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  // const [createdTime, setCreatedTime] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      ingredients,
      instructions,
      calories,
      totalTime,
      createdBy,
      // createdTime,
      image,
      video,
    }

    const resp = await axios.post(URL,
      { fields },
      { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } });
    console.log(resp);
    history.push(`/recipeslist/${resp.data.id}`);

  };


  return (
    <div>
      <div>
        <h1>Add New Recipe</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <br />
        <br />

        <label>Ingredients: </label>
        <input type="text" rows="10" cols="7" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></input>
        <br />
        <br />

        <label>Instructions: </label>
        <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)}></input>
        <br />
        <br />

        <label>Calories</label>
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.valueAsNumber)}></input>
        <br />
        <br />

        <label>Total Cook Time</label>
        <input type="datetime" value={totalTime} onChange={(e) => setTotalTime(e.target.value)}></input>
        <br />
        <br />

        <label>Created By: </label>
        <input type="text" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)}></input>
        <br />
        <br />

        {/* <label>Created Time: </label>
        <input type="datetime" value={createdTime} onChange={(e) => setCreatedTime(e.target.value)}></input>
        <br />
        <br /> */}

        <label>Image URL: </label>
        <input type="url" value={image} onChange={(e) => setImage(e.target.value)}></input>
        <br />
        <br />

        <label>Video: </label>
        <input type="url" value={video} onChange={(e) => setVideo(e.target.value)}></input>
        <br />
        <br />

        <div>
          <button type="submit">ADD RECIPE</button>
        </div>
      </form>
    </div>
  )
};

export default AddRecipe;
