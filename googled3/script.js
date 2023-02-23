// Dit zijn de functies die wel van d3 afhankelijk zijn.

// Dit is de funcie die ervoor zorgt dat alles op een nieuwe pagina opent.
function allOnBlank(){
  d3.selectAll("a").attr("target", "_blank");
}

var googleSites = [
  //[id, name, url, [normal link possible, /?authuser possible, /u/ possible, /a/ possible], color class]
  ["google_com", "www.google.com", "https://www.google.com", [1,1,0,0], ""],
  ["google_nl", "www.google.nl", "https://www.google.nl", [1,1,0,0], ""],
  ["google_docs", "docs.google.com", "https://docs.google.com", [1,1,1,1], "google_blue"],
  ["google_documents", "docs.google.com/document", "https://docs.google.com/document", [1,1,1,0], "google_blue"],
  ["google_spreadsheets", "docs.google.com/spreadsheets", "https://docs.google.com/spreadsheets", [1,1,1,0], "google_green"],
  ["google_presentation", "docs.google.com/presentation", "https://docs.google.com/presentation", [1,1,1,0], "google_yellow"],
  ["google_forms", "docs.google.com/forms", "https://docs.google.com/forms", [1,1,1,0], "google_purple"],
  ["google_drawings", "docs.google.com/drawings", "https://docs.google.com/drawings", [1,1,1,0], "google_red"],
  ["google_drive", "drive.google.com", "https://drive.google.com", [1,1,1,1], ""],
  ["google_classroom", "classroom.google.com", "https://classroom.google.com", [1,1,0,1], "classroom_color"],
  ["google_mail", "mail.google.com", "https://mail.google.com", [1,1,0,1], "gmail_color"],
  ["inbox", "inbox.google.com", "https://inbox.google.com", [1,0,0,0], "gmail_color"],
  ["google_meet", "meet.google.com", "https://meet.google.com", [1,1,0,0], "meet_color"],
  ["google_calendar", "calendar.google.com", "https://calendar.google.com", [1,1,1,1], "calendar_color"],
  ["youtube", "youtube.com", "https://www.youtube.com", [1,0,0,0], "red"],
  ["youtube_tv", "youtube.com/tv", "https://www.youtube.com/tv", [1,0,0,0], "red"],
  ["youtube_music", "music.youtube.com", "https://music.youtube.com", [1,0,0,0], "red"],
  ["google_contacts", "contacts.google.com", "https://contacts.google.com", [1,1,1,0], "contacts_color"],
  ["google_maps", "maps.google.com", "https://maps.google.com", [1,1,0,0], ""],
  ["google_translate", "translate.google.com", "https://translate.google.com", [1,1,1,0], "translate_color"],
  ["google_keep", "keep.google.com", "https://keep.google.com", [1,1,1,1], "google_yellow"],
  ["google_photos", "photos.google.com", "https://photos.google.com", [1,1,1,0]],
  ["google_play", "play.google.com", "https://play.google.com", [1,1,0,0]],
  ["google_one", "one.google.com", "https://one.google.com", [1,1,1,0]]
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
  createGoogleData(id, link, accountSelectors, "/?authuser=0", 1)
  createGoogleData(id, link, accountSelectors, "/u/0", 2)
  createGoogleData(id, link, accountSelectors, "/?authuser=1", 1)
  createGoogleData(id, link, accountSelectors, "/u/1", 2)
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