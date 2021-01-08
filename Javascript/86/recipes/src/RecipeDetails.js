import React, {useState} from 'react';

const RecipeDetails = (selectedRecipe) => {
  const [recipe, setRecipe] = useState(selectedRecipe);

    return (
    <div>
      <h2>{recipe.recipe.title}</h2>
        <div><h3>Ingredients: </h3>
          {recipe.recipe.ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
        </div>
        <div><h3>Directions: </h3>
          <p>{recipe.recipe.directions}</p>
        </div>
    </div>
  )
};
export default RecipeDetails/*
import React, {Component} from 'react';

export default class RecipeDetails extends Component {
  render () {
    return (
    <div>
      <h2>{this.props.recipe.title}</h2>
        <div><h3>Ingredients: </h3>
          {this.props.recipe.ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
        </div>
        <div><h3>Directions: </h3>
          <p>{this.props.recipe.directions}</p>
        </div>
    </div>
    )
}
}*/