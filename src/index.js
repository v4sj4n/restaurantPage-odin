import "./style.css"

function nav() {
  const navContainer = document.createElement("nav")
  const homeAnchor = document.createElement('a')
  const menuAnchor = document.createElement('a')
  const contactAnchor = document.createElement('a')

  homeAnchor.textContent = "Home"
  menuAnchor.textContent = "Menu"
  contactAnchor.textContent = "Contact"

  navContainer.appendChild(homeAnchor)
  navContainer.appendChild(menuAnchor)
  navContainer.appendChild(contactAnchor)
  return navContainer
}

document.body.appendChild(nav())
