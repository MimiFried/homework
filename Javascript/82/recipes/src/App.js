import './App.css';
import React, {Component} from 'react';
import RecipeDetails from './RecipeDetails';

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
  render() {
    return (
      <div>
      {this.state.recipes.map(r => <h2 key={r.id}>{r.title}</h2>)}
      <hr/>
      <RecipeDetails recipe={this.state.recipes[0]}></RecipeDetails>
      </div>
    );
  }
}

export default App;
