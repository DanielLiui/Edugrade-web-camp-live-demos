
function log(data) { console.log(data) }


//add event listeners to elements when the browser(document) loads
document.addEventListener("DOMContentLoaded", function() {
  let helloConsoleButton = document.querySelector("#helloToConsoleButton")
  helloConsoleButton.addEventListener("click", sayHelloToConsole)
  //call function when event occurs for element

  let helloWebpageButton = document.querySelector("#helloToWebpageButton")
  helloWebpageButton.addEventListener("click", sayHelloToWebpage)
})


function sayHelloToConsole() {
  log("hello")
}


function sayHelloToWebpage() {
  //add hello message to body
  let message = document.createElement("p")  //element object
  message.textContent = "hello"

  let body = document.querySelector("body")
  body.appendChild(message)
}

