

document.addEventListener('DOMContentLoaded', function() {
  let micButton = qSel("#mic-button")
  let stopRecordButton = qSel("#stop-record-button")

  micButton.addEventListener("click", toggleButton)
  stopRecordButton.addEventListener("click", toggleButton)
})


function toggleButton() {
  //if mic button is displayed, hide it and display stop record button
  //if stop record button is displayed, hide it and display mic button

  let micButton = qSel("#mic-button")
  let stopRecordButton = qSel("#stop-record-button")

  if (stopRecordButton.style.display == "none") {
    //display stop record button
    stopRecordButton.style.display = "inline" //can be inline or block
    micButton.style.display = "none"
  }
  else {
    //display mic button
    micButton.style.display = "inline"
    stopRecordButton.style.display = "none"
  }
}


function toggleButton2() {
  //remove 1 button and when record button is clicked, create other button
  //from scratch (tedious)
}