// Dit is het script waarin alle functies staan die niet van d3 afhankelijk zijn.
// Dit zijn alle variabelen
var mode;
var root;
var hidebleDivisions = ["ut", "w3schools", "p2000", "spotify", "overige", "module-3"];

cookie = document.cookie;
cookies = cookie.split("; ")
cookies.forEach(handlecookie)
console.log(cookies)

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("mode")){
  var mode = urlParams.get('mode')
}
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
  } else{
    autoMode()
  };
  // Bron: https://usefulangle.com/post/318/javascript-check-dark-mode-activated 
}


// Dit is om alles donker te maken.
function darkModeOn(){
  mode = "dark";
  document.getElementById("cssLink").setAttribute("href", root+"styleDarkMode.css");
}

// Dit is om alles licht te maken.
function darkModeOff(){
  mode = "light";
  document.getElementById("cssLink").setAttribute("href", root+"styleLightMode.css");
}

function autoMode() {
  mode = "auto";
  document.getElementById("cssLink").setAttribute("href", root+"styleAutomatic.css");
}

function storeMode() {
  const d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  // source: https://www.w3schools.com/js/js_cookies.asp
  document.cookie = "mode="+mode + ";" + expires;
}

function handlecookie(cookie) {
  console.log("Checking cookie: " + cookie);
  split = cookie.split("=");
  if (split.length == 2) {
    console.log("Correct cookie length.")
    if (split[0]== "mode") {
      console.log("Cookie handled: mode = " + split[1])
      mode = split[1];
    }
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