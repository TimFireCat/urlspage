// Dit is het script waarin alle functies staan die niet van d3 afhankelijk zijn.
// Dit zijn alle variabelen
var mode;
var root;
var hidebleDivisions = ["ut", "w3schools", "p2000", "spotify", "overige", "module-3"];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var mode = urlParams.get('mode')
// Bron: https://www.sitepoint.com/get-url-parameters-with-javascript/

function root(location){
  console.log("location: "+location)
  root = location;
  console.log("root: "+root)
}

// Dit is de functie die bepaalt of alles donker moet zijn.
function checkDarkMode(){
  if (mode=="dark"){
    darkModeOn()    
  } else if (mode=="light"){
    darkModeOff()
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    darkModeOn()
  } else{
    darkModeOff()
  };
  // Bron: https://usefulangle.com/post/318/javascript-check-dark-mode-activated 
}


// Dit is om alles donker te maken.
function darkModeOn(){
  // Eerst moeten we kijken of de browser meewerkt aan de dark mode.
  if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.getElementById("cssLink").setAttribute("href", root+"styleAutomatic.css");
    // Dan kan de standaard stylesheet worden gebruikt.
  } else {
    document.getElementById("cssLink").setAttribute("href", root+"styleDarkMode.css");
    // Anders moet de handmatige stylesheet gebruikt worden.
  }
}

// Dit is om alles licht te maken.
function darkModeOff(){
   // Eerst moeten we kijken of de browser meewerkt aan de light mode.
  if (window.matchMedia('(prefers-color-scheme: light)').matches){
    document.getElementById("cssLink").setAttribute("href", root+"styleAutomatic.css");
    // Dan kan de standaard stylesheet worden gebruikt.
  } else {
    document.getElementById("cssLink").setAttribute("href", root+"styleLightMode.css");
    // Anders moet de handmatige stylesheet gebruikt worden.
  }
}

async function setup(){
  fetchInput = await fetch('./data.json')
  data = await fetchInput.json();

  websites = data.websites;
  websites.forEach(element => {
    addWebsite(element.id, element.name, element.url, element.category)
  });
  
  

  var i;
  for (i = 0; i < hidebleDivisions.length; i++) {
    headerId = hidebleDivisions[i]+"_header";
    divisionId = hidebleDivisions[i]+"_division"
    functionName = "hide('"+divisionId+"')"
    document.getElementById(headerId).setAttribute("onclick", functionName);
  }
}

function hide(id){
  if (document.getElementById(id).style.display =="none"){
   document.getElementById(id).style.display = "block"
  }
  else {
    document.getElementById(id).style.display = "none"
  }
}

function addWebsite(id, name, url, category) {
  node = document.createElement("a")
  document.getElementById(category + "_division").appendChild(node);
  // node.id = id;
  node.innerHTML = name;
  node.href = url;
  node.target = "_blank";
  br = document.createElement("br");
  document.getElementById(category + "_division").appendChild(br);
}