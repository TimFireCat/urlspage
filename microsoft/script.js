// Dit zijn de functies die wel van d3 afhankelijk zijn.

// Dit is de funcie die ervoor zorgt dat alles op een nieuwe pagina opent.
function allOnBlank(){
  d3.selectAll("a").attr("target", "_blank");
}

var googleSites = [
  //[id, name, url, [normal link possible, /?auth possible, .live.com possible, .office.com possible], color class],
  ["outlook", "Outlook", "https://outlook", [2,0,1,1], ""],
  ["onedrive", "Onedrive", "https://onedrive", [2,0,1,0], ""],
  ["to_do", "To do", "https://to-do", [0,0,1,1], ""],
  ["teams", "Teams", "https://teams", [2,0,1,1], ""],
  ["onenote_com", "Onenote.com", "https://onenote", [2,0,0,1], ""],
  ["word", "Word", "https://www.office.com/launch/word", [1,1,0,0], ""],
  ["excel", "Excel", "https://www.office.com/launch/excel", [1,1,0,0], ""],
  ["powerpoint", "Powerpoint", "https://www.office.com/launch/powerpoint", [1,1,0,0], ""],
  ["onenote_office", "Onenote (office)", "https://www.office.com/launch/onenote", [1,1,0,0], ""],
  ["onenote_notebooks", "Onenote (notebooks)", "https://www.onenote.com/notebooks", [1,1,0,0], ""]
]


// Dit is de funcie om de google tabel te maken.
function createGoogleTable(){ 
  var i;
  for (i = 0; i < googleSites.length; i++) {
    createGoogleRow(googleSites[i][0], googleSites[i][1], googleSites[i][2], googleSites[i][3], googleSites[i][4])
  }
}

// Dit is de functie om een rij van de google tabel te maken.
function createGoogleRow(id, name, link, accountSelectors, color){
  // Eerst wordt de rij zelf gemaakt.
  if (color){
    d3.select("#googleTable")
      .append("tr")
      .attr("id", id+"_row")
      .classed(color, true)
  }
  else{
    d3.select("#googleTable")
      .append("tr")
      .attr("id", id+"_row")
  }  
  // Daarna worden er 6 cellen aan de rij toegevoegd.
  createGoogleDataNormal(id, name, link, accountSelectors);
  createGoogleData(id, link, accountSelectors, ".live.com", 2);
  createGoogleData(id, link, accountSelectors, "?auth=1", 1);
  createGoogleData(id, link, accountSelectors, ".office.com", 3);
  createGoogleData(id, link, accountSelectors, "?auth=2", 1);
}

function createGoogleData(id, link, accountSelectors, extension, accountSelector){  
  if (accountSelectors[accountSelector] == 1) {
    d3.select("#"+id+"_row")
      .append("td")
      .append("a")
      .html(extension)
      .attr("href", link + extension)    
  }
  else{
    d3.select("#"+id+"_row")
      .append("td")
      .append("i")
      .html("Bestaat&nbspniet.")      
  }  
}

function createGoogleDataNormal(id, name, link, accountSelectors) {
  if (accountSelectors[0] == 1){
    d3.select("#"+id+"_row")
    .append("td")
    .append("a")
    .html(name)
    .attr("href", link)
  }
  else if (accountSelectors[0] == 2){
    d3.select("#"+id+"_row")
    .append("td")
    .append("a")
    .html(name)
    .attr("href", link+".com")
  }
  else{
    d3.select("#"+id+"_row")
    .append("td")
    .html(name)      
  }
}

// Dit is de functie om bepaalde onderdelen te laten verdwijnen.
function hide(id){
  var element = document.getElementById(id);
  if (document.getElementById(id).style.display=='none'){
    element.style.display='table'
  }
  else{
    element.style.display='none'
  }
}