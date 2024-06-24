console.log("is working")

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("I received the message")
  if (message.method == 'getUserSelection') {
      //let innerText = document.getSelection().toString();
      let innerText = "try for test"
      innerText = document.getSelection().toString()
      console.log("In content file, user selects: " + innerText)
      sendResponse({ innerText: innerText });
  }
});


//let winSelection = window.getSelection().toString()
//let docSelection = document.getSelection().toString()


//console.log(winSelection)
//console.log(docSelection)