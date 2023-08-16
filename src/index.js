import "./style.css"
import data from "./recipes.json"

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

console.log(data)

document.body.appendChild(nav())
document.body.appendChild(home())
