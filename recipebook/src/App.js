import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipe';
import AddRecipe from './components/AddRecipe';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Likebutton from './components/Likebutton';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Route exact path="/">
        <div className="intro-container">
              
          <h1>AWESOME Recipes</h1>
          <h3>TRY OUR TASTY AND HEALTHY VEGETARIAN RECIPES !</h3>
              
          <div className='intro-txt'>
            <p>
              Vegetarian cooking is not about taking the meat away and reducing the flavour!
              It can be absolutely amazing and we want to show you the best dishes.
              If you’re trying to broaden your diet and eat more veggies,
              or cooking for a friend who avoids meat, these recipes are too good to pass.
              All recipes are fast and easy to follow, and worth doing even if dining alone.
            </p>
          </div>
              
          <div className="intro-link">
            <Link to={`/recipeslist/`} style={{ textDecoration: 'none' }}>
              <button>ALL RECIPES 👉🏻</button>
            </Link>
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

      <Route path="/contact">
        <Contact />
      </Route>
      
      <div>
        <Footer />
      </div>
    </div>
      
  );
}

export default App;
