import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipe';
import AddRecipe from './components/AddRecipe';
import Footer from './components/Footer';
// import Likebutton from './components/Likebutton';

function App() {
  return (
    <body className="App">
      <header>
        <Navbar />
      </header>

      <div>
        <Route exact path="/">
          <div id="intro-bck-img"></div>
          <div className="intro-container">
            <h1 className="intro-txt-h1">AWESOME Recipes</h1>
            <h3 className="intro-txt-h3">TRY OUR TASTY AND HEALTHY VEGETARIAN RECIPES !</h3>
            <div className='intro-txt'>
              <p>
                Vegetarian cooking is not about taking the meat away and reducing the flavour!
                It can be absolutely amazing and we want to show you the best dishes.
                If you’re trying to broaden your diet and eat more veggies,
                or cooking for a friend who avoids meat, these recipes are too good to pass.
                All recipes are fast and easy to follow, and worth doing even if dining alone.
              </p>
            </div>
            
          </div>
        </Route>

        <Route exact path="/recipeslist">
          <RecipesList />
        </Route>

        <Route exact path="/recipeslist/:id">
          <RecipeDetails />
        </Route>

        <Route exact path="/editrecipe/:id">
          <EditRecipe />
        </Route>

        <Route exact path="/addrecipe">
          <AddRecipe />
        </Route>

        {/* <Route path="/likebutton">
          <Likebutton />
        </Route> */}

      </div>
      <div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
