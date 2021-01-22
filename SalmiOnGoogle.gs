function SalmiOnGoogle() {
  //set up tab
  this.tabData = SpreadsheetApp.openById(SalmiDBSpreadsheet).getSheetByName(SalmiDBTab);
}


SalmiOnGoogle.prototype.niceVerseForFacebook = function(seedW) {
  let verseRaw = this.tabData.getRange("A"+seedW+":D"+seedW).getValues();
  let dayObj = getLiturgicDay();
  let dayName = "";
  let stringsHoly = "";
  if (dayObj.name) {dayName=dayObj.name;}
  if (dayObj.holy) {stringsHoly=stringsHoly[dayObj.holy];}
  let htmlVerse = dayTempo[dayObj.tempo] + "  #Preghiamo "+stringsTempo[dayObj.tempo]+dayName+"  "+dayColor[dayObj.color]+"\n\n";
  htmlVerse += verseRaw[0][0]+","+verseRaw[0][2] + "\n" + verseRaw[0][3].toString().replace(/###/g,"\n");
  let encodedHtmlVerse = encodeURIComponent(htmlVerse);
  return encodedHtmlVerse;
}

