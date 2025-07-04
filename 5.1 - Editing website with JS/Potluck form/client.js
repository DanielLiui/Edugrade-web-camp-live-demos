

document.addEventListener("DOMContentLoaded", function() {
  qSel("#submit-button").addEventListener("click", readUserData)
})


function readUserData() {
  let userData = {name: "", phoneNum: "", allergies: [], activityIdeas: "", favIcecream: ""}

  userData.name = qSel("#name-field").value
  userData.phoneNum = qSel("#phone-num-field").value
  userData.allergies = readAllergies()
  userData.activityIdeas = qSel("#activity-ideas-field").value
  userData.favIcecream = readFavIcecream()

  log(userData)
  sayThankYou()
}


function readAllergies() {
  let allergies = []
  let allergyOptions = ['peanuts', 'tree nuts', 'milk', 'eggs', 'other']
  let checkboxes = qSelAll("input[type='checkbox']")

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      allergies.push(allergyOptions[i])

      //can't do 
      //allergies.push(checkboxes[i].textContent)  
      //since input elements are "void elements" with empty string .textContent values

      //another option: give checkboxes a value property like 
      //<input type="checkbox" value="Peanuts"> Peanuts </input> <br></br>
      //then call
      //allergies.push(checkboxes[i].value)
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

  if (favIcecream == "Other") favIcecream = qSel("#other-icecream-field").value
  return favIcecream
}


function sayThankYou() {
  //remove form and display thank you message
  let body = qSel("body")
  body.removeChild(qSel("#form-div"))

  let message = document.createElement("p")
  message.textContent = "Thank you for responding"
  message.id = "ty-message"
  body.appendChild(message)
}



