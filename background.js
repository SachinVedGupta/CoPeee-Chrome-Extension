function toSendMessage(theMethodName) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: theMethodName }, function (response) {
        // to handle response
    })
  })
}

chrome.commands.onCommand.addListener((c) => {
  switch(c){
  case "command2":
    toSendMessage('two')
    break
  case "command3":
    toSendMessage('three')
    break
  case "command4":
    toSendMessage('four')
    break
  case "command5":
    toSendMessage('five')
    break
  }
})



chrome.tabs.onActivated.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: 'bgChangeColor' }, function (response) {
        // to handle response
    })
  })
})


chrome.tabs.onUpdated.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: 'bgChangeColor' }, function (response) {
        // to handle response
    })
  })
})











/*

function toSendMessage(theMethodName) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: theMethodName }, function (response) {
        // to handle response
    })
  })
}

chrome.commands.onCommand.addListener((c) => {
  switch(c){
  case "command2":
    toSendMessage('two')
    break
  case "command3":
    toSendMessage('three')
    break
  case "command4":
    toSendMessage('four')
    break
  case "command5":
    toSendMessage('five')
    break
  }
})


chrome.tabs.onActivated.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: 'bgChangeColor' }, function (response) {
        // to handle response
    })
  })
})


chrome.tabs.onUpdated.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: 'bgChangeColor' }, function (response) {
        // to handle response
    })
  })
})*/