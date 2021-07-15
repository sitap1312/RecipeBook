import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <body className="App">
      <header>
        <Navbar />
      </header>

      <div>
        <Route exact path="/">
          <div className="intro">
            <h1>Lets Veggie Up Your Life..!</h1>
          </div>
        </Route>

        <Route exact path="/recipeslist">
          <RecipesList />
        </Route>

        <Route exact path="/recipeslist/:id">
          <RecipeDetails />
        </Route>
      </div>
    </body>
  );
}

export default App;
