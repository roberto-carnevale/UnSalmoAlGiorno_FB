function PostLodi() {
  try {
    let dayObj = getLiturgicDay();
    let lodi = dayColor[dayObj.color]+"  "+stringColorMailingList[dayObj.color]+"  "+dayColor[dayObj.color]+"\r\n"+getDayFull().toString().replace(/###/g,"\r\n");
    if (dayObj.text) {lodi += "\r\n" + dayObj.text.toString().replace(/###/g,"\r\n"); }
    lodi += "\r\n\r\n#Preghiamo\r\n\r\n" + lastVerseFull().toString().replace(/###/g,"\r\n");

    //image treatment
    var file = null
    let folder = DriveApp.getFolderById(ImageFolder);
    
    let findfile = folder.getFilesByName(dayObj.special+".jpg");
    if (findfile.hasNext()) {
      file=findfile.next().getBlob();
    } else {
      file=folder.getFilesByName(dayObj.baseImage).next().getBlob();
    }
    MailApp.sendEmail(mailZap,objZap, lodi, {name:"Un Salmo al giorno", inlineImages:{imageOfTheDay: file} } );
  } catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Mail2FB Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}

function PostCompieta() {
  try {  // gets data
    let file = DriveApp.getFolderById(ImageFolder).getFilesByName(getCompietaImage()).next().getBlob();
    let compieta = getCompietaFull().toString().replace(/###/g,"\r\n")+"\r\n\r\nBuonanotte 🛌";

    MailApp.sendEmail(mailZap,objZap, compieta, {inlineImages:{imageOfTheDay: file} } );
  } catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Mail2FB Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}

function PostCompietaGruppo() {
  try {  // gets data
    let file = DriveApp.getFolderById(ImageFolder).getFilesByName(getCompietaImage()).next().getBlob();
    let compieta = getCompietaFull().toString().replace(/###/g,"\r\n")+"\r\n\r\nBuonanotte 🛌";

    MailApp.sendEmail(mailZap_group,objZap, compieta, {inlineImages:{imageOfTheDay: file} } );
  } catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Mail2FB Exception", err.toString() + "\r\n" + err.stack.toString());
  }
}

function PostCount() {
  var messagge = getWeekMsg().toString().replace(/<TOT>/, getAllUsers()).replace(/###/g,"\r\n");
  let file = DriveApp.getFolderById(ImageFolder).getFilesByName("candele.jpg").next().getBlob();
  
  try {
    MailApp.sendEmail(mailZap,objZap, messagge, {inlineImages:{imageOfTheDay: file} } );
  }
  catch (err) {
    MailApp.sendEmail("kn35roby@gmail.com","Mail2FB Exception", err.toString() + "\r\n" + err.stack.toString());
  }  
}

