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
          <p>{this.props.recipe.directions}</p>)}
        </div>
    </div>
  )
}
}