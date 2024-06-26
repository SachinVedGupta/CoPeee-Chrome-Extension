function toCreateListeners(theMethod, theNumber) {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("I received the message")
    if (message.method == theMethod) {
        //let innerText = document.getSelection().toString();
        let innerText = "try for test"
        innerText = document.getSelection().toString()
        console.log("In content file, user selects: " + innerText)
        chrome.storage.sync.set({ [theNumber]: { text: innerText, ishid: false } })
        sendResponse({ innerText: innerText })
        
    }
  })
}

toCreateListeners("two", 2)
toCreateListeners("three", 3)
toCreateListeners("four", 4)
toCreateListeners("five", 5)


function toModifyColor(red, green, blue) {
  let sum = red + green + blue

  if(sum <= 10) {
    /*
    red++
    green++
    blue++
    if (red > 255) { red = 255 }
    if (green > 255) { green = 255 }
    if (blue > 255) { blue = 255 }
    sum = red + green + blue
    */
   red = 147
   green = 209
   blue = 222
  }

  while(sum >= 750) {
    /*
    red--
    green--
    blue--
    if (red < 0) { red = 0 }
    if (green > 0) { green = 0 }
    if (blue > 0) { blue = 0 }
    sum = red + green + blue
    */
    red = 213
    green = 255
    blue = 169
  }

  return [red, green, blue]
}



chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.method == 'bgChangeColor') {
    const bodyElement = document.querySelector("body")
    const computedStyle = window.getComputedStyle(bodyElement)
    const theBackgroundColor = computedStyle.backgroundColor

    try {
      const colorValues = theBackgroundColor.replace(",", "").split("(")[1].split(")")[0]
      const actualColorValues = colorValues.split(" ")
      console.log(actualColorValues)
      
      // actualColorValues of form = [red-value, green-value, blue-value, opacity-value]
      const newColorValues = toModifyColor(Number(actualColorValues[0].replace(",", "")), Number(actualColorValues[1].replace(",", "")), Number(actualColorValues[2].replace(",", "")))
      console.log("Is this good input: ", [Number(actualColorValues[0].replace(",", "")), Number(actualColorValues[1].replace(",", "")), Number(actualColorValues[2].replace(",", ""))])
      console.log("Is this good output: ", newColorValues)
      const theRealColor = `rgba(${newColorValues[0].toString()}, ${newColorValues[1].toString()}, ${newColorValues[2].toString()}, 1)`
      console.log("Background color:", theBackgroundColor)
      console.log("The Real Colour to Use:", theRealColor)
      chrome.storage.sync.set({ "dbBackgroundColor": theRealColor })

    } catch(error) {
      const theRealColor = theBackgroundColor
      console.log("Background color:", theBackgroundColor)
      console.log("The Real Colour to Use:", theRealColor)
      chrome.storage.sync.set({ "dbBackgroundColor": theRealColor })
    }
  }

  })
