// Récupération des éléments du DOM
const appliancesInput = document.getElementById('appliances-dropdown-input');
const appliancesDatalist = document.getElementById('appliances-dropdown-datalist');
const appliancesContainer = document.getElementById('appliances-dropdown-container');
const appliancesFilterDOM = document.getElementById('filters-zone-appliances');

// Variables
let applianceInputValue;
let appliancesArrayList = [];
let appliancesArrayListFiltered = [];
let appliancesObjectList = {};
let appliancesFilterArrayList = [];
let appliancesFilterArrayCard = [];

// Fonction pour créer les options de sélection pour les appareils
function applianceOption(filteredRecipes) {
  // Réinitialisation de la liste des options
  appliancesDatalist.innerHTML = "";
  appliancesArrayList = [];

  // Parcours des recettes filtrées pour récupérer les appareils uniques
  filteredRecipes.forEach((recipe) => {
    const applianceLowerCase = recipe.appliance.toLowerCase().trim();
    appliancesArrayList.push(applianceLowerCase);
  });

  // Suppression des doublons dans la liste des appareils
  appliancesArrayList = [...new Set(appliancesArrayList)];

  // Création des options de sélection pour chaque appareil
  appliancesArrayList.forEach((appliance) => {
    applianceOptionFactory(appliance);
    appliancesObjectList[appliance] = [];

    // Filtrage des recettes pour chaque appareil et création de la liste des recettes correspondantes
    recipes.forEach((recipe) => {
      const recipeApplianceLowerCase = recipe.appliance.toLowerCase();
      if (recipeApplianceLowerCase === appliance) {
        appliancesObjectList[appliance].push(recipe.id);
      }
    });
  });
}

// Appel initial de la fonction avec les recettes filtrées
applianceOption(filteredRecipes);

// Fonction pour créer une option de sélection pour un appareil
function applianceOptionFactory(valueOption) {
  const applianceFilterOptions = document.createElement('li');
  applianceFilterOptions.textContent = valueOption;
  applianceFilterOptions.classList.add('appliances-dropdown-datalist-option');
  appliancesDatalist.appendChild(applianceFilterOptions);

  // Écouteur d'événement pour mettre à jour la valeur de l'input et créer le filtre d'appareil correspondant
  applianceFilterOptions.addEventListener('click', function() {
    appliancesInput.value = applianceFilterOptions.textContent;
    createApplianceFilterDOM(appliancesInput.value);
    appliancesDropdownContent.style.display = "none";
    appliancesToggle.style.display = "flex";
    appliancesDropdownContent.classList.remove("openDropdown");
    GLOBALSearch();
  });
}

// Fonction pour créer le filtre d'appareil en fonction de la valeur de l'input
function createApplianceFilter() {
  appliancesInput.addEventListener('input', () => {
    appliancesDatalist.textContent = '';
    applianceInputValue = appliancesInput.value.trim().toLowerCase();
    
    // Filtrage des appareils en fonction de la valeur de l'input
    appliancesArrayListFiltered = appliancesArrayList.filter(appliance => appliance.includes(applianceInputValue));
    
    // Création des options de sélection pour les appareils filtrés
    appliancesArrayListFiltered.forEach(appliances => {
      applianceOptionFactory(appliances);
    });
  })
}

// Fonction pour supprimer un filtre d'appareil
function deleteApplianceFilterDOM(appliancesFilterCard) {
  appliancesFilterCard.addEventListener('click', () => {
    appliancesFilterCard.remove();
    GLOBALSearch();
  });
}

// Fonction pour créer le filtre d'appareil dans le DOM
function createApplianceFilterDOM(appliancesFilter) {
  const appliancesFilterCard = document.createElement('div');
  const appliancesFilterName = document.createElement('p');
  const appliancesFilterCross = document.createElement('i');

  appliancesFilterName.textContent = appliancesFilter;
  appliancesFilterCard.classList.add('appliancesFilter');
  appliancesFilterCard.classList.add('far', 'fa-times-circle');

  appliancesFilterCard.appendChild(appliancesFilterName);
  appliancesFilterCard.appendChild(appliancesFilterCross);
  appliancesFilterDOM.appendChild(appliancesFilterCard);
  deleteApplianceFilterDOM(appliancesFilterCard, appliancesFilterArrayList);
}

// Appel de la fonction pour créer le filtre d'appareil
createApplianceFilter();

// Fonction pour filtrer les recettes en fonction des filtres d'appareil sélectionnés
function getFilteredRecipesByAppliance(searchText) {
  appliancesFilterClassARR.forEach(applianceFilter => {
    // Filtrage des recettes en fonction du texte de l'option de filtre d'appareil
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.appliance.toLowerCase() === applianceFilter.textContent.toLowerCase()
    );
    if (filteredRecipes.length == 0) {
      displayErrorInput(searchText);
    }
  });
  applianceOption(filteredRecipes);
}