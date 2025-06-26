
function log(data) { console.log(data) }


function greet(firstName, lastName, gender) {  
  
  if (gender == "male") { return `Hello Mr.${lastName}` }
  else if (gender == "female") { return `Hello Miss ${lastName}` }
  else { return `Hello ${firstName} ${lastName}` }
}

log(greet("Jim", "Brown", "male"))
log(greet("Mary", "Jane", "female"))
log(greet("Alex", "Smith", "other"))
