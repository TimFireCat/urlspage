// Dit zijn de functies die wel van d3 afhankelijk zijn.

// Dit is de funcie die ervoor zorgt dat alles op een nieuwe pagina opent.
function allOnBlank(){
  d3.selectAll("a").attr("target", "_blank");
}

// Dit zijn de benodigde variabelen.
var classrooms = [
  //[id, name, url, color],
  ["KO6V_wisb1_20212022", "KO6V.wisb1&nbsp(2021/2022)", "MzE5NzY5NzkxMDYx", "blue"],
  ["KO6V_wisb2_20212022", "KO6V.wisb2&nbsp(2021/2022)", "NDI2Njg1NzA5NTA2", "green"],
  ["KO6V_algemeen_20212022", "Info&nbsp6&nbspVwo", "NDIxNTgzNTUzMjAw", "green"],
  ["KO6V_na_20212022", "KO6V.na&nbsp(2021/2022)", "MzgzMDkxNTk0NTE1", "green"],
  ["KO6V_dutl1_20212022", "KO6v.dutl1&nbsp(2021/2022)", "Mzk4MjIxMTczODQy", "orange"],
  ["KO6V1_netl_20212022", "KO6V1.netl&nbsp(2021/2022)", "MzgxNTMyMTA2MzE1" ,"blue"],
  ["KO6V1_entl_20212022", "KO6V1.entl&nbsp(2021-2022)", "MjI2ODYzMTAwMzk0", "black"],
  ["KO6V_mu1_20212022", "KO6V.mu1&nbsp(2021/2022)", "Mzg4NzYwOTIwMjI4", "black"],
  ["KO06V_schk1_20212022", "KO06V.schk1&nbsp(2021/2022)", "MzgyMDkzMTc4OTk3", "black"],
  ["KO06V_in_20212022", "KO06V.in&nbsp(2021/2022)", "MzgxOTE1NzQ5NjM3" ,"black"],
  ["profielwerkstuk", "profielwerkstuk", "MzY3NDE4Mjg2Nzg2" ,"blue"],
  ["Mentor", "Mentor&nbsp2020/2021", "MTUyODMyNjg0NTQ5" ,"blue"],
  ["KO5V4_entl_20202021", "KO5V4.entl&nbsp(2020/2021)", "MTQ4MTY3NjEwOTk1" ,"cyan"],
  ["KO5V_dutl1_20202021", "KO5V.dutl1&nbsp(2020/2021)", "MTI2NzIwNzI2ODUy", "green"],
];

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
  createGoogleData(id, link, accountSelectors, "/a/hetstedelijklyceum.nl", 3)
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

// Dit is de functie om de google tabel te maken
function createClassroomTable(){  
  var i;
  // Voor iedere rij in de array wordt er ook een rij aan de tabel toegevoegd.
  for (i = 0; i < classrooms.length; i++) {
    createClassroomRow(classrooms[i][0], classrooms[i][1], classrooms[i][2], classrooms[i][3])
  }
}

// Dit is de functie om de rij te maken.
function createClassroomRow(id, name, link, color){
  // Eerste de rij zelf...
  d3.select("#classroomTable")
    .append("tr")
    .attr("id", id+'_row')
    .classed("classroom_"+color, true);
  // ... en daarna alle cellen met de gegevens.
  createClassroomDataNormal(id, name, link);
  createClassroomDataEmpty(id);
  createClassroomData(id, link, "/u/0");
  createClassroomDataEmpty(id);
  createClassroomData(id, link, "/u/1");
  createClassroomData(id, link, "/a/hetstedelijklyceum.nl");
}

// Dit zijn de functies om verschillende soorten cellen te maken.
function createClassroomDataNormal(id, name, link){
  d3.select("#"+id+"_row")
    .append("td")
    .append("a")
    .html(name)
    .attr("href","https://classroom.google.com/c/"+link)

}

function createClassroomData(id, link, extension){
  d3.select("#"+id+"_row")
  .append("td")
  .append("a")
  .html(extension)
      .attr("href", "https://classroom.google.com" + extension + "/c/" + link)
}

function createClassroomDataEmpty(id){
    d3.select("#"+id+"_row")
      .append("td")
      .append("i")
      .html("Bestaat&nbspniet.")  
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