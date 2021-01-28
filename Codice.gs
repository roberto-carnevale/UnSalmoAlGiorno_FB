function sendVersettoFB() {
  let verse = lastVerse();

  var sog = new SalmiOnGoogle();
  var post = sog.niceVerseForFacebook(verse);

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


function sendUserCount() {
  try {
    var post = "Ogni mattina siamo in " + getAllUsers() + " a pregare insieme, sullo stesso Salmo, da tutte le piattaforme!\nVisita il sito http://bit.ly/unsalmoalgiorno per saperne di più";
    postMessage(encodeURI(post));
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}


