const filtersZone = document.getElementById('filters-zone');
const recipesZone = document.getElementById('recipes-section');
let appliancesFilterClass = document.getElementsByClassName('appliancesFilter');
let appliancesFilterClassARR;
let ingredientsFilterClass = document.getElementsByClassName('ingredientFilter');
let ingredientsFilterClassARR;
let ustensilsFilterClass = document.getElementsByClassName('ustensilFilter');
let ustensilsFilterClassARR;

// Fonction de recherche globale
function GLOBALSearch() {
  filteredRecipes = recipes;
  searchText = searchInput.value.trim().toLowerCase();
  appliancesFilterClassARR = Array.from(appliancesFilterClass);
  ingredientsFilterClassARR = Array.from(ingredientsFilterClass);
  ustensilsFilterClassARR = Array.from(ustensilsFilterClass);

  if (searchText.length >= 3) {
    getFilteredRecipesByName(recipes, searchText);
    applianceOption(filteredRecipes);
    ingredientOption(filteredRecipes);
    ustensilOption(filteredRecipes);

    if (filteredRecipes.length == 0) {
      displayErrorInput(searchText);
    } else {
      if (appliancesFilterClassARR.length != 0) {
        getFilteredRecipesByAppliance(searchText);
        ingredientOption(filteredRecipes);
        ustensilOption(filteredRecipes);
        if (ingredientsFilterClassARR.length != 0) {
          getFilteredRecipesByIngredient(searchText);
          applianceOption(filteredRecipes);
          ustensilOption(filteredRecipes);
          if(ustensilsFilterClassARR != 0){
            getFilteredRecipesByUstensil(searchText);
            ingredientOption(filteredRecipes);
            applianceOption(filteredRecipes);
          }
        }
        else if (ustensilsFilterClassARR != 0){
          getFilteredRecipesByUstensil(searchText);
          ingredientOption(filteredRecipes);
          applianceOption(filteredRecipes);
        }
      } else if (ingredientsFilterClassARR.length != 0) {
        getFilteredRecipesByIngredient(searchText);
        applianceOption(filteredRecipes);
        ustensilOption(filteredRecipes);
        if(ustensilsFilterClassARR != 0){
          getFilteredRecipesByUstensil(searchText);
          ingredientOption(filteredRecipes);
          applianceOption(filteredRecipes);
        }
      }
      else if (ustensilsFilterClassARR != 0){
        getFilteredRecipesByUstensil(searchText);
        ingredientOption(filteredRecipes);
        applianceOption(filteredRecipes);
      }
      displayFilteredRecipes(filteredRecipes);
    }
  } 


  else {
    if(appliancesFilterClassARR.length != 0){
      getFilteredRecipesByAppliance(searchText);
      ingredientOption(filteredRecipes);
      ustensilOption(filteredRecipes);
      if (ingredientsFilterClassARR.length != 0) {
        getFilteredRecipesByIngredient(searchText);
        applianceOption(filteredRecipes);
        ustensilOption(filteredRecipes);
        if(ustensilsFilterClassARR != 0){
          getFilteredRecipesByUstensil(searchText);
          ingredientOption(filteredRecipes);
          applianceOption(filteredRecipes);
        }
      }
      else if (ustensilsFilterClassARR != 0){
        getFilteredRecipesByUstensil(searchText);
        ingredientOption(filteredRecipes);
        applianceOption(filteredRecipes);
      }
    }
    else if (ingredientsFilterClassARR.length != 0) {
      getFilteredRecipesByIngredient(searchText);
      applianceOption(filteredRecipes);
      ustensilOption(filteredRecipes);
      if(ustensilsFilterClassARR != 0){
        getFilteredRecipesByUstensil(searchText);
        ingredientOption(filteredRecipes);
        applianceOption(filteredRecipes);
      }
    }
    else{
      getFilteredRecipesByUstensil(searchText);
      ingredientOption(filteredRecipes);
      applianceOption(filteredRecipes);
    }
  displayFilteredRecipes(filteredRecipes);
  }
}

// Écoute de l'événement input sur l'input de recherche
searchInput.addEventListener('input', GLOBALSearch);

// Fonction pour afficher les recettes filtrées
function displayFilteredRecipes(filteredRecipes) {
  recipesZone.textContent = ''; // Efface les recettes précédentes

  // Affichage des recettes filtrées
  filteredRecipes.forEach(recipe => {
    recipeFactory(recipe);
  });
}

// Fonction pour afficher un message d'erreur pour une recherche invalide
function displayErrorInput(searchText) {
  recipesZone.textContent = '';
  recipesZone.innerHTML = `<p> Aucune recette ne contient '${searchText}'. Vous pouvez chercher 'tarte aux pommes' ou 'poisson'. </p>`;
}
