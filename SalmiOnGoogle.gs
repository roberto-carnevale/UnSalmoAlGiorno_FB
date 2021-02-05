///TO BE CLEANED///

function SalmiOnGoogle() {
  //set up tab
  this.tabData = SpreadsheetApp.openById(SalmiDBSpreadsheet).getSheetByName(SalmiDBByTypeTab);
}


SalmiOnGoogle.prototype.niceVerseForFacebook = function(seedW) {
  let verseRaw = this.tabData.getRange("A"+seedW+":D"+seedW).getValues();
  let dayObj = getLiturgicDay();
  let dayName = "";
  let stringHoly = "";
  if (dayObj.name) {dayName=dayObj.name;}
  if (dayObj.holy) {stringHoly=stringsHoly[dayObj.holy];}
  let htmlVerse = dayTempo[dayObj.tempo] + "  #Preghiamo "+stringsTempo[dayObj.tempo]+stringHoly+dayName+"  "+dayColor[dayObj.color]+"\n\n";
  htmlVerse += lastVerseFull().toString().replace(/###/g,"\n");
  let encodedHtmlVerse = encodeURIComponent(htmlVerse);
  return encodedHtmlVerse;
}

