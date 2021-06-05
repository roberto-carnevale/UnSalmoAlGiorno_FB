
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
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?access_token='+encodeURI(fbAppToken);
  callFB('get', url);

}

function getLikesAPI() {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'?fields=fan_count,followers_count&access_token='+encodeURI(fbAppToken);
  let result = callFB('get', url);
  return Math.max(JSON.parse(result).fan_count,JSON.parse(result).followers_count);

}

function getMe() {
  var url= 'https://graph.facebook.com/v9.0/'+me+'/accounts?access_token='+fbUserToken;
  callFB('get', url);
} 

function getMessages() {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?access_token='+encodeURI(fbAppToken);
  callFB('get', url);
}

function postMessage(text) {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?message='+text+'&access_token='+encodeURI(fbAppToken);
  callFB('post', url);
}

function postMessageHappy(text) {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/feed?message='+text+'&og_action_type_id=383634835006146&og_object_id=241047402726961&access_token='+encodeURI(fbAppToken);
  return callFB('post', url);
}

function postMessagewithFeelingAndPicture(text,file,feeling) {
  var action = ""
  switch (feeling){
    case "happy" : og_action = "383634835006146"; og_object = "528297480516636"; break;
    case "joyful" : og_action = "383634835006146"; og_object = "477906418922117"; break;  //count
    case "loved" : og_action = "383634835006146"; og_object = "123103951186111"; break;   //L (avento)
    case "peaceful" : og_action = "383634835006146"; og_object = "112626832239338"; break;  
    case "greatful" : og_action = "383634835006146"; og_object = "118365354995398"; break;  //B (natale)
    case "blessed" : og_action = "383634835006146"; og_object = "525497104142297"; break;  //"baciato dalla fortuna"
    case "asleep" : og_action = "383634835006146"; og_object = "303442589773009"; break;  //Compieta
    case "guilty" : og_action = "383634835006146"; og_object = "137611796392379"; break; 
    case "blissful" : og_action = "383634835006146"; og_object = "387086391386101"; break;  //G  (pasqua)
    case "miserable" : og_action = "383634835006146"; og_object = "571661296183476"; break;  //D  (quaresima)
    case "meaning_of_live" : og_action = "809473052422320"; og_object = "702785553174397"; break;
    case "looking_for_prayers" : og_action = "601369976565963"; og_object = "642209422517607"; break;
    //beato//387086391386101
    //fiducioso//304503342999403
    //in profondità//232156420251730
    //fortunato//260039780790007
    //lieto//405846839495020
    //cuore spezzato/173736256107087
    //speranzoso//125401434308511
    //impaziente//601002259913609
    //miserabile//571661296183476
    //priviliegiato//574719705877314
    //sore//505758512791686
    //welcomed//441356962596309
    //senso della vita//702785553174397
    //looking for prayers//642209422517607

  }
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/photos';
    var dataJSON = {
    'source': file,
    'message' : text,
    'og_action_type_id': og_action,
    'og_object_id': og_object,
    'access_token': encodeURI(fbAppToken)
  }

  return callFBwithData('post', url, dataJSON);
}

function postMessageWithPicture (text, file) {
  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/photos';
    var dataJSON = {
    'source': file,
    'message' : text,
    'access_token': encodeURI(fbAppToken)
  }
  return callFBwithData ('post', url, dataJSON);
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
  return result;
}

//TO ADD FEELINGS
////https://developers.facebook.com/docs/graph-api/reference/v9.0/page/feed/feelings#objects
//og_action_type_id=383634835006146&og_object_id=241047402726961 = Felicissimo!
//og_action_type_id=383634835006146&og_object_id=387086391386101 = Pieno di gioia
//og_action_type_id=383634835006146&og_object_id=528297480516636 = Happy!

//change icon
//og_icon_id=1561198480803111 = Bibbia
//og_icon_id=963051530439695 = Uova di pasqua
//og_icon_id=250821078407713 = Albero di Natale
//og_icon_id=554424167979437 = Chiesa
