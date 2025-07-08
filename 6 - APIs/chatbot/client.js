

document.addEventListener('DOMContentLoaded', function() {
  qSel("#send-button").addEventListener("click", messageExchange)
  document.addEventListener('keydown', (event)=> { checkEnterKey(event)} )
})

let chatHistory = ""


function testChatbot() {
  const data = JSON.stringify({
    messages: [{role: 'user', content: 'hi'}],
    web_access: false
  })

  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  //setup request
  xhr.open('POST', 'https://chatgpt-42.p.rapidapi.com/gpt4');
  xhr.setRequestHeader('x-rapidapi-key', 'e3938739a7msh9e96af120838cd6p124f95jsncd04a2b21318');
  xhr.setRequestHeader('x-rapidapi-host', 'chatgpt-42.p.rapidapi.com');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(data)

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {  //this = xr object
      // log(this.responseText)
      let jsonObj = JSON.parse(this.responseText)
      let reply = jsonObj.result
      log(reply)
    }
  })

}


function checkEnterKey(event) {
  if (event.key == "Enter") {
    messageExchange()
  }
}


function messageExchange() {
  //read user message, display, send message to API, get back chatbot reply
  //and display

  let messageField = qSel("#message-field")
  let message = messageField.value
  messageField.value = ""  //clear field

  displayUserMessage(message)
  chatHistory += `user: ${message} \n`  // \n = new line

  //let botReply = getBotReply(message)  
  //bot reply is undefined, need to display bot reply when response returned (in function below)
  getBotReplyAndDisplay(message)
}


function displayUserMessage(message) {
  let userMessage = document.createElement("div")
  userMessage.classList.add("message")
  userMessage.classList.add("user-message")
  userMessage.textContent = message

  let chatContainer = qSel("#chat-container")
  chatContainer.appendChild(userMessage)
}


function displayBotMessage(message) {
  let botMessage = document.createElement("div")
  botMessage.classList.add("message")
  botMessage.classList.add("bot-message")
  botMessage.textContent = message

  let chatContainer = qSel("#chat-container")
  chatContainer.appendChild(botMessage)
}


function getBotReplyAndDisplay() {
  let prompt = `You will be given the chat history between you and a user. Please respond
  to their last message. 
  Chat history: 
  ${chatHistory}`
  //need chat history so chatbot has memory of the past conversation

  const data = JSON.stringify({
    messages: [{role: 'user', content: chatHistory}],
    web_access: false
  })

  const xr = new XMLHttpRequest()
  xr.withCredentials = true  //whatev

  //setup request
  xr.open('POST', 'https://chatgpt-42.p.rapidapi.com/gpt4');
  xr.setRequestHeader('x-rapidapi-key', 'e3938739a7msh9e96af120838cd6p124f95jsncd04a2b21318');
  xr.setRequestHeader('x-rapidapi-host', 'chatgpt-42.p.rapidapi.com');
  xr.setRequestHeader('Content-Type', 'application/json');

  xr.send(data)

  xr.addEventListener('readystatechange', function() {  //state of request changes
    if (this.readyState === this.DONE) {  //this = xr object
      // log(this.responseText)  //json string
      let jsonObj = JSON.parse(this.responseText)
      let reply = jsonObj.result
      displayBotMessage(reply)
      chatHistory += `bot: ${reply} \n`

      log(`Chat history \n=====\n${chatHistory}`)

      return reply
      //if just return reply, getBotReplyAndDisplay() will not have return statement 
      //since event listener function is only called when event fires

      //need to handle response inside here
    }
  })
}
