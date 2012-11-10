/*
 * Custum JavaScript
 */

$(function() {
  $('a[rel=tooltip]').tooltip({'placement': 'bottom'});
});
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src="http://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }
  var twlObj = document.getElementById("tweet_anchor");
  if(twlObj != null && twlObj.href != null){
    twlObj.href = url;
    twlObj.innerHTML = 'Twitter�łԂ₭';
  }
}(document,"script","twitter-wjs");