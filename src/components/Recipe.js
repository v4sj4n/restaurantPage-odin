function Recipe(title, description, imageSrc) {
  const recipeContainer = document.createElement("div")
  recipeContainer.classList.add("recipe")

  const recipeImage = new Image()
  const recipeTitle = document.createElement("h2")
  const recipeDesc = document.createElement("p")

  recipeImage.src = imageSrc
  recipeTitle.textContent = title
  recipeDesc.textContent = description

  recipeContainer.appendChild(recipeImage)
  recipeContainer.appendChild(recipeTitle)
  recipeContainer.appendChild(recipeDesc)

  return recipeContainer
}

export default Recipe
