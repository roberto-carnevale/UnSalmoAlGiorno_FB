//photo
//336258327708130
// 1. 340722687261694
// 2. 336281821039114


//page
//336258267708136

//album
//336282104372419



//Sequence to arrive to a picture
//336258267708136{pageID}?fields=albums
//336282104372419{albumId}?fields=count
//ALL AT ONCE   ==> 336258267708136?fields=albums{photos{name},name}



function postWithPicture() {
  var file = DriveApp.getFolderById("16fgZ4yKCc2c-tOmkyuFNFU-_4Oewu4Fz").getFilesByName("1102.jpg").next().getBlob();

  var url= 'https://graph.facebook.com/v9.0/'+pageId+'/photos';  

  var dataJSON = {
    'source': file,
    'message' : "Nostra Signora di Lourdes secondo post",
    'access_token': fbAppToken
  }

  var option = {
  'method' : 'post',
  'muteHttpExceptions' : true,
  'payload' : dataJSON
  };

  var result = UrlFetchApp.fetch(url, option);
  //Logger.log(result.getAllHeaders());
  Logger.log(result);
  return result;
}



[
  {"media_fbid": "342317347102228"}
]