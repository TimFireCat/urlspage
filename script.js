// Dit is het script waarin alle functies staan die niet van d3 afhankelijk zijn.
// Dit zijn alle variabelen
var mode;
var root;
var hidebleDivisions = ["w3schools", "HSL", "roostersite", "infokanaal", "somtoday", "studiewijzerplus", "studiewijzers", "wrts", "p2000", "spotify", "overige"];
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
    document.getElementById("cssLink").setAttribute("href", root+"styleDarkMode.css");
    document.getElementById("cssExtensionLink").setAttribute("href", "");
    // Dan hoefen we niet alles zelf op te geven.
  } else {
    document.getElementById("cssLink").setAttribute("href", "styleDarkMode.css");
    document.getElementById("cssExtensionLink").setAttribute("href", root+"styleDarkModeExtension.css");
    // Anders moet dat wel.
  }
}

// Dit is om alles licht te maken.
function darkModeOff(){
   // Eerst moeten we kijken of de browser meewerkt aan de light mode.
  if (window.matchMedia('(prefers-color-scheme: light)').matches){
    document.getElementById("cssLink").setAttribute("href", root+"styleLightMode.css");
    document.getElementById("cssExtensionLink").setAttribute("href", "");
    // Dan hoefen we niet alles zelf op te geven.
  } else {
    document.getElementById("cssLink").setAttribute("href", root+"styleLightMode.css");
    document.getElementById("cssExtensionLink").setAttribute("href", root+"styleLightModeExtension.css");
    // Anders moet dat wel.
  }
}

function setup(){
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
