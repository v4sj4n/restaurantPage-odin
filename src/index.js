import "./style.css"
import { recipes } from "./recipes.json"
import emailIconPath from "./images/icons/email.svg"
import phoneIconPath from "./images/icons/phone.svg"

function nav() {
  const navContainer = document.createElement("nav")
  const homeAnchor = document.createElement("a")
  const menuAnchor = document.createElement("a")
  const contactAnchor = document.createElement("a")

  homeAnchor.textContent = "Home"
  homeAnchor.setAttribute("href", "#home")
  menuAnchor.textContent = "Menu"
  menuAnchor.setAttribute("href", "#menu")
  contactAnchor.textContent = "Contact"
  contactAnchor.setAttribute("href", "#contact")

  navContainer.appendChild(homeAnchor)
  navContainer.appendChild(menuAnchor)
  navContainer.appendChild(contactAnchor)
  return navContainer
}

function home() {
  const homeContainer = document.createElement("div")
  homeContainer.setAttribute("id", "home")

  const ctaText = document.createElement("h2")
  ctaText.textContent = "Welcome to Ina's Spice & Savor"

  const menuBtn = document.createElement("a")
  menuBtn.textContent = "Check our Menu"
  menuBtn.setAttribute("href", "#menu")

  homeContainer.appendChild(ctaText)
  homeContainer.appendChild(menuBtn)

  return homeContainer
}

function recipeCreator(title, description, imageSrc) {
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

function menu() {
  const menuContainer = document.createElement("div")
  menuContainer.setAttribute("id", "menu")

  const ctaText = document.createElement("h2")
  ctaText.textContent = "Here is our Menu :)"

  const recipesContainer = document.createElement("div")
  recipes.forEach((recipe) => {
    recipesContainer.appendChild(
      recipeCreator(recipe.title, recipe.description, recipe.imageSrc)
    )
  })

  menuContainer.appendChild(ctaText)
  menuContainer.appendChild(recipesContainer)

  return menuContainer
}
function footer() {
  const contactContainer = document.createElement("footer")

  contactContainer.setAttribute("id", "contact")
  const ctaText = document.createElement("h2")
  ctaText.textContent = "Contact Us"

  contactContainer.appendChild(ctaText)

  const contactWaysContainer = document.createElement("div")

  const emailContainer = document.createElement("div")
  const emailIcon = new Image()
  emailIcon.src = emailIconPath
  const emailText = document.createElement("p")
  emailText.textContent = "ina@spicesavor.com"

  emailContainer.appendChild(emailIcon)
  emailContainer.appendChild(emailText)

  const phoneContainer = document.createElement("div")
  const phoneIcon = new Image()
  phoneIcon.src = phoneIconPath
  const phoneText = document.createElement("p")
  phoneText.textContent = "+355 67 71 23 987"

  phoneContainer.appendChild(phoneIcon)
  phoneContainer.appendChild(phoneText)

  contactWaysContainer.appendChild(emailContainer)
  contactWaysContainer.appendChild(phoneContainer)

  contactContainer.appendChild(contactWaysContainer)

  return contactContainer
}

document.body.appendChild(nav())
document.body.appendChild(home())
document.body.appendChild(menu())
document.body.appendChild(footer())
