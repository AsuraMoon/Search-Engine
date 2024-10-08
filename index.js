// Fonction pour afficher les éléments du le site
const ingredientsToggle = document.getElementById('ingredients-toggle');
const ingredientsDropdownContent = document.getElementById('ingredients-dropdown-content');
const ingredientsToggleClose = document.getElementById('ingredients-toggle-chevron-up');

const appliancesToggle = document.getElementById('appliances-toggle');
const appliancesDropdownContent = document.getElementById('appliances-dropdown-content');
const appliancesToggleClose = document.getElementById('appliances-toggle-chevron-up');

const ustensilsToggle = document.getElementById('ustensils-toggle');
const ustensilsDropdownContent = document.getElementById('ustensils-dropdown-content');const ustensilsToggleClose = document.getElementById('ustensils-toggle-chevron-up');

const recipesContainer = document.getElementById('recipes-section');

let filteredRecipes = recipes;

function displayRecipes(recipes) {
    recipesContainer.innerHTML="";      
    // Parcours des recettes
    recipes.forEach(recipe => {
        recipeFactory(recipe)
    });
}  

// Appel initial pour afficher toutes les recettes
displayRecipes(recipes);

ingredientsToggle.addEventListener('click', ()=>{
    ingredientsDropdownContent.style.display = "block";
    ingredientsToggle.style.display = "none";
    ingredientsDropdownContent.classList.add("openDropdown");
})
appliancesToggle.addEventListener('click', ()=>{
    appliancesDropdownContent.style.display = "block";
    appliancesToggle.style.display = "none";
    appliancesDropdownContent.classList.add("openDropdown");
})
ustensilsToggle.addEventListener('click', ()=>{
    ustensilsDropdownContent.style.display = "block";
    ustensilsToggle.style.display = "none";
    ustensilsDropdownContent.classList.add("openDropdown");
})

ingredientsToggleClose.addEventListener('click', ()=>{
    ingredientsDropdownContent.style.display = "none";
    ingredientsToggle.style.display = "flex";
    ingredientsDropdownContent.classList.remove("openDropdown");
})
appliancesToggleClose.addEventListener('click', ()=>{
    appliancesDropdownContent.style.display = "none";
    appliancesToggle.style.display = "flex";
    appliancesDropdownContent.classList.remove("openDropdown");
})
ustensilsToggleClose.addEventListener('click', ()=>{
    ustensilsDropdownContent.style.display = "none";
    ustensilsToggle.style.display = "flex";
    ustensilsDropdownContent.classList.remove("openDropdown");
})