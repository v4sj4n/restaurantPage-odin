import emailIconPath from "../images/icons/email.svg"
import phoneIconPath from "../images/icons/phone.svg"
function Footer() {
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

export default Footer
