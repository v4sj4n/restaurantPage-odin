function Nav() {
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

export default Nav
