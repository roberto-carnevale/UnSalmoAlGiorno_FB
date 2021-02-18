function sendVersettoFB() {

  let dayObj = getLiturgicDay();
  let htmlVerse = dayColor[dayObj.color]+"  "+stringColorMailingList[dayObj.color]+ "  " +dayColor[dayObj.color]+"\n" + getDayFull().toString().replace(/###/g,"\n") +"\n\n#Preghiamo!\n";
  htmlVerse += lastVerseFull().toString().replace(/###/g,"\n");
  let post = encodeURIComponent(htmlVerse);

  try {
    
    var likes = getLikes();
    Logger.log(likes);
    setFBLikes(likes);
    postMessage(post);
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}

function sendVersettoFBwithPicture() {
  let dayObj = getLiturgicDay();

  let htmlVerse = dayColor[dayObj.color]+"  "+stringColorMailingList[dayObj.color]+ "  " +dayColor[dayObj.color]+"\n" + getDayFull().toString().replace(/###/g,"\n") +"\n\n#Preghiamo!\n";
  htmlVerse += lastVerseFull().toString().replace(/###/g,"\n");

  //image treatment
  var file = null
  let findfile = DriveApp.getFolderById("16fgZ4yKCc2c-tOmkyuFNFU-_4Oewu4Fz").getFilesByName(dayObj.special+".jpg");
  if (findfile.hasNext()) {file=findfile.next().getBlob();}
  else {file = DriveApp.getFolderById("16fgZ4yKCc2c-tOmkyuFNFU-_4Oewu4Fz").getFilesByName("brand.jpg").next().getBlob()}


  try {
    
    var likes = getLikes();
    Logger.log(likes);
    postMessageWithPicture(htmlVerse, file);
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}



function sendUserCount() {
  try {
    
    var post = getWeekMsg().toString().replace(/<TOT>/, getAllUsers()).replace(/###/g,"\n");
    postMessageHappy(encodeURI(post));
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}


