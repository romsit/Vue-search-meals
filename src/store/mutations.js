export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
  }
  export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
  }
  export function setNealsByIngredient(state, meals) {
    state.mealsByIngredient = meals || []
  }