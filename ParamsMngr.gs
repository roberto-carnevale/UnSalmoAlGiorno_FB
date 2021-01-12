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

function setFBLikes(num) {
  readParams().getRange("B6").setValue(num);
}

function getFBLikes(num) {
  return (parseInt(readParams().getRange("B6").getValue()));
}