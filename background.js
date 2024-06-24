chrome.commands.onCommand.addListener((c) => {
  switch(c){
  case "command2":
    chrome.tabs.create({url: "https://www.google.com/"}, ()=>{});
    chrome.storage.sync.set({ [2]: { text: "second", ishid: false } });
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




function