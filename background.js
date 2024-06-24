function logIt() {
  navigator.clipboard.writeText("hhhh");
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
    chrome.tabs.create({url: "https://www.google.com/"}, ()=>{});
    chrome.tabs.create({url: "https://www.apple.com/"}, ()=>{});
    chrome.storage.sync.set({ [2]: { text: "secon", ishid: false } });
    /*chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: logIt
    })*/
    logIt();
    
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




