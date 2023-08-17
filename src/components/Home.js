function Home() {
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

export default Home
