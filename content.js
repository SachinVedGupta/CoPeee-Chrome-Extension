console.log("is working")

function toCreateListeners(theMethod, theNumber) {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("I received the message")
    if (message.method == theMethod) {
        //let innerText = document.getSelection().toString();
        let innerText = "try for test"
        innerText = document.getSelection().toString()
        console.log("In content file, user selects: " + innerText)
        chrome.storage.sync.set({ [theNumber]: { text: innerText, ishid: false } });
        sendResponse({ innerText: innerText });
        
    }
  });
}

toCreateListeners("two", 2)
toCreateListeners("three", 3)
toCreateListeners("four", 4)
toCreateListeners("five", 5)




//let winSelection = window.getSelection().toString()
//let docSelection = document.getSelection().toString()


//console.log(winSelection)
//console.log(docSelection)