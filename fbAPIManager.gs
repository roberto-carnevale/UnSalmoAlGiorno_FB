
function doGet(e) {
  Logger.log(e);
  return HtmlService.createHtmlOutput("Chiedere a kn35roby@gmail.com di eliminare i propri dati. Grazie!"+Logger.getLog());
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
  Logger.log(jsonResponse.access_token.toString().replace(/\|/,'%7C'));
  return "access_token="+jsonResponse.access_token.toString().replace(/\|/,'%7C')+"&token_type=bearer";
}

function getMessages() {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?access_token='+fbAppToken;
  callFB('get', url);

}

function getLikes() {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'?fields=fan_count&access_token='+fbAppToken;
  let result = callFB('get', url);
  return JSON.parse(result).fan_count;

}

function getMe() {
  var url= 'https://graph.facebook.com/v9.0/'+me+'/accounts?access_token='+fbUserToken;
  callFB('get', url);
} 

function postMessage(text) {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?message='+text+'&access_token='+fbAppToken;
  callFB('post', url);
}


function callFB(method, url) {
  Logger.log(url);
  var option = {
  'method' : method,
  'muteHttpExceptions' : true,
  };
  var result = UrlFetchApp.fetch(url, option);
  //Logger.log(result.getAllHeaders());
  Logger.log(result);
  return result;
}