function sendVersettoFB() {

  let dayObj = getLiturgicDay();
  let htmlVerse = dayColor[dayObj.color]+"  "+stringColorMailingList[dayObj.color]+ "  " +dayColor[dayObj.color]+"\n" + getDayFull().toString().replace(/###/g,"\n") +"\n\n#Preghiamo!\n";
  htmlVerse += lastVerseFull().toString().replace(/###/g,"\n");
  let post = encodeURIComponent(htmlVerse);

  try {
    
    var likes = getLikes();
    Logger.log(likes);
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

  try {
    
    var likes = getLikes();
    Logger.log(likes);
    postMessageWithPicture(htmlVerse, dayObj.special);
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}

function sendUserCount() {
  try {
    var post = getWeekMsg().toString().replace(/<TOT>/, sendTotalUser);
    postMessageHappy(encodeURI(post));
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}


