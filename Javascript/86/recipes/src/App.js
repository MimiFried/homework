import './App.css';
import React, {Component} from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        title: 'Pound Cake',
        ingredients: ['marg', 'sugar', 'egg','flour', 'baking powder'],
        directions: 'Beat marg and sugars, add eggs and rest of ingredients..'
      },
      {
        id: 2,
        title: 'Chocolate chip cookies',
        ingredients: ['marg', 'sugar', 'egg','flour', 'chocolate chips'],
        directions: 'Beat marg and sugars, add eggs and rest of ingredients..'
      }
    ]
  }
  handleRecipeSelected = recipe => {
    this.setState({ selectedRecipe: recipe })
    console.log('recipe selected', recipe);
    console.log('state', this.state);
  }

  render() {
    return (
      <div>
     <RecipeList recipes={this.state.recipes} handleRecipeSelected={this.handleRecipeSelected} />
      <hr/>
      <RecipeDetails recipe={this.state.selectedRecipe ? this.state.selectedRecipe: this.state.recipes[0]}/>
      </div>
    );
  }
}

export default App;
