const ustensilsInput = document.getElementById('ustensils-dropdown-input');
const ustensilsDatalist = document.getElementById('ustensils-dropdown-datalist');
const ustensilsFilterDOM = document.getElementById('filters-zone-ustensils');

let ustensilsInputValue;
let ustensilsArrayList = [];
let ustensilsArrayListFiltered = [];
let ustensilsObjectList = {};
let ustensilsFilterArrayList = [];
let ustensilsFilterArrayCard = [];

function ustensilOption(filteredRecipes) {
  ustensilsDatalist.innerHTML = "";
  ustensilsArrayList = [];

  filteredRecipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      const ustensilLowerCase = ustensil.toLowerCase();
      ustensilsArrayList.push(ustensilLowerCase);
    });
  });

  ustensilsArrayList = [...new Set(ustensilsArrayList)];

  ustensilsArrayList.forEach((ustensil) => {
    ustensilOptionFactory(ustensil);
    ustensilsObjectList[ustensil] = [];

    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((recipeUstensil) => {
        const recipeUstensilLowerCase = recipeUstensil.toLowerCase();
        if (recipeUstensilLowerCase === ustensil) {
          ustensilsObjectList[ustensil].push(recipe.id);
        }
      });
    });
  });
}

function ustensilOptionFactory(valueOption) {
  const ustensilsFilterOptions = document.createElement('li');
  ustensilsFilterOptions.textContent = valueOption;
  ustensilsFilterOptions.classList.add('ustensils-dropdown-datalist-option');
  ustensilsDatalist.appendChild(ustensilsFilterOptions);

  ustensilsFilterOptions.addEventListener('click', () => {
    ustensilsInput.value = ustensilsFilterOptions.textContent;
    createUstensilFilterDOM(ustensilsInput.value);
    ustensilsDropdownContent.style.display = "none";
    ustensilsToggle.style.display = "flex";
    ustensilsDropdownContent.classList.remove("openDropdown");
    GLOBALSearch();
  });
}

function createUstensilFilter() {
  ustensilsInput.addEventListener('input', () => {
    ustensilsDatalist.textContent = '';
    ustensilsInputValue = ustensilsInput.value.trim().toLowerCase();
    ustensilsArrayListFiltered = ustensilsArrayList.filter(ustensil => ustensil.includes(ustensilsInputValue));
    ustensilsArrayListFiltered.forEach((ustensils) => {      
      ustensilOptionFactory(ustensils);
    });
  });
}

function deleteUstensilFilterDOM(ustensilsFilterDOM) {
  ustensilsFilterDOM.addEventListener('click', () => {
    ustensilsFilterDOM.remove();
    GLOBALSearch();
  });
}

function createUstensilFilterDOM(ustensilFilter) {
  const ustensilFilterCard = document.createElement('div');
  const ustensilFilterName = document.createElement('p');
  const ustensilFilterCross = document.createElement('i');

  ustensilFilterName.textContent = ustensilFilter;
  ustensilFilterCard.classList.add('ustensilFilter');
  ustensilFilterCross.classList.add('far', 'fa-times-circle');

  ustensilFilterCard.appendChild(ustensilFilterName);
  ustensilFilterCard.appendChild(ustensilFilterCross);
  ustensilsFilterDOM.appendChild(ustensilFilterCard);
  deleteUstensilFilterDOM(ustensilFilterCard, ustensilsFilterArrayList);
}

function getFilteredRecipesByUstensil(searchText) {
  ustensilsFilterClassARR.forEach((ustensilFilter) => {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.ustensils.some((recipeUstensil) =>
        recipeUstensil.toLowerCase() === ustensilFilter.textContent.toLowerCase()
      )
    );

    if (filteredRecipes.length === 0) {
      displayErrorInput(searchText);
    }
  });

  ustensilOption(filteredRecipes);
}

ustensilOption(filteredRecipes);
createUstensilFilter();
