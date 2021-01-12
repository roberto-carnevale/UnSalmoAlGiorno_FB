function sendVersetoFB() {
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
