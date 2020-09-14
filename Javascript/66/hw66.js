(function () {
    'use strict';

    $('input').change(() => {
        var val = $("input[name='recipe']:checked").attr('id');
        console.log(val);
        fetch(`${val}.json`)
            .then(r => r.json())
            .then(recipe => {
                console.log(recipe);
                recipe.forEach(DisplayRecipe);
            })
            .catch(error => console.log(error));
    });

    function DisplayRecipe(recipe) {
        /* let rec = $(`<div class="recipes">
         <h2 id="recName">${recipe.name}</h2>
         <img src="${recipe.picture}">
         <p id="ingredients">${recipe.ingredients}</p>
         </div>`)
      .appendTo(document.body);*/
        $('#recName').html(`${recipe.name}`);
        $('img').attr('src', `${recipe.picture}`);
        $('#ingredients').html(`<p>${recipe.ingredients}</p><br>`);
    }
}());