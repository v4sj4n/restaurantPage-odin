import Recipe from "./Recipe"
import { recipes } from "../recipes.json"

function Menu() {
  const menuContainer = document.createElement("div")
  menuContainer.setAttribute("id", "menu")

  const ctaText = document.createElement("h2")
  ctaText.textContent = "Here is our Menu :)"

  const recipesContainer = document.createElement("div")
  recipes.forEach((recipe) => {
    recipesContainer.appendChild(
      Recipe(recipe.title, recipe.description, recipe.imageSrc)
    )
  })

  menuContainer.appendChild(ctaText)
  menuContainer.appendChild(recipesContainer)

  return menuContainer
}

export default Menu
