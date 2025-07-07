

document.addEventListener('DOMContentLoaded', function() {
  testChatbot()

})


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
