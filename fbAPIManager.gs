
function doGet(e) {
  Logger.log(e);
}

function getAppToken() {
  var test="Test Message";
  var url= 'https://graph.facebook.com/v9.0/oauth/access_token?client_id='+fbAppId+'&client_secret='+fbAppPwd+'&grant_type=client_credentials';
  var option = {
  'method' : 'post',
  'muteHttpExceptions' : true
  };
  var jsonResponse = JSON.parse(UrlFetchApp.fetch( url, option));
  // encoding pipe: %7C
  return "access_token="+jsonResponse.access_token.toString().replace(/\|/,'%7C')+"&token_type=bearer";
}

function getMessages() {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?access_token='+fbAppToken;
  callFB('get', url);

}

function getLikes() {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'?fields=fan_count,followers_count&access_token='+fbAppToken;
  let result = callFB('get', url);
  return Math.max(JSON.parse(result).fan_count,JSON.parse(result).followers_count);

}

function getMe() {
  var url= 'https://graph.facebook.com/v9.0/'+me+'/accounts?access_token='+fbUserToken;
  callFB('get', url);
} 

function postMessage(text) {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?message='+text+'&access_token='+fbAppToken;
  callFB('post', url);
}

function postMessageHappy(text) {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?message='+text+'&og_action_type_id=383634835006146&og_object_id=241047402726961&access_token='+fbAppToken;
  callFB('post', url);
}

function postMessageWithPicture (text, tag) {
  var file = DriveApp.getFolderById("16fgZ4yKCc2c-tOmkyuFNFU-_4Oewu4Fz").getFilesByName(tag+".jpg").next().getBlob();
  var fileencoded = encodeURI(file.getDataAsString());

  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/photos';
    var dataJSON = {
    'source': file,
    'message' : text,
    'access_token': fbAppToken
  }
  callFBwithData ('post', url, dataJSON);
}


function callFB(method, url) {
  //Logger.log(url);
  var option = {
  'method' : method,
  'muteHttpExceptions' : true,
  };
  var result = UrlFetchApp.fetch(url, option);
  //Logger.log(result.getAllHeaders());
  Logger.log(result);
  return result;
}

function callFBwithData(method, url, data) {
  //Logger.log(url);
  var option = {
  'method' : method,
  'muteHttpExceptions' : true,
  'payload' : data
  };
  var result = UrlFetchApp.fetch(url, option);
  //Logger.log(result.getAllHeaders());
  Logger.log(result);
  return result;
}



//TO ADD FEELINGS
////https://developers.facebook.com/docs/graph-api/reference/v9.0/page/feed/feelings#objects
//og_action_type_id=383634835006146&og_object_id=241047402726961 = Felicissimo!
//og_action_type_id=383634835006146&og_object_id=387086391386101 = Pieno di gioia

//change icon
//og_icon_id=1561198480803111 = Bibbia
//og_icon_id=963051530439695 = Uova di pasqua
//og_icon_id=250821078407713 = Albero di Natale
//og_icon_id=554424167979437 = Chiesa
