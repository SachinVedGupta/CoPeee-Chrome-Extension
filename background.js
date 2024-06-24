function logIt() {
  navigator.clipboard.writeText("jsjjsjsjs");
  alert("Successfully copied the text")
  navigator.clipboard.writeText("hiess").then(() => {
    //clipboard successfully set
    console.log("yyeyeshs");
    chrome.tabs.create({url: "https://www.apple.com/"}, ()=>{});
}, () => {
    //clipboard write failed, use fallback
});
  

}





chrome.commands.onCommand.addListener((c) => {
  switch(c){
  case "command2":
    //chrome.tabs.create({url: "https://www.google.com/"}, ()=>{});
    //send request to content.js, it will return selection, use selection as variable











    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { method: 'getUserSelection' }, function (response) {
          // Handle the response from content.js
          if (response) {
              let theAnswer = response["innerText"];
              console.log('The answer in background file is:', theAnswer);
              // You can store theAnswer in your background.js as needed
          }
          else {
            console.log('In background file, No Response')
          }
      });
  });











    chrome.storage.sync.set({ [2]: { text: "se", ishid: false } });
    /*chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: logIt
    })*/















    
    break;
  case "command3":
    chrome.tabs.create({url: "https://www.google.com/"}, ()=>{});
    chrome.storage.sync.set({ [3]: { text: "third", ishid: false } });
    break;
  case "command4":
    chrome.tabs.create({url: "https://www.google.com/"}, ()=>{});
    chrome.storage.sync.set({ [4]: { text: "fourth", ishid: false } });
    break;
  case "command5":
    chrome.tabs.create({url: "https://www.google.com/"}, ()=>{});
    chrome.storage.sync.set({ [5]: { text: "five", ishid: false } });
    break;
  }
});




