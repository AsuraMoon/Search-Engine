// Déclaration des variables pour la zone d'ingrédients
const ingredientsInput = document.getElementById('ingredients-dropdown-input');
const ingredientsDatalist = document.getElementById('ingredients-dropdown-datalist');
const ingredientsFilterDOM = document.getElementById('filters-zone-ingredients');

let ingredientsInputValue;
let ingredientsArrayList = [];
let ingredientsArrayListFiltered = [];
let ingredientsObjectList = {};
let ingredientsFilterArrayList = [];
let ingredientsFilterArrayCard = [];

// Fonction pour créer les options d'ingrédients dans la liste déroulante
function ingredientOption(filteredRecipes) {
  ingredientsDatalist.innerHTML = "";
  ingredientsArrayList = [];

  filteredRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const ingredientLowerCase = ingredient.ingredient.toLowerCase();
      ingredientsArrayList.push(ingredientLowerCase);
    });
  });

  ingredientsArrayList = [...new Set(ingredientsArrayList)];

  ingredientsArrayList.forEach((ingredient) => {
    ingredientOptionFactory(ingredient);
    ingredientsObjectList[ingredient] = [];

    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((recipeIngredient) => {
        const recipeIngredientLowerCase = recipeIngredient.ingredient.toLowerCase();
        if (recipeIngredientLowerCase === ingredient) {
          ingredientsObjectList[ingredient].push(recipe.id);
        }
      });
    });
  });
}

// Fonction pour créer une option d'ingrédient dans la liste déroulante
function ingredientOptionFactory(valueOption) {
  const ingredientsFilterOptions = document.createElement('li');
  ingredientsFilterOptions.textContent = valueOption;
  ingredientsFilterOptions.classList.add('ingredients-dropdown-datalist-option');
  ingredientsDatalist.appendChild(ingredientsFilterOptions);

  ingredientsFilterOptions.addEventListener('click', function() {
    ingredientsInput.value = ingredientsFilterOptions.textContent;
    createIngredientFilterDOM(ingredientsInput.value);
    ingredientsDropdownContent.style.display = "none";
    ingredientsToggle.style.display = "flex";
    ingredientsDropdownContent.classList.remove("openDropdown");
    GLOBALSearch();
  });
}

// Fonction pour créer le filtre d'ingrédients à partir de la valeur de l'entrée
function createIngredientFilter() {
  ingredientsInput.addEventListener('input', () => {
    ingredientsDatalist.textContent = '';
    ingredientsInputValue = ingredientsInput.value.trim().toLowerCase();
    ingredientsArrayListFiltered = ingredientsArrayList.filter(ingredient => ingredient.includes(ingredientsInputValue));
    ingredientsArrayListFiltered.forEach(ingredients => {      
      ingredientOptionFactory(ingredients);
    });
  });
}

// Fonction pour supprimer le filtre d'ingrédients
function deleteIngredientFilterDOM(ingredientsFilterDOM) {
  ingredientsFilterDOM.addEventListener('click', () => {
    ingredientsFilterDOM.remove();
    GLOBALSearch();
  });
}

// Fonction pour créer le filtre d'ingrédients dans le DOM
function createIngredientFilterDOM(ingredientFilter) {
  const ingredientFilterCard = document.createElement('div');
  const ingredientFilterName = document.createElement('p');
  const ingredientFilterCross = document.createElement('i');

  ingredientFilterName.textContent = ingredientFilter;
  ingredientFilterCard.classList.add('ingredientFilter');
  ingredientFilterCross.classList.add('far', 'fa-times-circle');

  ingredientFilterCard.appendChild(ingredientFilterName);
  ingredientFilterCard.appendChild(ingredientFilterCross);
  ingredientsFilterDOM.appendChild(ingredientFilterCard);
  deleteIngredientFilterDOM(ingredientFilterCard, ingredientsFilterArrayList);
}

// Fonction pour filtrer les recettes par ingrédient
function getFilteredRecipesByIngredient(searchText) {
  ingredientsFilterClassARR.forEach(ingredientFilter => {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.ingredients.some(recipeIngredient =>
        recipeIngredient.ingredient.toLowerCase() === ingredientFilter.textContent.toLowerCase()
      )
    );
    if (filteredRecipes.length == 0) {
      displayErrorInput(searchText);
    }
  });
  ingredientOption(filteredRecipes);
}

// Appels aux fonctions pour initialiser les fonctionnalités
ingredientOption(filteredRecipes);
createIngredientFilter();
