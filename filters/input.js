const searchInput = document.getElementById('search-input');
let searchText;

function getFilteredRecipesByName(recipes, searchText) {
  // Filtrage des recettes en fonction du texte de recherche
  filteredRecipes = recipes.filter(recipe => {
    searchText = searchText.toLowerCase().trim();
    const recipeName = recipe.name.toLowerCase().trim();
    const recipeDescription = recipe.description.toLowerCase().trim();

    // Vérification du nom de la recette ou de la description
    if (recipeName.includes(searchText) || recipeDescription.includes(searchText)) {
      return true; // Correspondance trouvée, conserver la recette
    }

    // Recherche des ingrédients
    const hasMatchingIngredient = recipe.ingredients.some(ingredient =>
      ingredient.ingredient.toLowerCase().trim().includes(searchText)
    );

    return hasMatchingIngredient; // Renvoyer true si une correspondance d'ingrédient est trouvée, sinon false
  });
}
