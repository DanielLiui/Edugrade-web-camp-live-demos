
function log(data) { console.log(data) }

//bunch of if statements
let hungry = true
let thirsty = false

if (hungry) {
  log("I'm hungry")
}

if (thirsty) {
  log("I'm thirsty")
}

if (hungry == false && thirsty == false) {
  log("I'm not hungry or thirsty")
}

//Same as if-else
if (hungry) {
  log("I'm hungry")
}
else if (thirsty) {
  log("I'm thirsty")
}
else {
  log("I'm not hungry or thirsty")
}

