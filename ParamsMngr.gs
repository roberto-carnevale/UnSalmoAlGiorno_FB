function readParams() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName(SubscriberParams);
}

function readDebugChat() {
  return (parseInt(readParams().getRange("B4").getValue()));
}

function lastVerse() {
  return (parseInt(readParams().getRange("B2").getValue()));
}
function lastSentUsers() {
  return (parseInt(readParams().getRange("B3").getValue()));
}

function setlastVerse(num) {
  return (parseInt(readParams().getRange("B2").setValue(num)));
}
function setlastSentUsers(num) {
  readParams().getRange("B3").setValue(num);
}

function getTelegramSubcribers() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName("Subscribers").getDataRange().getNumRows();
}

function getTwitterFollowers() {
  return (parseInt(readParams().getRange("B5").getValue()));
}

function setFBLikes(num) {
  readParams().getRange("B6").setValue(num);
}

function getFBLikes() {
  return (parseInt(readParams().getRange("B6").getValue()));
}

function getAllUsers() {
  return getTelegramSubcribers()+getFBLikes()+getTwitterFollowers();
}

function getLiturgicDay() {
  return JSON.parse(readParams().getRange("B7").getValue());
}

function lastVerseFull() {
  return readParams().getRange("B8").getValue();
}
//dayFull
function getdayFull() {
  return readParams().getRange("B9").getValue();
}

function getWeekMsg () {
  return readParams().getRange("B10").getValue();
}