const page = document.getElementById("root")

console.log("st")

function renderABox(number, isHidden, theText, isClear) {

  //no parameters



  let uuid = number
  let textId = `text-long`
  let pId = `p-long`
  let theSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>`



  /*
  const numKey = number
  let textValue = theText
  let hideValue = isHidden
  let objInValue = { text: textValue, ishid: hideValue }
  chrome.storage.sync.set({ [numKey]: objInValue }, function() {
    console.log(`Data saved successfully with key "${numKey}"`);
  });*/




  if (isHidden) {
    textId = `text-short`
    pId = `p-short`
    theSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`
  }

  let htmlCode = `
    <div id="the-module-${uuid}" class="thin-el">
      <button id="num-btn-${uuid}" class="num">
        <h2>${number}</h2>
      </button>
      <button class="hide" id="to-put-svg-${uuid}">${theSvg}</button>
      <div id="text-${uuid}" class=${textId}>
        <p id="p-${uuid}" class=${pId}>${theText}</p>
      </div>
    </div>
  `

  let newElement = document.createElement("div")
  newElement.innerHTML = htmlCode
  page.appendChild(newElement);

  let bu = document.getElementById(`to-put-svg-${uuid}`)
  let textIdVar = document.getElementById(`text-${uuid}`)
  let pIdVar = document.getElementById(`p-${uuid}`)
  let theModule = document.getElementById(`the-module-${uuid}`)
  let numBtn = document.getElementById(`num-btn-${uuid}`)


  textIdVar.addEventListener("click", function() {
    let textToCopy = pIdVar.textContent
    navigator.clipboard.writeText(textToCopy)

    pIdVar.style.transition = "all 0.5s"


    pIdVar.textContent = "Copied :)";

    pIdVar.style.opacity = 1
    

    setTimeout(function() {

      pIdVar.textContent = textToCopy

    }, 1000);
  })


  bu.addEventListener("click", function() {
    if (isHidden) {
      console.log("hidden")
      bu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>`
      isHidden = false
      textIdVar.className = `text-long`
      pIdVar.className = `p-long`
      chrome.storage.sync.set({ [number]: { text: `${theText}`, ishid: false } })
    }
    else {
      console.log("shown")
      bu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`
      isHidden = true
      textIdVar.className = `text-short`
      pIdVar.className = `p-short`
      chrome.storage.sync.set({ [number]: { text: `${theText}`, ishid: true } })
    }
  })


      //pIdVar.textContent = window.getSelection().toString()
    

  document.addEventListener('keydown', function(event) {

    if (event.altKey && event.key == number.toString() && (window.getSelection().toString() != "")) {
      pIdVar.textContent = window.getSelection().toString()
      isClear = false
      theModule.style.position = 'relative'
      theModule.style.opacity = `1`
      chrome.storage.sync.set({ [number]: { text: `${window.getSelection().toString()}`, ishid: false } })



      //Alt + Number --> To copy into database and clipboard
      
    }
  });





  document.addEventListener('keydown', function(event) {

    if (event.altKey && event.key == number.toString() && event.ctrlKey) {
      //Alt + Number + CTRL --> To paste the text
    }
  });




  numBtn.addEventListener('click', function() {


    pIdVar.textContent = ""
    isClear = true
    theModule.style.position = 'absolute'
    theModule.style.opacity = `0`
    chrome.storage.sync.set({ [number]: { text: "", ishid: true } })
      
  });




  if (isClear) {
    theModule.style.position = 'absolute'
    theModule.style.opacity = `0`
  }





}



//Set Keys in Sync Storage


function createDb() {
  for (let i = 1; i <= 9; i++) {
    chrome.storage.sync.set({ [i]: { text: "Select Alt+Number to Copy, and Ctrl+Alt+Number to Paste", ishid: false } })
  }
}





function renderPage() {

  for (let i = 1; i <= 9; i++) {

    
    chrome.storage.sync.get([i.toString()]).then((result) => {
    
      let object = result[i.toString()]
      let newText = object["text"]
      let newHide = object["ishid"]
      let newIsClear = false
      if (newText == "") {
        newIsClear = true
      }

      console.log(object); // Move this line inside the callback

      renderABox(i, newHide, newText, newIsClear)
    
    });


  
  }



  /*

  renderABox(1, false, "Refer to database", false)

  // Key is 1
  // Value: First "false" stored in database under isHidden
  // Value: Text thats stored/copied
  
  // Second "false" when rendering will be based on whether the text in databse is there or if its juist blank with ""

  // Database Structure
  // 1 --> {text: "Who am I",
  //        isHidden: false}


  //USe built in chrome extension storage





  renderABox(2, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)  
  renderABox(3, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)
  renderABox(4, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)
  renderABox(5, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)
  renderABox(6, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)
  renderABox(7, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)
  renderABox(8, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)
  renderABox(9, false, "My name is Sachin and I like to go to the museum to play games and I am so good at everything", false)

  */

}


chrome.storage.onChanged.addListener(() => {
  document.getElementById("root").innerHTML = `<h1>CeeP</h1>`
  document.getElementById("root").innerHTML += `<script src="myindex.js"></script>`
  document.getElementById("root").innerHTML += `<script src="thecontent.js"></script>`

  renderPage()
});


chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
      console.log("This is a first install!")
      createDb()
  }else if(details.reason == "update"){
      var thisVersion = chrome.runtime.getManifest().version
      console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!")
      createDb()
  }
});

renderPage()










/*
chrome.storage.sync.set({ key: "him see do" }).then(() => {
  console.log("Value is set");
});

chrome.storage.sync.get(["key"]).then((result) => {
  console.log("Value is " + result.key);
});

//chrome.storage.sync.get(console.log)
*/


/*
console.log("hhhhhshshs")
console.log(chrome.storage.sync.get(["key"]))

chrome.storage.sync.get(["1"]).then((result) => {
  console.log(result.key.text);
});




chrome.storage.sync.get('1', function(result) {console.log(result['1'].text)})

console.log(typeof chrome.storage.sync.get('1', function(result) {console.log(result['1'].text)}))


chrome.storage.sync.get('7', function(items) {
  var key1Text = items[7]?.text || ""; // Retrieve the "text" property for key "1"
  console.log("Value of 'text' for key '1':", key1Text);
  return key1Text;
});


let h = 0
chrome.storage.sync.get(["7"]).then((result) => { console.log("Value is " + result["7"]["text"]); h = result["7"]["text"] })
console.log(h)




console.log("JJSJSJNJKS")

chrome.theme.getCurrent((themeInfo) => {
  const themeColor = themeInfo.colors
  console.log(`Current theme color is: ${themeColor}`)
  // You can also access other properties like themeInfo.images, etc.
})

console.log("JONKHJBSAHKAHBKHBKAB")


function getStyle(themeInfo) {
  if (themeInfo.colors) {
    console.log(`accent color: ${themeInfo.colors.frame}`);
    console.log(`toolbar: ${themeInfo.colors.toolbar}`);
  }
}
getStyle()


*/




chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});