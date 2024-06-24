window.onload = () => {
  chrome.commands.getAll((c) => {
    let text = "";
    for (let {name, shortcut, description} of c){
      text += `${name},${shortcut},${description}\n`;
    }
    document.getElementById("id_text").value = text;
  });
}