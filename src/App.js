import React, {useEffect, useState} from 'react'; 
import './App.css';
import Recipe from './Recipe';

const App = () => {

const APP_ID = "78eeea4e";
const APP_KEY = "586ce1074101e88ea5e9d02ccce964da	";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');

useEffect(() => {
   getRecipes();
}, [query]);


const getRecipes = async () => {
    const reponse = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await reponse.json();
    setRecipes(data.hits);
    console.log(data.hits);
};



const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text"
               value={search} onChange={updateSearch}></input>
              <button className="search-button" type="submit" >
                  procurar
              </button>
            </form>


                {recipes.map( recipe=> (
                  <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label} 
                   calories = {recipe.recipe.calories}
                   image = {recipe.recipe.image}
                   ingredients={recipe.recipe.ingredients}
                  />
                ))}
        </div>
      );
};

export default App;
