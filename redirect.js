chrome.extension.sendRequest({setIconPath: "icon-color.png"}, function(){});

$(function() {
    replaceOpenGraphTags();
});

function replaceOpenGraphTags() {
    $('a[href*="connect/uiserver.php"]').each(function(index, element) {
        var redirectURI = getURLParameterByName($(element).attr('href'),"redirect_uri");
        $(element).attr("href",redirectURI);
    });
}


function getURLParameterByName(url, name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec(url);

  if(results == null) return "";
  else return decodeURIComponent(results[1].replace(/\+/g, " "));
}
