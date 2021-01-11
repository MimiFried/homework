import './RecipeDetails.css';
import React, { useState, useEffect } from 'react';
import BulletLessList from './BulletLessList';
import { withRouter, Link, useParams } from 'react-router-dom';

const RecipeDetails= () => {
  const [imageShowing, setImageShowing] = useState(true);
  const [recipe, setRecipe] = useState();
  let { recipeId } = useParams();

 /* componentDidMount() {
    this.loadRecipe();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.recipeId !== this.props.match.params.recipeId) {
      this.loadRecipe();
    }
  }*/
useEffect( () => {
  (async () => {
   // const { match: { params: { recipeId } } } = this.props;
    try {
      const response = await fetch(`/data/${recipeId}.json`);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const recipe = await response.json();
     setRecipe(recipe);
    } catch (err) {
      console.error(err);
    }
  })();
}, [recipeId]);


const  togglePicture = () => {
    setImageShowing(imageShowing);
  };

 const getPictureElem = (picture, name) => {
    if (imageShowing) {
      return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
    }
    return null;
  }


    if (!recipe) {
      return null;
    }

    const { name, ingredients, directions, picture } = recipe;

    const text = imageShowing ? 'hide' : 'show';
  
    return (
      <div>
        <h2>{name}</h2>
        {getPictureElem(picture, name)}
        <br />
        <button onClick={togglePicture}>
          {text} picture
        </button>
        <h3>ingredients</h3>
        <BulletLessList list={ingredients} />
        <h3>directions</h3>
        <BulletLessList list={directions} />

        <Link to='/recipe/1'>Recipe 1</Link>
      </div>
    )
  }

export default RecipeDetails;
