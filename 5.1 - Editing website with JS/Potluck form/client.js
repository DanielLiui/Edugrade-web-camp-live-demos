

document.addEventListener("DOMContentLoaded", function() {
  qSel("#submit-button").addEventListener("click", readData)
})

let userData = {name: "", phoneNum: "", allergies: [], activityIdeas: "", favIcecream: ""}

function readData() {
  userData.name = qSel("#name-field").value
  userData.phoneNum = qSel("#phone-num-field").value
  userData.allergies = readAllergies()
  userData.activityIdeas = qSel("#activity-ideas-field").value
  userData.favIcecream = readFavIcecream()

  log(userData)
  sayThanks()
}


function readAllergies() {
  //get all checkboxes and return allergies of those that are checked
  let allergies = []
  let allergyOptions = ['peanuts', 'tree nuts', 'milk', 'eggs', 'other']
  let checkboxes = qSelAll('input[type="checkbox"]')

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      allergies.push(allergyOptions[i])
    }
  }

  let otherAllergy = qSel("#other-allergy-field").value
  if (otherAllergy != "") allergies.push(otherAllergy) 

  return allergies
}


function readFavIcecream() {
  let dropdown = qSel("#icecream-dropdown")
  let selectedOption = dropdown.options[dropdown.selectedIndex]
  let favIcecream = selectedOption.value

  if (favIcecream == "Other") {
    favIcecream = qSel("#other-icecream-field").value
  }
  return favIcecream
}


function sayThanks() {
  //delete formDiv then say thank you
  let body = qSel("body")
  body.removeChild(qSel("#form-div"))

  let tyMessage = document.createElement("p")
  tyMessage.textContent = "Thanks for your response"
  tyMessage.id = "thank-you-message"

  body.appendChild(tyMessage)
}


