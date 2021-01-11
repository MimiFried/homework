import React,{ Component } from 'react';

class AddRecipe extends Component {
    state = {
        name: '',
        ingredients: '',
        directions: ''
    };

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

render() {
    return(
        <form>
        <label>name:
            <input name="name" onChange={this.handleChange}/>
        </label>
        <label>Ingredients:
            <input name="ingredients" onChange={this.handleChange}/>
        </label>
        <label>Directions:
            <input name="directions" onChange={this.handleChange}/>
        </label>
        <button>add recipe</button>
        </form>
    )
}
}

export default AddRecipe;