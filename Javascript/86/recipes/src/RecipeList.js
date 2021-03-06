import React from 'react'
import PropTypes from 'prop-types';

export default function RecipeList(props) {
  return (
    <ul className="bulletlessList">
      {props.recipes.map(r => (
        <li key={r.id} onClick={
          () => props.handleRecipeSelected(r)
        }>
          {r.title}
        </li>))}
    </ul >
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  handleRecipeSelected: PropTypes.func.isRequired
}