function getLikes() {
  try {
    var likes = getLikesAPI();
    setFBLikes(likes);
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception (getLikes())", err.toString() + "\r\n" + err.stack.toString());
  }
}



function sendVersettoFB() {

  let dayObj = getLiturgicDay();
  let htmlVerse = dayColor[dayObj.color]+"  "+stringColorMailingList[dayObj.color]+ "  " +dayColor[dayObj.color]+"\n" + getDayFull().toString().replace(/###/g,"\n") +"\n\n#Preghiamo!\n";
  htmlVerse += lastVerseFull().toString().replace(/###/g,"\n");
  let post = encodeURIComponent(htmlVerse);

  try {
    
    //var likes = getLikes();
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
  
  let htmlVerse = "#Preghiamo!\n"+lastVerseFull().toString().replace(/###/g,"\n");
  htmlVerse += "\n\n"+dayColor[dayObj.color]+"  "+stringColorMailingList[dayObj.color]+ "  " +dayColor[dayObj.color]+"\n" + getDayFull().toString().replace(/###/g,"\n");

  //image treatment
  var file = null
  let folder = DriveApp.getFolderById(ImageFolder);
  
  let findfile = folder.getFilesByName(dayObj.special+".jpg");
  if (findfile.hasNext()) {
    file=findfile.next().getBlob();
  } else {
    file=folder.getFilesByName(dayObj.baseImage).next().getBlob();
  }

  
  try {
    
    var likes = getLikes();

    var result = postMessageWithPicture(htmlVerse, file);
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Result", "Likes:" + likes +"\r\n\r\nResult:\r\n"+result);
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Facebook Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}


function sendUserCount() {
  try {
    var messagge = getWeekMsg().toString().replace(/<TOT>/, getAllUsers()).replace(/###/g,"\r\n");
    let file = DriveApp.getFolderById(ImageFolder).getFilesByName("candele.jpg").next().getBlob();
    
    likes = getLikes();
    result = postMessagewithFeelingAndPicture(messagge, file, "joyful");
    Logger.log(result);
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Mail2FB Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}

function sendCompieta() {
    try {  // gets data
    let file = DriveApp.getFolderById(ImageFolder).getFilesByName(getCompietaImage()).next().getBlob();
    let compieta = getCompietaFull().toString().replace(/###/g,"\r\n")+"\r\n\r\nBuonanotte 🛌";
    
    result = postMessagewithFeelingAndPicture(compieta, file,"asleep");
    likes = getLikes();

  } catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Mail2FB Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}


