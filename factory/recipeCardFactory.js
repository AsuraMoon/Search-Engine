function recipeFactory(recipe){
    // Création des éléments HTML pour chaque recette
    const recipeContainers = document.createElement('div');
    const recipeImages = document.createElement('img');
    const recipeContent = document.createElement('div');
    const recipeTitle = document.createElement('h2');
    const timeRecipeDetails = document.createElement('i');
    const recipeDetails = document.createElement('p');
    const ingredientsList = document.createElement('ul');
    const recipeDescription = document.createElement('div');
    const recipeDescriptionText = document.createElement('p');
    let recipeID = recipe.id;
    if (recipeID<10){
        recipeID = '0'+recipeID
    }
    let recipePath = `pictures/Recette${recipeID}.jpg`;

    recipeContainers.classList.add('recipe-card');
    recipeContent.classList.add('recipe-content');
    recipeImages.classList.add('recipe-image');
    recipeDescription.classList.add('recipe-description');

    recipeTitle.textContent = recipe.name;
    recipeImages.setAttribute("src", recipePath);
    recipeImages.setAttribute("alt", recipe.name);

    recipeDetails.textContent = `${recipe.time} minutes`;
    timeRecipeDetails.classList.add('far', 'fa-clock');
    recipeDetails.appendChild(timeRecipeDetails)
    recipeDetails.classList.add('times');

    recipe.ingredients.forEach((ingredient, index) => {
        if (index < 4) {
            const ingredientItem = document.createElement('li');
            ingredientItem.textContent = `${ingredient.ingredient} ${ingredient.quantity ? ':' : ''} ${ingredient.quantity || ''} ${ingredient.unit || ''}`;
            ingredientsList.appendChild(ingredientItem);
        }
    });
    

    recipeDescriptionText.textContent = recipe.description;

    // Ajout des éléments à la carte de recette
    recipeContainers.appendChild(recipeImages);
    recipeContainers.appendChild(recipeContent);

    recipeDescription.appendChild(recipeDescriptionText);

    recipeContent.appendChild(recipeTitle);
    recipeContent.appendChild(recipeDetails);
    recipeContent.appendChild(ingredientsList);
    recipeContent.appendChild(recipeDescription);
    

    // Ajout de la carte de recette au conteneur principal
    recipesContainer.appendChild(recipeContainers);
}